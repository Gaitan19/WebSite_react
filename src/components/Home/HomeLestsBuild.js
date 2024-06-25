import { perks } from "@/constants/perks";
import { letsBuildHome } from "@/constants/data";
import HomePerk from "./HomePerk";
import LetsBuild from "../LetsBuild";

const HomeLestsBuild = () => {
  const renderPerks = () =>
    perks.map((perk) => (
      <HomePerk
        key={perk.id}
        number={perk.number}
        title={perk.title}
        text={perk.text}
        image={perk?.image}
        alt={perk?.alt}
        width={perk?.width}
        height={perk?.height}
        hasImage={perk?.hasImage}
      />
    ));
  return (
    <LetsBuild title={letsBuildHome.title} subtitle={letsBuildHome.subtitle}>
      {renderPerks()}
    </LetsBuild>
  );
};

export default HomeLestsBuild;
