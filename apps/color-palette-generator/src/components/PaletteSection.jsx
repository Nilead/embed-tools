import React from 'react';

const PaletteSection = ({ title, children, isGrid = false }) => (
  <div className="mb-6">
    <div className="border-b-2 border-gray-200 dark:border-gray-600 pb-2 mb-4 flex justify-between items-center">
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className={isGrid ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2' : ''}>
      {children}
    </div>
  </div>
);

export default PaletteSection; 