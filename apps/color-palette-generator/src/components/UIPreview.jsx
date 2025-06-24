import React, { useState } from 'react';
import { Button } from '@embed-tools/components';
import { getContrastRatio, getContrastColor } from '../utils/colorUtils';

const UIPreview = ({ palette }) => {
  const [previewKey, setPreviewKey] = useState(0);
  
  const generateUICards = () => {
    if (!palette || palette.length === 0) return [];
    
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const cards = [];
    
    for (let i = 0; i < 3; i++) {
      const scheme = { 
        bg: getRandom(palette), 
        head: getRandom(palette), 
        text: getRandom(palette), 
        btn: getRandom(palette) 
      };
      
      if (palette.length > 1) {
        while (scheme.text === scheme.bg) {
          scheme.text = getRandom(palette);
        }
      }
      
      const { bg, head, text, btn } = scheme;
      let finalTextColor = text;
      
      if (getContrastRatio(bg, text) < 2.5) {
        finalTextColor = palette.reduce((best, current) => 
          getContrastRatio(bg, current) > getContrastRatio(bg, best) ? current : best
        );
      }
      
      cards.push({ bg, head, text: finalTextColor, btn });
    }
    
    return cards;
  };
  
  const cards = generateUICards();
  
  return (
    <div className="mb-6">
      <div className="border-b-2 border-gray-200 dark:border-gray-600 pb-2 mb-4 flex justify-between items-center">
        <h3 className="text-xl font-bold">UI Previews</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPreviewKey(prev => prev + 1)}
          className="cursor-pointer rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Refresh Previews
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={`${previewKey}-${index}`}
            className="rounded-lg shadow-lg overflow-hidden border dark:border-gray-700"
            style={{ backgroundColor: `rgb(${card.bg.join(',')})` }}
          >
            <div 
              className="p-4"
              style={{ 
                backgroundColor: `rgb(${card.head.join(',')})`, 
                color: getContrastColor(card.head) 
              }}
            >
              <h4 className="font-bold text-lg">Card Header</h4>
            </div>
            <div className="p-4" style={{ color: `rgb(${card.text.join(',')})` }}>
              <p className="mb-4">This is some example text to demonstrate readability on the background color.</p>
              <button 
                className="font-bold py-2 px-4 rounded"
                style={{ 
                  backgroundColor: `rgb(${card.btn.join(',')})`, 
                  color: getContrastColor(card.btn) 
                }}
              >
                A Button
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UIPreview; 