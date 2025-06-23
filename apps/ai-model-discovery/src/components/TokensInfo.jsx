import React, { useState } from 'react';
import { Button } from '@embed-tools/components';

const TokensInfo = ({ onBack }) => {
    const [sampleText, setSampleText] = useState('');
    const [estimatedTokens, setEstimatedTokens] = useState(0);

    // Simple token estimation (rough approximation)
    const estimateTokens = (text) => {
        if (!text.trim()) {
            setEstimatedTokens(0);
            return;
        }

        const words = text.trim().split(/\s+/).length;
        const characters = text.length;

        // Estimate based on words (handles spaces well)
        const estimateFromWords = Math.ceil(words / 0.75);

        // Estimate based on characters (handles long words/URLs better)
        const estimateFromChars = Math.ceil(characters / 4);

        // Use the higher of the two estimates for a more robust guess
        setEstimatedTokens(Math.max(estimateFromWords, estimateFromChars));
    };

    const handleTextChange = (e) => {
        const text = e.target.value;
        setSampleText(text);
        estimateTokens(text);
    };

    return (
        <div>
            <div className="text-center mb-6">
                <Button 
                    variant="outline" 
                    onClick={onBack}
                    className="mb-4"
                >
                    ← Back to Quiz
                </Button>
            </div>
            <section className="bg-card p-6 sm:p-8 rounded-2xl shadow-2xl mb-12 border border-border">
                <h2 className="text-3xl font-bold text-primary mb-6">
                    What are "Tokens"?
                </h2>
                <div className="text-foreground leading-relaxed space-y-8 pt-4 border-t border-border">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="mb-4">
                                In the world of AI models like those used for text writing and translation, a "token" is a fundamental unit of text that the model processes. It's how AI models "see" and understand language.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>
                                    <strong>Not just words:</strong> Tokens aren't always whole words. For example, the word "understanding" might be broken down into "under", "stand", and "ing" as separate tokens. Punctuation marks, spaces, and even parts of words can be tokens.
                                </li>
                                <li>
                                    <strong>Model-specific:</strong> The exact way text is broken into tokens varies between different AI models.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="mb-4">
                                Understanding tokens is crucial for business owners because they directly impact:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li>
                                    <strong>Cost:</strong> AI models are often priced "per token" for both input (what you send to the model) and output (what the model generates). More tokens mean higher costs.
                                </li>
                                <li>
                                    <strong>Context Window:</strong> This refers to the maximum number of tokens an AI model can "remember" or consider at one time. A larger context window allows the model to process longer documents, maintain conversation history, or understand complex instructions.
                                </li>
                                <li>
                                    <strong>Performance:</strong> Efficient tokenization and effective use of the context window contribute to the model's ability to generate coherent, relevant, and high-quality text or translations.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Token Estimator */}
                    <div className="bg-accent p-6 rounded-xl border border-border">
                        <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            Token Estimator
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Paste your text below to get an estimate of how many tokens it might use. This is a rough approximation - actual tokenization varies by model.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="sampleText" className="block text-sm font-medium text-foreground mb-2">
                                    Your Text:
                                </label>
                                <textarea
                                    id="sampleText"
                                    value={sampleText}
                                    onChange={handleTextChange}
                                    placeholder="Paste your text here to estimate tokens..."
                                    className="w-full h-32 p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring resize-none bg-background text-foreground"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-card p-4 rounded-lg border border-border">
                                    <div className="text-2xl font-bold text-primary">{estimatedTokens}</div>
                                    <div className="text-sm text-muted-foreground">Estimated Tokens</div>
                                </div>
                                <div className="bg-card p-4 rounded-lg border border-border">
                                    <div className="text-2xl font-bold text-secondary-foreground">{sampleText.trim().split(/\s+/).filter(word => word.length > 0).length}</div>
                                    <div className="text-sm text-muted-foreground">Words</div>
                                </div>
                                <div className="bg-card p-4 rounded-lg border border-border">
                                    <div className="text-2xl font-bold text-accent-foreground">{sampleText.length}</div>
                                    <div className="text-sm text-muted-foreground">Characters</div>
                                </div>
                            </div>

                            <div className="text-xs text-muted-foreground bg-card p-3 rounded border border-border">
                                <strong>Note:</strong> This is a simplified estimation based on a common rule of thumb where <strong>1 word ≈ 1.33 tokens</strong> (or 1 token ≈ 0.75 words). Actual tokenization depends on the specific AI model, language, and text complexity. For precise counts, use the model's official tokenizer.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TokensInfo; 