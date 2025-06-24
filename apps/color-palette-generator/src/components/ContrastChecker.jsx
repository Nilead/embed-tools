import React from 'react';
import { getContrastRatio } from '../utils/colorUtils';

const ContrastChecker = ({ palette }) => (
  <div className="mb-6">
    <div className="border-b-2 border-gray-200 dark:border-gray-600 pb-2 mb-4 flex justify-between items-center">
      <h3 className="text-xl font-bold">Contrast Checker</h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {palette.map((rgb, index) => {
        const white = [255, 255, 255];
        const black = [0, 0, 0];
        const contrastWhite = getContrastRatio(rgb, white).toFixed(2);
        const contrastBlack = getContrastRatio(rgb, black).toFixed(2);
        const passWhite = contrastWhite >= 4.5 ? 'Pass' : 'Fail';
        const passBlack = contrastBlack >= 4.5 ? 'Pass' : 'Fail';

        return (
          <div
            key={index}
            className="rounded-lg p-4"
            style={{ backgroundColor: `rgb(${rgb.join(',')})` }}
          >
            <div className="flex justify-between items-center text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              <span>vs White Text</span>
              <span className="font-bold">
                {contrastWhite} 
                <span className={passWhite === 'Pass' ? 'text-green-300' : 'text-red-300'}>
                  ({passWhite})
                </span>
              </span>
            </div>
            <div className="flex justify-between items-center text-black mt-2" style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.5)' }}>
              <span>vs Black Text</span>
              <span className="font-bold">
                {contrastBlack} 
                <span className={passBlack === 'Pass' ? 'text-green-800' : 'text-red-800'}>
                  ({passBlack})
                </span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default ContrastChecker; 