import React from 'react';
import { rgbToHex, getContrastColor } from '../utils/colorUtils';

const ColorSwatch = ({ rgb, onClick }) => {
  const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
  const textColor = getContrastColor(rgb);
  
  return (
    <div
      className="cursor-pointer p-3 rounded-lg flex-grow text-center min-w-[80px] transition-all duration-200 hover:scale-105 hover:shadow-lg"
      style={{ 
        backgroundColor: `rgb(${rgb.join(',')})`,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
      onClick={() => onClick(hex)}
    >
      <span 
        className="font-semibold text-sm"
        style={{ 
          color: textColor, 
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)' 
        }}
      >
        {hex.toUpperCase()}
      </span>
    </div>
  );
};

export default ColorSwatch; 