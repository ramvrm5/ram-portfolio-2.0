import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoGithub,
  BiLogoLinkedin,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/ramvrm5",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://linkedin.com/in/ramverma-softwaredeveloper",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div key={index} className={iconStyles}>
            <a href={item.path} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
