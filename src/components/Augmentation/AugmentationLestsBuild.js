import { perks } from "@/constants/perks";
import { letsBuildAugmentation } from "@/constants/data";
import AugmentationPerk from "./AugmentationPerk";
import LetsBuild from "../LetsBuild";

const AugmentationLestsBuild = () => {
  const renderPerks = () =>
    perks.map((perk) => (
      <AugmentationPerk
        key={perk.id}
        number={perk.number}
        title={perk.title}
        text={perk.text}
        image={perk?.image}
        alt={perk?.alt}
        width={perk?.width}
        height={perk?.height}
      />
    ));
  return (
    <LetsBuild
      title={letsBuildAugmentation.title}
      subtitle={letsBuildAugmentation.subtitle}
      customClasses={letsBuildAugmentation.customClasses}
    >
      {renderPerks()}
    </LetsBuild>
  );
};

export default AugmentationLestsBuild;
