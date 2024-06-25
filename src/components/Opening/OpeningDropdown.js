import { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa6";
import OpeningDropdownItems from "./OpeningDropdownItems";

const OpeningDropdown = ({ positions, selectedPosition, onSelectPosition }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((previsOpen) => !previsOpen);
  };

  const handleSelect = (position) => {
    setIsOpen(() => false);
    onSelectPosition(position);
  };

  return (
    <div className="opening__dropdown">
      <div className="opening__dropdown-menu" onClick={handleToggle}>
        <span className="opening__dropdown-selected">{selectedPosition}</span>
        <span className="opening__dropdown-arrow">
          <FaChevronDown />
        </span>
        <ul className={`opening__dropdown-list ${isOpen && "active"}`}>
          {isOpen && (
            <OpeningDropdownItems
              positions={positions}
              selectedPosition={selectedPosition}
              handleSelect={handleSelect}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

OpeningDropdown.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedPosition: PropTypes.string.isRequired,
  onSelectPosition: PropTypes.func.isRequired,
};

export default OpeningDropdown;
