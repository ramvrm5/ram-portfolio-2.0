import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiNodejsFill,
  RiFirebaseFill,
} from "react-icons/ri";

import {
  SiVuedotjs,
  SiExpo,
  SiExpress,
  SiWeb3Dotjs,
  SiSolidity,
  SiGooglecloud,
  SiMongodb,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const skills = [
  {
    icon: <RiReactjsFill />,
    name: "React.js",
  },
  {
    icon: <RiNextjsFill />,
    name: "Next.js",
  },
  {
    icon: <SiVuedotjs />,
    name: "Vue.js",
  },
  {
    icon: <SiExpo />,
    name: "React Native (Expo)",
  },
  {
    icon: <RiHtml5Fill />,
    name: "HTML 5",
  },
  {
    icon: <RiCss3Fill />,
    name: "CSS 3",
  },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind CSS",
  },
  {
    icon: <RiNodejsFill />,
    name: "Node.js",
  },
  {
    icon: <RiFirebaseFill />,
    name: "Firebase",
  },
  {
    icon: <SiExpress />,
    name: "Express.js",
  },
  {
    icon: <SiWeb3Dotjs />,
    name: "web3.js",
  },
  {
    icon: <SiSolidity />,
    name: "Solidity",
  },
  {
    icon: <SiGooglecloud />,
    name: "Google Cloud Platform (GCP)",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },
];

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
        {skills.map((item, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                  <div className="text-3xl group-hover:text-accent transition-all duration-300">
                    {item.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-lg">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
