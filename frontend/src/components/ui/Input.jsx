import React from 'react';
import { twMerge } from 'tailwind-merge';

const Input = React.forwardRef(({ className, label, error, ...props }, ref) => {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="block text-sm font-bold text-gray-700 tracking-tight">
          {label}
        </label>
      )}
      <div className="relative group">
        <input
          ref={ref}
          className={twMerge(
            'block w-full rounded-xl border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm transition-all duration-200 outline-none',
            'placeholder:text-gray-400',
            'focus:border-primary-500 focus:ring-4 focus:ring-primary-100',
            'group-hover:border-gray-300',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-100',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-500 font-medium animate-fade-in">{error}</p>}
    </div>
  );
});

export default Input;
