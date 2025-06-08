import React from 'react';
import PageWrapper from '../components/PageWrapper';

export default function Experience() {
  const workExperience = [
    {
      title: "Placeholder",
      place: "Placeholder",
      period: "July 2022 – Present",
    },
    {
      title: "Placeholder",
      place: "Placeholder",
      period: "Date",
    },
    {
      title: "Placeholder",
      place: "Placeholder",
      period: "Date",
    },
  ];

  const educationExperience = [
    {
      title: "BSc in Computer Science",
      place: "Royal Holloway, University of London, Egham, UK",
      period: "September 2023 – Present",
    },
    {
      title: "Placeholder",
      place: "Placeholder",
      period: "Date",
    },
    {
      title: "Placeholder",
      place: "Placeholder",
      period: "Date",
    },
  ];

  const volunteerExperience = [
    {
      title: "Placeholder Volunteer",
      place: "Placeholder Organization",
      period: "Date",
    },
    {
      title: "Placeholder Volunteer",
      place: "Placeholder Organization",
      period: "Date",
    },
  ];

  return (
    <PageWrapper>
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Experience</h1>
        <div className="border-t border-gray-600 w-full mx-auto"></div>
      </div>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="relative border-l border-gray-700 ml-4">
          {educationExperience.map((item, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              <div className="absolute w-3 h-3 bg-blue-400 rounded-full left-[-22px] top-1"></div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.place}</p>
              <p className="text-sm text-gray-400 italic">{item.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-600 my-10"></div>

      {/* Work Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
        <div className="relative border-l border-gray-700 ml-4">
          {workExperience.map((item, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              <div className="absolute w-3 h-3 bg-yellow-400 rounded-full left-[-22px] top-1"></div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.place}</p>
              <p className="text-sm text-gray-400 italic">{item.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-600 my-10"></div>

      {/* Volunteer Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Volunteer Experience</h2>
        <div className="relative border-l border-gray-700 ml-4">
          {volunteerExperience.map((item, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              <div className="absolute w-3 h-3 bg-green-300 rounded-full left-[-22px] top-1"></div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.place}</p>
              <p className="text-sm text-gray-400 italic">{item.period}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}