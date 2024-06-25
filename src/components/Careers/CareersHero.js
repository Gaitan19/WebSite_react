import Image from "next/image";
import Hero from "../Hero";
import { heroCareers } from "@/constants/data";

const CareersHero = () => {
  return (
    <Hero
      title={heroCareers.title}
      text={heroCareers.text}
      buttonText={heroCareers.buttonText}
      customClasses={heroCareers.customClasses}
    >
      <figure className="hero--careers__image">
        <Image src={heroCareers.image} width={636} height={603} alt="careers" />
      </figure>
    </Hero>
  );
};

export default CareersHero;
