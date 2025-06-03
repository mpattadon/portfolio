import React from 'react';

export default function Experience() {
  const workExperience = [
    {
      title: "Lecturer",
      place: "Royal Holloway, University of London, Egham, UK",
      period: "July 2022 – Present",
    },
    {
      title: "Research Scientist",
      place: "Singapore Management University, Singapore",
      period: "May 2021 – May 2022",
    },
  ];

  const educationExperience = [
    {
      title: "MSc in Computer Science",
      place: "Imperial College London, UK",
      period: "2020 – 2021",
    },
    {
      title: "BSc in Computer Science",
      place: "University of Manchester, UK",
      period: "2017 – 2020",
    },
  ];

  return (
    <div className="h-full min-h-screen flex-1 py-10 bg-gray-900 text-white flex flex-col gap-16 overflow-auto">
      <section>
        <h1 className="text-4xl font-extrabold mb-6">Experience</h1>

        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
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

      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
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
    </div>
  );
}
