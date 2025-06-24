import React from 'react';
import { Card, CardContent, Button, Badge, Separator } from '@embed-tools/components';

const ResultsStep = ({ recommendedTools, userAnswers, questions, onRestart }) => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-foreground">Your Recommendations</h2>
                <p className="text-lg text-muted-foreground mt-2">Based on your answers, here are the best tools for you.</p>
            </div>
            
            {/* Summary of selections */}
            <div className="bg-card rounded-xl shadow-lg p-6 mb-8">
                <h4 className="font-bold text-lg mb-3 text-foreground text-center">Your Selections</h4>
                <div className="flex flex-wrap justify-center gap-2">
                    {questions.map(q => {
                        const answerValue = userAnswers[q.key];
                        const answer = q.options.find(opt => opt.value === answerValue);
                        return (
                            <Badge
                                key={q.key}
                                variant="secondary"
                                className="text-base px-4 py-2 rounded-full font-semibold bg-indigo-100 text-indigo-800 border-none shadow-sm"
                            >
                                {q.text.split(' ')[0]}: <span className="font-bold">{answer.text}</span>
                            </Badge>
                        );
                    })}
                </div>
            </div>

            {/* Tool recommendations */}
            <div className="space-y-8">
                {recommendedTools.map((tool, index) => {
                    const isTopPick = index === 0;
                    return (
                        <Card
                            key={tool.name}
                            className={`result-card bg-white rounded-xl shadow-lg p-8 border-2 ${isTopPick ? 'border-green-400' : 'border-border'} transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl`}
                        >
                            {isTopPick && (
                                <div className="text-center mb-4">
                                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-base font-bold px-6 py-2 rounded-full border-green-400 border-2 shadow-md">
                                        Top Recommendation
                                    </Badge>
                                </div>
                            )}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                                <span className="text-6xl mb-4 sm:mb-0 sm:mr-6">{tool.logo}</span>
                                <div>
                                    <h3 className="text-3xl font-bold text-foreground mb-1">{tool.name}</h3>
                                    <p className="text-muted-foreground mt-1 mb-2 text-lg">{tool.description}</p>
                                </div>
                            </div>
                            <Separator className="my-6" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                                <div>
                                    <h4 className="font-semibold text-xl mb-2 text-green-700">Pros</h4>
                                    <ul className="space-y-2 text-foreground">
                                        {tool.pros.map((pro, i) => (
                                            <li key={i} className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>{pro}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-xl mb-2 text-red-700">Cons</h4>
                                    <ul className="space-y-2 text-foreground">
                                        {tool.cons.map((con, i) => (
                                            <li key={i} className="flex items-start">
                                                <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                                </svg>
                                                <span>{con}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition-colors"
                                >
                                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                                        Visit Website &rarr;
                                    </a>
                                </Button>
                            </div>
                        </Card>
                    );
                })}
            </div>
            
            <div className="text-center mt-10">
                <Button
                    onClick={onRestart}
                    size="lg"
                    variant="secondary"
                    className="cursor-pointer font-bold py-3 px-8 rounded-lg text-lg shadow-md hover:bg-muted/80"
                >
                    Start Over
                </Button>
            </div>
        </div>
    );
};

export default ResultsStep; 