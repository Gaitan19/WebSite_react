import { heroAugmentation } from "@/constants/data";
import Hero from "../Hero";

const AugmentationHero = () => {
  const renderPoints = () =>
    heroAugmentation.points.map((point) => (
      <div key={point} className="hero--augmentation__point" />
    ));
  return (
    <Hero
      title={heroAugmentation.title}
      subtitle={heroAugmentation.subtitle}
      buttonText={heroAugmentation.buttonText}
      customClasses={heroAugmentation.customClasses}
    >
      <div className="hero--augmentation__map">{renderPoints()}</div>
    </Hero>
  );
};

export default AugmentationHero;
