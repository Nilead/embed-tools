import { useReducer, useState } from 'react';
import { quizConfig } from './data/quizConfig';
import { aiModels } from './data/aiModels';
import QuestionStep from './components/QuestionStep';
import ResultsStep from './components/ResultsStep';
import TokensInfo from './components/TokensInfo';
import { Card, CardContent } from '@embed-tools/components';
import { Button } from '@embed-tools/components';

const initialState = {
  currentStep: 0,
  answers: {},
  showTokensInfo: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.answer,
        },
      };
    case 'NEXT_STEP':
      return { ...state, currentStep: state.currentStep + 1 };
    case 'PREVIOUS_STEP':
      return { ...state, currentStep: Math.max(0, state.currentStep - 1) };
    case 'RESTART':
      return initialState;
    case 'TOGGLE_TOKENS_INFO':
      return { ...state, showTokensInfo: !state.showTokensInfo };
    default:
      throw new Error('Unknown action type');
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentStep, answers, showTokensInfo } = state;
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(false);
  const isEmbedded = window.self !== window.top;

  const isQuizFinished = currentStep >= quizConfig.questions.length - 1;

  // Calculate recommended models based on answers
  const getRecommendedModels = (answers) => {
    if (!answers.primaryTask) {
      return [];
    }

    const filtered = aiModels.filter(model => {
      // Check if model supports the primary task
      const supportsTask = model.tags.task.includes(answers.primaryTask);

      // Check priority match
      const priorityMatch = answers.keyPriority ?
        model.tags.priority.includes(answers.keyPriority) : true;

      // Check volume control
      const volumeMatch = answers.volumeControl ?
        (answers.volumeControl === 'self-hosting' ?
          model.tags.features?.includes('self-hosting') :
          answers.volumeControl === 'high-volume' ?
            model.tags.special?.includes('high-volume') : true) : true;

      return supportsTask && priorityMatch && volumeMatch;
    }).sort((a, b) => {
      // Sort by quality (premium first) and then by input cost
      if (a.tags.quality === 'premium' && b.tags.quality !== 'premium') return -1;
      if (b.tags.quality === 'premium' && a.tags.quality !== 'premium') return 1;
      return a.pricing.inputCost - b.pricing.inputCost;
    });

    return filtered;
  };

  const recommendedModels = getRecommendedModels(answers) || [];

  // Generate breadcrumb text from answers
  const getBreadcrumbText = () => {
    const criteria = [];

    // Find the selected option labels from quiz config
    quizConfig.questions.forEach(question => {
      const selectedValue = answers[question.id];
      if (selectedValue) {
        const selectedOption = question.options.find(option => option.value === selectedValue);
        if (selectedOption) {
          criteria.push(selectedOption.label);
        }
      }
    });

    return criteria.length > 0 ? criteria.join(' • ') : null;
  };

  const breadcrumbText = getBreadcrumbText();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
          {!isEmbedded && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">AI Model Discovery Tool</h1>
              <p className="text-muted-foreground mt-2">
                Find the perfect AI model for your needs by answering a few simple questions.
              </p>
            </>
          )}
          <Button
            variant="outline"
            onClick={() => dispatch({ type: 'TOGGLE_TOKENS_INFO' })}
            className="mt-4"
          >
            What are tokens?
          </Button>
        </header>

        {/* Breadcrumb showing selected criteria */}
        {breadcrumbText && !showTokensInfo && (
          <div className="mb-6 p-4 bg-muted/50 rounded-lg border">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Selected criteria:</span>
              <span className="text-sm text-foreground">{breadcrumbText}</span>
            </div>
          </div>
        )}

        <Card className="overflow-hidden">
          <CardContent className="p-8">
            {showTokensInfo ? (
              <TokensInfo onBack={() => dispatch({ type: 'TOGGLE_TOKENS_INFO' })} />
            ) : isQuizFinished ? (
              <ResultsStep
                recommendedModels={recommendedModels}
                onBack={() => dispatch({ type: 'PREVIOUS_STEP' })}
                onRestart={() => dispatch({ type: 'RESTART' })}
              />
            ) : (
              <QuestionStep
                stepConfig={quizConfig.questions[currentStep]}
                currentAnswer={answers[quizConfig.questions[currentStep].id]}
                onAnswer={(questionId, answer) => {
                  dispatch({ type: 'ANSWER_QUESTION', payload: { questionId, answer } });
                  // Auto-advance to next step after a short delay
                  setTimeout(() => {
                    if (currentStep < quizConfig.questions.length - 1) {
                      dispatch({ type: 'NEXT_STEP' });
                    }
                  }, 500);
                }}
                onBack={() => dispatch({ type: 'PREVIOUS_STEP' })}
              />
            )}
          </CardContent>
        </Card>

        <footer className="mt-6 text-center">
          {(!isQuizFinished && !showTokensInfo) && (
            <div className="flex justify-center items-center">
              <p className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {quizConfig.questions.length}
              </p>
            </div>
          )}
        </footer>

        {!isEmbedded && (
          <footer className="text-center mt-12 text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} AI Model Discovery Tool</p>
            <p className="mt-1">Fully managed One-Stop Digital Marketing Platform</p>
            <p className="mt-2">
              Powered by{' '}
              <a
                href="https://nilead.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors"
              >
                Nilead
              </a>
            </p>
          </footer>
        )}
      </div>
    </div>
  );
}
