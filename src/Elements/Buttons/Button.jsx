import React from 'react';

function Button({ type = 'default', text, icon, className }) {
  // Define different style sets based on the type
  const typeStyles = {
    get_started: 'bg-black text-white border border-black rounded-full flex items-center hover:bg-transparent hover:border-gray-400 hover:text-black ',
    transparent: 'border border-gray-400 text-gray-700 rounded-full hover:bg-black hover:text-white',
    default: 'bg-gray-200 text-black rounded', // Fallback/default button styling
  };

  return (
    <button className={`${typeStyles[type]}   px-4 py-[8px] transition-all delay-100 text-sm ${className}`}>
      {text} {icon}
    </button>
  );
}

export default Button;
