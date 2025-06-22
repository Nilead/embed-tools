// src/components/ModelCard.js
import React, { useState } from 'react';

// You can create a helper for this if you use it often
const formatNumber = (num) => new Intl.NumberFormat('en-US').format(num);

const ModelCard = ({ model }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex flex-col"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">{model.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{model.provider}</p>
            <p className="text-gray-600 mb-4 flex-grow text-base">{model.description}</p>

            {isExpanded && (
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                    {/* Token Limits */}
                    <div>
                        <h4 className="font-medium text-gray-800 mb-1">Token Limits</h4>
                        <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                            <li>Context Window: {formatNumber(model.tokenLimits.contextWindow)} tokens</li>
                            <li>Output Token Limit: {model.tokenLimits.outputTokenLimit}</li>
                            <li className="text-gray-500 text-xs mt-1">{model.tokenLimits.notes}</li>
                        </ul>
                    </div>
                    {/* Pricing */}
                    <div>
                        <h4 className="font-medium text-gray-800 mb-1">Pricing (per 1M tokens)</h4>
                         <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                            <li>Input Cost: ${model.pricing.inputCost.toFixed(2)}</li>
                            <li>Output Cost: ${model.pricing.outputCost.toFixed(2)}</li>
                            <li className="text-gray-500 text-xs mt-1">{model.pricing.notes}</li>
                        </ul>
                    </div>
                    {/* Use Cases */}
                    <div>
                        <h4 className="font-medium text-gray-800 mb-1">Recommended Use Cases</h4>
                        <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                            {model.useCases.map((useCase, idx) => <li key={idx}>{useCase}</li>)}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModelCard;