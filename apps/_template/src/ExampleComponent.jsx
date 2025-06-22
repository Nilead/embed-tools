import React, { useState } from 'react';

const ExampleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="p-6 space-y-6">
      {/* New Tailwind v4 features demonstration */}
      
      {/* 1. New spacing utilities */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gradient">Tailwind v4 Features</h2>
        
        {/* 2. Glass effect utility */}
        <div className="glass-effect p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-3">Glass Effect Card</h3>
          <p className="text-gray-600">
            This card uses the new glass effect utility with backdrop blur.
          </p>
        </div>
        
        {/* 3. Custom component classes */}
        <div className="space-y-3">
          <button className="btn-primary">
            Primary Button
          </button>
          <button className="btn-secondary">
            Secondary Button
          </button>
        </div>
        
        {/* 4. New animation utilities */}
        <div className="space-y-4">
          <button 
            onClick={() => setIsVisible(!isVisible)}
            className="btn-primary"
          >
            Toggle Animation
          </button>
          
          {isVisible && (
            <div className="animate-fade-in">
              <div className="card animate-slide-up">
                <h4 className="font-semibold mb-2">Animated Content</h4>
                <p className="text-gray-600">
                  This content appears with custom animations using Tailwind v4.
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* 5. CSS custom properties usage */}
        <div 
          className="p-4 rounded-lg text-white"
          style={{
            backgroundColor: `rgb(var(--color-primary))`,
          }}
        >
          <h4 className="font-semibold mb-2">CSS Custom Properties</h4>
          <p>This uses CSS custom properties defined in the theme.</p>
        </div>
        
        {/* 6. New spacing utilities */}
        <div className="space-y-4">
          <div className="w-18 h-18 bg-primary-200 rounded-lg flex items-center justify-center">
            <span className="text-sm font-medium">w-18 h-18</span>
          </div>
          <div className="w-88 h-20 bg-primary-300 rounded-lg flex items-center justify-center">
            <span className="text-sm font-medium">w-88 (22rem)</span>
          </div>
        </div>
        
        {/* 7. Enhanced hover support */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <p className="text-sm">Hover me (desktop only)</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <p className="text-sm">Hover me (desktop only)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent; 