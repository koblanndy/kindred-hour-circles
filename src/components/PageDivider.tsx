
import React from 'react';

type DividerType = 'blue-to-white' | 'white-to-gray' | 'gray-to-white';

interface PageDividerProps {
  type: DividerType;
}

const PageDivider: React.FC<PageDividerProps> = ({ type }) => {
  const gradientClasses = {
    'blue-to-white': 'from-blue-100 to-white',
    'white-to-gray': 'from-white to-gray-50',
    'gray-to-white': 'from-gray-50 to-white',
  };

  return (
    <div className={`w-full h-32 bg-gradient-to-b ${gradientClasses[type]}`}></div>
  );
};

export default PageDivider;
