// src/components/ResultsStep.js
import React from 'react';
import ModelCard from './ModelCard';

const ResultsStep = ({ recommendedModels, onBack, onRestart }) => {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-8 text-center">
        Recommended AI Models for You
      </h2>
      {recommendedModels.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-600 mt-10">
          No models found matching your criteria. Try adjusting your selections.
        </p>
      )}
      <div className="mt-12 text-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={onBack}
          className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out"
        >
          Back to Questions
        </button>
        <button
          onClick={onRestart}
          className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Restart Discovery
        </button>
      </div>
    </div>
  );
};

export default ResultsStep;