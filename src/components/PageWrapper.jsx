import React from 'react';

export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white pl-0 md:pl-16 flex justify-center">
      <div className="w-[calc(100vw-4rem)] py-10 px-4 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          {children}
        </div>
      </div>
    </div>
  );
}