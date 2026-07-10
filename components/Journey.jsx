const journey = [
  {
    years: "Nov 2023 - Present",
    role: "Senior Frontend Developer",
    institution: "Syneos Health",
  },
  {
    years: "Jan 2023 - Nov 2023",
    role: "Full Stack Developer",
    institution: "66degrees",
  },
  {
    years: "Jan 2020 - Jan 2023",
    role: "Full Stack Developer",
    institution: "Self-employed",
  },
  {
    years: "Aug 2019 - Jan 2020",
    role: "Full Stack Developer",
    institution: "Webspero Solutions",
  },
  {
    years: "Jan 2017 - Aug 2019",
    role: "Full Stack Developer",
    institution: "Webcome Technologies",
  },
  {
    years: "Jul 2010 - Aug 2016",
    role: "student",
    institution: "Kuk University",
  },
];

const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {journey.map((item, index) => {
        const { institution, role, years } = item;
        return (
          <div key={index} className="flex items-center gap-12 w-full">
            <div className="flex flex-col w-max justify-center items-center">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-[1px] h-[180px] bg-white/10"></div>
            </div>
            {/* text */}
            <div className="max-w-[500px]">
              <p className="mb-6 text-lg text-white/50">{years}</p>
              <h4 className="h4 mb-2">{role}</h4>
              <p className="text-lg text-white/50">{institution}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;
