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
    {
      title: "A-Levels",
      place: "City of London Academy, UK",
      period: "2015 – 2017",
    },
    {
      title: "GCSEs",
      place: "City of London Academy, UK",
      period: "2010 – 2015",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex justify-center pl-16">
      <div className="w-full max-w-6xl py-10 px-4 sm:px-8 md:px-16 flex flex-col gap-20">

        {/* Header centered in content area */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-2">Experience</h1>
          <div className="border-t border-gray-600 mt-2 w-full max-w-[300px] mx-auto"></div>
        </div>

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
        <div className="border-t border-gray-600"></div>

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
      </div>
    </div>
  );
}
