import React from 'react';
import { getContrastRatio } from '../utils/colorUtils';

const Badge = ({ pass }) => (
  <span
    className={`inline-block ml-1 px-2 py-0.5 rounded-full text-xs font-semibold shadow
      ${pass ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}
  >
    {pass ? 'Pass' : 'Fail'}
  </span>
);

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
        const passWhite = parseFloat(contrastWhite) >= 4.5;
        const passBlack = parseFloat(contrastBlack) >= 4.5;

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
                <Badge pass={passWhite} />
              </span>
            </div>
            <div className="flex justify-between items-center text-black mt-2" style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.5)' }}>
              <span>vs Black Text</span>
              <span className="font-bold">
                {contrastBlack}
                <Badge pass={passBlack} />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default ContrastChecker; 