import { heroAbout } from "@/constants/data";
import Hero from "../Hero";

const AboutHero = () => {
  return (
    <Hero
      title={heroAbout.title}
      text={heroAbout.text}
      buttonText={heroAbout.buttonText}
      customClasses={heroAbout.customClasses}
    />
  );
};

export default AboutHero;
