import React from 'react';
import PageWrapper from '../components/PageWrapper';

export default function Experience() {
  const workExperience = [
    {
      title: "Family Company's Website Developer Using WordPress",
      place: "Pro Pack International Co., Ltd.",
      period: "2024 - 2024",
    },
  ];

  const educationExperience = [
    {
      title: "BSc in Computer Science",
      place: "Royal Holloway, University of London, Egham, UK",
      period: "September 2023 – Present",
    },
    {
      title: "Foundation in Mathematics and Actuarial Science",
      place: "INTO, University of East Anglia, Norwich, UK",
      period: "January 2023 - August 2023",
    },
    {
      title: "GCE O-Level (Singapore)",
      place: "Peicai Secondary School, Singapore",
      period: "2019 - 2022",
    },
    {
      title: "Singapore International Primary School Leaving Examination (IPSLE)",
      place: "Thai Singapore International School, Samut Prakan, Thailand",
      period: "2014 - 2019",
    },
  ];

  const volunteerExperience = [
    {
      title: "Charity Fundraiser",
      place: "Leader of Charity Fundraising Team",
      period: "2022 - 2023",
      description: [
        "Planned and organized a charity fundraiser on selling homemade food and baked goods.",
        "Raised 600 SGD to donate to charitable organizations",
      ],
    },
    {
      title: "Food From The Heart",
      place: "Leader & Volunteer Member",
      period: "2021 - 2023",
      description: [
        "Volunteered to pack food packages for the less fortunate community in Singapore.",
        "Volunteered to store and stock food donations from members of the community.",
      ],
    },
    {
      title: "Values-In-Action Projects",
      place: "Member",
      period: "2019 - 2021",
      description: [
        "Charity Fair Fundraiser for LionsBefrienders (2019).",
        "Games and Activities to entertain the elderly community (2020).",
        "Awareness Poster on animal conservation (2021)",
      ],
    },
  ];

  const extraCurricular = [
    {
      title: "Aero-Modelling Club",
      place: "Peicai Secondary School",
      period: "2021 - 2022",
      description: [
        "Participated in Singapore Amazing Flying Machine Competition 2022",
      ],
    },
    {
      title: "ArtClub Club",
      place: "Peicai Secondary School",
      period: "2019 - 2020",
      description: [
        "Participated in International Comic / Manga School Contest",
        "Participated in Pink Dolpgin Packaging Design Competition",
        "Represented school in Singapore Youth Festival Arts Presentation",
        "Participated in Live On Design Competition",
      ],
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
              <ul className="list-disc list-inside mt-2 space-y-1">
                {Array.isArray(item.description) &&
                  item.description.map((point, i) => (
                    <li key={i} className="text-sm text-green-200">{point}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-600 my-10"></div>

      {/* Extra-Curricular Activities */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Extra-Curricular Activities</h2>
        <div className="relative border-l border-gray-700 ml-4">
          {extraCurricular.map((item, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              <div className="absolute w-3 h-3 bg-orange-300 rounded-full left-[-22px] top-1"></div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.place}</p>
              <p className="text-sm text-gray-400 italic">{item.period}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {Array.isArray(item.description) &&
                  item.description.map((point, i) => (
                    <li key={i} className="text-sm text-orange-200">{point}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}