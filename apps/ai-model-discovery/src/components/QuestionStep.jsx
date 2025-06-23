// src/components/QuestionStep.js
import React from 'react';
import { Button } from '@embed-tools/components';

const QuestionStep = ({ stepConfig, currentAnswer, onAnswer, onBack }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-foreground mb-6">{stepConfig.question}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {stepConfig.options.map(option => (
          <button
            key={option.value}
            onClick={() => onAnswer(stepConfig.key, option.value)}
            className={`p-4 rounded-xl shadow-md transition duration-200 border-2 ${
              currentAnswer === option.value
                ? 'bg-accent border-primary text-accent-foreground'
                : 'bg-background border-border hover:bg-accent hover:border-primary/50 text-foreground'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="mt-10 flex justify-center space-x-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="font-bold py-2 px-6 rounded-full shadow-md"
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default QuestionStep;
