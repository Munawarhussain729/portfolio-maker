import React from 'react';

function Button({ type = 'default', text, icon, className }) {
  // Define different style sets based on the type
  const typeStyles = {
    get_started: 'bg-black text-white rounded-full flex items-center',
    transparent: 'border border-gray-400 text-gray-700 rounded-full',
    default: 'bg-gray-200 text-black rounded', // Fallback/default button styling
  };

  return (
    <button className={`${typeStyles[type]} hover:opacity-80 px-4 py-[8px] text-sm transition-opacity ${className}`}>
      {text} {icon}
    </button>
  );
}

export default Button;
