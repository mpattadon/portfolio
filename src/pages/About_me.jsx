import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { useTiltCard } from '../components/useTiltCard';

const pictureCards = [
  {
    title: "Example Title 1",
    description: "This is a short description for item 1.",
    image: "assets/about/img1.jpg",
  },
  {
    title: "Example Title 2",
    description: "This is a short description for item 2.",
    image: "assets/about/img2.jpg",
  },
  {
    title: "Example Title 3",
    description: "This is a short description for item 3.",
    image: "assets/about/img3.jpg",
  },
];

function PictureCard({ image, title, description }) {
  const { cardRef, handleMouseMove, resetTransform } = useTiltCard();

  return (
    <div
      ref={cardRef}
      className="w-80 bg-gray-800 rounded-lg shadow-md border border-gray-600 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
      style={{ willChange: 'transform' }}
    >
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white text-center">{title}</h3>
        <p className="text-base text-gray-300 text-center mt-2">{description}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <PageWrapper>
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-2">About Me</h1>
        <div className="border-t border-gray-600 w-full mx-auto"></div>
      </div>

      {/* Personal History */}
      <section className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">A Brief Personal History</h2>
        <p className="text-gray-300 mb-6">
          [Insert personal history here. This section can include background, upbringing, early education, etc.]
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {pictureCards.map((card, i) => (
            <PictureCard key={i} {...card} />
          ))}
        </div>
      </section>

      <div className="border-t border-gray-600 w-full mx-auto my-10"></div>

      {/* Current Status */}
      <section className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Current Status</h2>
        <p className="text-gray-300 mb-10">
          [Insert your current status here — e.g. education, role as a CS student, recent focuses, etc.]
        </p>
      </section>

      <div className="border-t border-gray-600 w-full mx-auto my-10"></div>

      {/* Hobbies / Enjoyments */}
      <section className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Hobbies / Enjoyments</h2>
        <p className="text-gray-300 mb-6">
          [Describe some of your interests and passions outside of academics here.]
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {pictureCards.map((card, i) => (
            <PictureCard key={i} {...card} />
          ))}
        </div>
      </section>

      <div className="border-t border-gray-600 w-full mx-auto my-10"></div>

      {/* Interesting Facts */}
      <section className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Interesting Facts</h2>
        <p className="text-gray-300 mb-6">
          [Insert unique trivia or personal tidbits that set you apart.]
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {pictureCards.map((card, i) => (
            <PictureCard key={i} {...card} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}