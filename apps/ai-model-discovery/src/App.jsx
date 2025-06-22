import React, { useReducer, useEffect } from 'react';
import { quizSteps } from './data/quizConfig';
import { useModelRecommender } from './hooks/useModelRecommender';
import QuestionStep from './components/QuestionStep';
import ResultsStep from './components/ResultsStep';
import TokensInfo from './components/TokensInfo';

const initialState = {
  currentStep: 0, // 0 is welcome, 1-3 are questions, 4 is results
  answers: {},
};

function quizReducer(state, action) {
  switch (action.type) {
    case 'ANSWER':
      // Automatically advance step after answering
      const nextStep = state.currentStep >= quizSteps.length ? state.currentStep + 1 : state.currentStep + 1;
      return {
        ...state,
        answers: { ...state.answers, [action.key]: action.value },
        currentStep: nextStep
      };
    case 'SET_STEP':
        return { ...state, currentStep: action.payload };
    case 'RESTART':
      return { ...initialState, currentStep: 1 }; // Go to first question on restart
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { currentStep, answers } = state;

  const recommendedModels = useModelRecommender(currentStep === quizSteps.length + 1 ? answers : null);

  const handleAnswer = (key, value) => {
    dispatch({ type: 'ANSWER', key, value });
  };
  
  const handleBack = () => {
      if (currentStep > 0) {
          dispatch({type: 'SET_STEP', payload: currentStep -1});
      }
  }

  const renderStep = () => {
      // Welcome Screen
    if (currentStep === 0) {
      return (
        <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Discover the Best AI Model for Your Needs</h2>
            <p className="text-lg text-gray-700 mb-8">Answer a few questions to find the perfect AI model.</p>
            <button
                onClick={() => dispatch({type: 'SET_STEP', payload: 1})}
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
            >
                Start Discovery
            </button>
        </div>
      );
    }
    
    // Question screens
    if(currentStep > 0 && currentStep <= quizSteps.length) {
        const stepConfig = quizSteps.find(step => step.step === currentStep);
        return (
            <QuestionStep 
                stepConfig={stepConfig}
                currentAnswer={answers[stepConfig.key]}
                onAnswer={handleAnswer}
                onBack={handleBack}
            />
        )
    }

    // Results screen
    if(currentStep === quizSteps.length + 1) {
        return (
            <ResultsStep 
                recommendedModels={recommendedModels}
                onBack={handleBack}
                onRestart={() => dispatch({type: 'RESTART'})}
            />
        )
    }

    return null; // Should not happen
  };

  return (
    <div className="font-sans antialiased bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen text-gray-800 p-4 sm:p-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800">AI Model Discovery</h1>
      </header>
      
      <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl mb-12 border border-blue-100">
        {renderStep()}
      </section>

      <TokensInfo />

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>&copy; 2025 AI Model Discovery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
