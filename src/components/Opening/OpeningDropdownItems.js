import PropTypes from "prop-types";
import OpeningDropdownList from "./OpeningDropdownList";

const OpeningDropdownItems = ({
  positions,
  selectedPosition,
  handleSelect,
}) => {
  const renderPositions = () =>
    positions
      .filter((position) => position !== selectedPosition)
      .map((position) => (
        <OpeningDropdownList
          key={position}
          position={position}
          handleSelect={handleSelect}
        />
      ));

  return renderPositions();
};

OpeningDropdownItems.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedPosition: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default OpeningDropdownItems;
