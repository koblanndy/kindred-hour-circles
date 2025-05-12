
import React from 'react';

type DividerType = 'blue-to-white' | 'white-to-gray' | 'gray-to-white';

interface PageDividerProps {
  type: DividerType;
}

const PageDivider: React.FC<PageDividerProps> = ({ type }) => {
  const gradientClasses = {
    // Using more intermediate color steps for smoother transitions
    'blue-to-white': 'from-blue-200 via-blue-100 to-white',
    'white-to-gray': 'from-white via-gray-50 to-gray-100',
    'gray-to-white': 'from-gray-100 via-gray-50 to-white',
  };

  return (
    <div className={`w-full h-24 md:h-32 bg-gradient-to-b ${gradientClasses[type]}`}></div>
  );
};

export default PageDivider;
