import React from 'react';

const Breadcrumbs = ({ userAnswers, questions, currentStep, onBreadcrumbClick }) => {
    const breadcrumbs = [];
    
    for (let i = 0; i < currentStep; i++) {
        const question = questions[i];
        const answerValue = userAnswers[question.key];
        if (answerValue) {
            const answerText = question.options.find(opt => opt.value === answerValue).text;
            breadcrumbs.push({
                index: i,
                key: question.key,
                text: answerText
            });
        }
    }

    if (breadcrumbs.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2 mb-6">
            {breadcrumbs.map((breadcrumb) => (
                <div
                    key={breadcrumb.index}
                    className="breadcrumb-pill bg-muted text-muted-foreground text-sm font-semibold px-3 py-1 rounded-full cursor-pointer flex items-center transition-all duration-200 hover:bg-muted/80 hover:-translate-y-0.5"
                    onClick={() => onBreadcrumbClick(breadcrumb.index)}
                >
                    <span>
                        {breadcrumb.key.charAt(0).toUpperCase() + breadcrumb.key.slice(1)}: <strong>{breadcrumb.text}</strong>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Breadcrumbs; 