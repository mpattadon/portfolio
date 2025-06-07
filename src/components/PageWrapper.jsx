import React from 'react';

export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white pl-0 md:pl-16">
      <div className="w-[calc(100vw-4rem)] mx-auto px-4 py-10 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          {children}
        </div>
      </div>
    </div>
  );

  /*
  <div className="min-h-screen bg-gray-900 text-white pl-0 md:pl-16">
    <div className="w-[calc(100vw-4rem)] mx-auto px-4 py-10 flex flex-col items-center">
      <div className="w-full max-w-6xl">
      */

  /*
  <div className="min-h-screen w-full bg-gray-900 text-white pl-4 sm:pl-8 md:pl-16">
  <div className="w-[calc(100vw-4rem)] flex justify-center">
    <div className="w-full max-w-3xl py-10 px-4">
    */
}