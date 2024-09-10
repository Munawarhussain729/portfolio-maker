import React from 'react';

function Button({ type = 'default', text, icon }) {
  // Define different style sets based on the type
  const typeStyles = {
    get_started: 'bg-black text-white py-1 px-4  rounded-full flex items-center',
    transparent: 'border border-gray-400 text-gray-700 py-1 px-4 rounded-full',
    default: 'bg-gray-200 text-black py-1 px-4 rounded', // Fallback/default button styling
  };

  return (
    <button className={`${typeStyles[type]} hover:opacity-80 text-sm transition-opacity`}>
      {text} {icon}
    </button>
  );
}

export default Button;
