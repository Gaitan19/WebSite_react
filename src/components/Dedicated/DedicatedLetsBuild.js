import { letsBuildDedicated } from "@/constants/data";
import DedicatedPerk from "./DedicatedPerk";
import LetsBuild from "../LetsBuild";

const DedicatedLetsBuild = () => {
  const renderPerks = () =>
    letsBuildDedicated.perks.map((perk) => (
      <DedicatedPerk
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
      title={letsBuildDedicated.title}
      subtitle={letsBuildDedicated.subtitle}
      customClasses={letsBuildDedicated.customClasses}
    >
      {renderPerks()}
    </LetsBuild>
  );
};

export default DedicatedLetsBuild;
