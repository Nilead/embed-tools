// src/components/ModelCard.js
import React, { useState } from 'react';

// You can create a helper for this if you use it often
const formatNumber = (num) => new Intl.NumberFormat('en-US').format(num);

const ModelCard = ({ model }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="bg-card p-6 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col relative group"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            {/* Click hint indicator */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                    {isExpanded ? 'Click to collapse' : 'Click to expand'}
                </div>
            </div>

            <h3 className="text-2xl font-semibold text-primary mb-2">{model.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{model.provider}</p>
            <p className="text-muted-foreground mb-4 flex-grow text-base">{model.description}</p>

            {/* Expandable indicator */}
            <div className="flex items-center justify-between mt-auto">
                <div className="text-xs text-muted-foreground">
                    {isExpanded ? 'Click to see less' : 'Click to see more details'}
                </div>
                <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                        <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                </div>
            </div>

            {isExpanded && (
                <div className="mt-4 pt-4 border-t border-border space-y-4">
                    {/* Token Limits */}
                    <div>
                        <h4 className="font-medium text-foreground mb-1">Token Limits</h4>
                        <ul className="text-foreground text-sm list-disc list-inside space-y-1">
                            <li>Context Window: {formatNumber(model.tokenLimits.contextWindow)} tokens</li>
                            <li>Output Token Limit: {model.tokenLimits.outputTokenLimit}</li>
                            <li className="text-muted-foreground text-xs mt-1">{model.tokenLimits.notes}</li>
                        </ul>
                    </div>
                    {/* Pricing */}
                    <div>
                        <h4 className="font-medium text-foreground mb-1">Pricing (per 1M tokens)</h4>
                         <ul className="text-foreground text-sm list-disc list-inside space-y-1">
                            <li>Input Cost: ${model.pricing.inputCost.toFixed(2)}</li>
                            <li>Output Cost: ${model.pricing.outputCost.toFixed(2)}</li>
                            <li className="text-muted-foreground text-xs mt-1">{model.pricing.notes}</li>
                        </ul>
                    </div>
                    {/* Use Cases */}
                    <div>
                        <h4 className="font-medium text-foreground mb-1">Recommended Use Cases</h4>
                        <ul className="text-foreground text-sm list-disc list-inside space-y-1">
                            {model.useCases.map((useCase, idx) => <li key={idx}>{useCase}</li>)}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModelCard;