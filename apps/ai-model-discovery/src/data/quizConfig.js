// src/data/quizConfig.js

export const quizSteps = [
    {
        step: 1,
        key: 'primaryTask',
        question: 'What is your primary task or application?',
        options: [
            { value: 'long_document', label: 'Long-Form Document Processing / Complex Text Generation' },
            { value: 'translation', label: 'High-Quality Translation' },
            { value: 'conversational_ai', label: 'Conversational AI / Chatbots' },
            { value: 'reasoning', label: 'Reasoning / Analytical Tasks / Coding' },
            { value: 'text_generation', label: 'General-Purpose Text Writing' },
        ]
    },
    {
        step: 2,
        key: 'keyPriority',
        question: 'What is your most important priority?',
        options: [
            { value: 'cost-efficiency', label: 'Cost-Efficiency (Lowest Price)' },
            { value: 'top-quality', label: 'Highest Quality / Accuracy' },
            { value: 'large-context', label: 'Largest Context Window' },
            { value: 'speed-latency', label: 'Fastest Performance / Low Latency' },
        ]
    },
    {
        step: 3,
        key: 'volumeControl',
        question: 'What about volume and data control?',
        options: [
            { value: 'high-volume', label: 'High Volume / Repetitive Queries' },
            { value: 'medium-low', label: 'Medium or Low Volume / Varied Queries' },
            { value: 'self-hosting', label: 'Data Privacy / Prefer Self-Hosting (open-source)' },
        ]
    }
];