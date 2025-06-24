import React from 'react';

const Toast = ({ message, isVisible, isError = false }) => (
  <div
    className={`fixed bottom-10 right-10 text-white py-2 px-4 rounded-lg shadow-lg transition-all duration-300 z-50 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    } ${isError ? 'bg-red-500' : 'bg-green-600'}`}
  >
    {message}
  </div>
);

export default Toast; 