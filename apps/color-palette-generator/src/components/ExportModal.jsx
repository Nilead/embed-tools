import React, { useState } from 'react';
import { Button } from '@embed-tools/components';
import { rgbToHex } from '../utils/colorUtils';

const ExportModal = ({ isOpen, onClose, palettes }) => {
  const [copied, setCopied] = useState(false);
  
  const generateExportText = () => {
    let exportString = `--- Generated Palettes ---\n\n`;
    const toHex = (rgb) => rgbToHex(rgb[0], rgb[1], rgb[2]).toUpperCase();
    
    exportString += `Dominant Colors:\n${palettes.dominant.map(toHex).join(', ')}\n\n`;
    exportString += `Monochromatic Sets:\n`;
    palettes.monochromatic.forEach((set, i) => {
      exportString += `Set ${i+1}: ${set.map(toHex).join(', ')}\n`;
    });
    exportString += `\n`;
    exportString += `Analogous Palette:\n${palettes.analogous.map(toHex).join(', ')}\n\n`;
    exportString += `Complementary Palette:\n${palettes.complementary.map(toHex).join(', ')}\n\n`;
    
    return exportString;
  };
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateExportText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-xl max-w-2xl w-full p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="cursor-pointer text-2xl font-bold text-gray-900 dark:text-white">Export Palettes</h2>
          <button 
            onClick={onClose}
            className="cursor-pointer text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white text-2xl"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <p className="text-gray-700 dark:text-gray-200 mb-4">
          Copy the text below to share your generated color palettes.
        </p>
        <textarea
          readOnly
          value={generateExportText()}
          className="w-full h-64 bg-gray-50 dark:bg-neutral-800 p-3 rounded-md font-mono text-sm border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button
          onClick={copyToClipboard}
          className="mt-4 w-full"
        >
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </Button>
      </div>
    </div>
  );
};

export default ExportModal; 