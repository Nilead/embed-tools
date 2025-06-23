// src/components/ResultsStep.js
import React from 'react';
import ModelCard from './ModelCard';
import { Button } from '@embed-tools/components';

const ResultsStep = ({ recommendedModels, onBack, onRestart }) => {
  // Safety check
  const models = recommendedModels || [];
  
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
        Recommended AI Models for You
      </h2>
      {models.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-muted-foreground mt-10">
          No models found matching your criteria. Try adjusting your selections.
        </p>
      )}
      <div className="mt-12 text-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="w-full sm:w-auto font-bold py-3 px-8 rounded-full shadow-md"
        >
          Back to Questions
        </Button>
        <Button
          onClick={onRestart}
          className="w-full sm:w-auto font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105"
        >
          Restart Discovery
        </Button>
      </div>
    </div>
  );
};

export default ResultsStep;
