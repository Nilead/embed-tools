import React, { useState, useEffect } from 'react';
import { BarChart3 } from 'lucide-react';
import { tools } from './data/tools';
import { questions } from './data/questions';
import QuestionStep from './components/QuestionStep';
import ResultsStep from './components/ResultsStep';
import Breadcrumbs from './components/Breadcrumbs';
import { Badge } from '@embed-tools/components';

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [recommendedTools, setRecommendedTools] = useState([]);
  const isEmbedded = window.self !== window.top;

  const handleAnswer = (questionKey, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionKey]: answer
    }));

    // Auto-advance to next step after a short delay
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        calculateResults();
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleBreadcrumbClick = (index) => {
    setCurrentStep(index);
    // Clear subsequent answers
    const newAnswers = { ...userAnswers };
    for (let i = index; i < questions.length; i++) {
      delete newAnswers[questions[i].key];
    }
    setUserAnswers(newAnswers);
  };

  const calculateResults = () => {
    const scores = tools.map(tool => {
      let score = 0;
      Object.keys(userAnswers).forEach(key => {
        if (tool.tags[key] && tool.tags[key].includes(userAnswers[key])) {
          // Give higher weight to more important factors
          if (key === 'goal' || key === 'privacy' || key === 'size') {
            score += 2;
          } else {
            score += 1;
          }
        }
      });
      return { ...tool, score };
    });

    const sortedTools = scores.sort((a, b) => b.score - a.score);
    setRecommendedTools(sortedTools.slice(0, 3));
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setUserAnswers({});
    setShowResults(false);
    setRecommendedTools([]);
  };

  const currentQuestion = questions[currentStep];
  const currentAnswer = userAnswers[currentQuestion?.key];

  // Standardized selection summary badges
  const selectionBadges = questions
    .filter((q, i) => userAnswers[q.key] && i <= currentStep)
    .map(q => {
      const answer = q.options.find(opt => opt.value === userAnswers[q.key]);
      return (
        <Badge
          key={q.key}
          variant="secondary"
          className="text-base px-4 py-2 rounded-full font-semibold bg-indigo-100 text-indigo-800 border-none shadow-sm"
        >
          {q.text.split(' ')[0]}: <span className="font-bold">{answer.text}</span>
        </Badge>
      );
    });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        {!isEmbedded && (
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-3">
              <BarChart3 className="text-primary" />
              Analytics Tool Discovery
            </h1>
            <p className="text-muted-foreground mt-2">
              Find the perfect analytics tool for your needs by answering a few simple questions.
            </p>
          </header>
        )}
        {!showResults ? (
          <div>
            {/* Standardized selection summary in a card */}
            {selectionBadges.length > 0 && (

              <div className="bg-card rounded-xl shadow-lg p-6 mb-8">
                <h4 className="font-bold text-lg mb-3 text-foreground text-center">Your Selections</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {selectionBadges}
                </div>
              </div>
            )}
            <QuestionStep
              question={currentQuestion}
              currentAnswer={currentAnswer}
              onAnswer={handleAnswer}
              onBack={handleBack}
              currentStep={currentStep}
              totalSteps={questions.length}
            />
          </div>
        ) : (
          <ResultsStep
            recommendedTools={recommendedTools}
            userAnswers={userAnswers}
            questions={questions}
            onRestart={handleRestart}
          />
        )}

        {!isEmbedded && (
          <footer className="text-center mt-12 text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Analytics Tool Discovery</p>
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
};

export default App;