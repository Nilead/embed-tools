// src/components/QuestionStep.js
import React from 'react';

const QuestionStep = ({ stepConfig, currentAnswer, onAnswer, onBack }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">{stepConfig.question}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {stepConfig.options.map(option => (
          <button
            key={option.value}
            onClick={() => onAnswer(stepConfig.key, option.value)}
            className={`p-4 rounded-xl shadow-md transition duration-200 border-2 ${
              currentAnswer === option.value
                ? 'bg-blue-100 border-blue-600 text-blue-800'
                : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="mt-10 flex justify-center space-x-4">
        <button
          onClick={onBack}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-md"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default QuestionStep;