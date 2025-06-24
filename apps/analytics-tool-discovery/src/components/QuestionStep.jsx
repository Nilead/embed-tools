import React from 'react';
import { Card, CardContent } from '@embed-tools/components';

const QuestionStep = ({ question, currentAnswer, onAnswer, onBack, currentStep, totalSteps }) => {
    const handleOptionSelect = (value) => {
        onAnswer(question.key, value);
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="bg-card rounded-xl shadow-lg p-8 relative min-h-[500px] flex flex-col">
                <div className="flex-grow">
                    <h2 className="text-2xl font-bold mb-6 text-foreground">{question.text}</h2>
                    <div className="space-y-4">
                        {question.options.map((option, index) => (
                            <div key={index}>
                                <input 
                                    type="radio" 
                                    name={question.key} 
                                    id={`${question.key}-${index}`} 
                                    value={option.value} 
                                    className="hidden"
                                    checked={currentAnswer === option.value}
                                    onChange={() => handleOptionSelect(option.value)}
                                />
                                <label 
                                    htmlFor={`${question.key}-${index}`} 
                                    className="option-label block w-full text-left p-4 border-2 border-border rounded-lg cursor-pointer text-foreground font-medium transition-all duration-200 hover:bg-muted/50"
                                >
                                    {option.text}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center">
                <button 
                    onClick={onBack}
                    className="bg-muted text-muted-foreground font-bold py-2 px-6 rounded-lg hover:bg-muted/80 transition-colors"
                    style={{ visibility: currentStep === 0 ? 'hidden' : 'visible' }}
                >
                    Back
                </button>
                <div className="text-sm text-muted-foreground">
                    Step {currentStep + 1} of {totalSteps}
                </div>
            </div>
        </div>
    );
};

export default QuestionStep; 