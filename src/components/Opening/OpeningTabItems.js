import PropTypes from "prop-types";
import Button from "../Button";

const OpeningTabItems = ({ positions, selectedPosition, onSelectPosition }) => {
  const renderPositions = () => {
    return positions.map((position) => (
      <Button
        key={position}
        onClick={() => onSelectPosition(position)}
        customClass={`opening__tab-item ${selectedPosition === position && "active"}`}
      >
        {position}
      </Button>
    ));
  };

  return renderPositions();
};

OpeningTabItems.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedPosition: PropTypes.string.isRequired,
  onSelectPosition: PropTypes.func.isRequired,
};

export default OpeningTabItems;
