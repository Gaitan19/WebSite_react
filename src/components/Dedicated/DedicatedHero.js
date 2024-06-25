import Image from "next/image";
import Hero from "../Hero";
import { heroDedicated } from "@/constants/data";

const DedicatedHero = () => {
  return (
    <Hero
      title={heroDedicated.title}
      text={heroDedicated.text}
      buttonText={heroDedicated.buttonText}
      customClasses={heroDedicated.customClasses}
    >
      <figure className="hero--dedicated__image">
        <Image
          src={heroDedicated.image}
          width={636}
          height={648}
          alt="dedicated"
        />
      </figure>
    </Hero>
  );
};

export default DedicatedHero;
