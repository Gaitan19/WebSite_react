import { useState } from "react";
import { openPositions } from "@/constants/data";
import OpeningTab from "./OpeningTab";
import OpeningContent from "./OpeningContent";
import OpeningDropdown from "./OpeningDropdown";

const Opening = () => {
  const [selectedPosition, setSelectedPosition] = useState(
    openPositions.positions[0],
  );

  return (
    <section className="opening">
      <div className="container">
        <div className="opening__wrapper">
          <h2 className="title  opening__title">{openPositions.title}</h2>
          <h3 className="title title--secondary opening__subtitle">
            {openPositions.subtitle}
          </h3>

          <OpeningTab
            positions={openPositions.positions}
            selectedPosition={selectedPosition}
            onSelectPosition={setSelectedPosition}
          />

          <OpeningDropdown
            positions={openPositions.positions}
            selectedPosition={selectedPosition}
            onSelectPosition={setSelectedPosition}
          />

          <OpeningContent
            offers={openPositions.offers}
            selectedPosition={selectedPosition}
          />
        </div>
      </div>
    </section>
  );
};

export default Opening;
