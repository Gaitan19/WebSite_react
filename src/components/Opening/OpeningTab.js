import PropTypes from "prop-types";
import OpeningTabItems from "./OpeningTabItems";

const OpeningTab = ({ positions, selectedPosition, onSelectPosition }) => {
  return (
    <div className="opening__tab">
      <OpeningTabItems
        positions={positions}
        selectedPosition={selectedPosition}
        onSelectPosition={onSelectPosition}
      />
    </div>
  );
};

OpeningTab.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedPosition: PropTypes.string.isRequired,
  onSelectPosition: PropTypes.func.isRequired,
};

export default OpeningTab;
