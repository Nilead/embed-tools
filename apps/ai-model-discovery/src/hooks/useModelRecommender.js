// src/hooks/useModelRecommender.js
import { useState, useEffect } from 'react';
import { aiModels } from '../data/aiModels';

export function useModelRecommender(answers) {
    const [recommendedModels, setRecommendedModels] = useState([]);

    useEffect(() => {
        if (!answers || Object.keys(answers).length === 0) {
            setRecommendedModels([]);
            return;
        }

        let filtered = [...aiModels];

        // Filter by Primary Task
        if (answers.primaryTask) {
            filtered = filtered.filter(model => model.tags.task.includes(answers.primaryTask));
        }

        // Filter by Volume & Data Control
        if (answers.volumeControl) {
            if (answers.volumeControl === 'high-volume') {
                filtered = filtered.filter(model => model.tags.special?.includes('high-volume'));
            } else if (answers.volumeControl === 'self-hosting') {
                filtered = filtered.filter(model => model.tags.features?.includes('self-hosting'));
            }
        }

        // Sort by Key Priority
        if (answers.keyPriority) {
            const sorter = [...filtered]; // Create a copy to sort
            switch (answers.keyPriority) {
                case 'cost-efficiency':
                    sorter.sort((a, b) => (a.pricing.inputCost + a.pricing.outputCost) - (b.pricing.inputCost + b.pricing.outputCost));
                    break;
                case 'top-quality':
                    const qualityOrder = { 'premium': 3, 'balanced': 2, 'economy': 1 };
                    sorter.sort((a, b) => (qualityOrder[b.tags.quality] || 0) - (qualityOrder[a.tags.quality] || 0));
                    break;
                case 'large-context':
                    sorter.sort((a, b) => b.tokenLimits.contextWindow - a.tokenLimits.contextWindow);
                    break;
                case 'speed-latency':
                    const speedOrder = { 'fast': 3, 'moderate': 2, 'slow': 1 };
                     sorter.sort((a, b) => {
                        const aScore = speedOrder[a.tags.speed] || 0;
                        const bScore = speedOrder[b.tags.speed] || 0;
                        return bScore - aScore;
                    });
                    break;
                default:
                    break;
            }
            filtered = sorter;
        }

        setRecommendedModels(filtered);

    }, [answers]);

    return recommendedModels;
}