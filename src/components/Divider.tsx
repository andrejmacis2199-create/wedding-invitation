import React from 'react';

interface DividerProps {
  bg?: 'cream' | 'beige';
}

const Divider: React.FC<DividerProps> = ({ bg = 'cream' }) => {
  const bgClass = bg === 'cream' ? 'bg-cream' : 'bg-beige';

  return (
    <div className={`${bgClass} flex justify-center items-center py-8`}>
      <div className="flex items-center w-full max-w-xs px-4">
        <div className="flex-grow h-px bg-soft-accent"></div>
        <svg
          className="mx-4 text-accent"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10 1L11.5 8.5L19 10L11.5 11.5L10 19L8.5 11.5L1 10L8.5 8.5L10 1Z"
            fill="currentColor"
            opacity="0.7"
          />
        </svg>
        <div className="flex-grow h-px bg-soft-accent"></div>
      </div>
    </div>
  );
};

export default Divider;
