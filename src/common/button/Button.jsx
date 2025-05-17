import { cn } from '@/utils/tailwind-merge.until';
import React from 'react';

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  icon, // optional icon element
}) => {
  const base = 'font-bold rounded-md flex items-center justify-center transition-all duration-200';

  const variants = {
    primary: 'bg-gradient-to-r from-black to-[#833731] border border-black text-white',
    white: 'bg-white text-black border border-black',
    outline: 'border border-black text-black bg-transparent',
    danger: 'bg-red-600 text-white',
    ghost: 'bg-transparent text-black hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm h-8',
    md: 'px-4 py-2 text-base h-10',
    lg: 'px-6 py-3 text-lg h-12',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        base,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
