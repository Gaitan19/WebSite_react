import PropTypes from "prop-types";
import Button from "../Button";

const OpeningDropdownList = ({ position, handleSelect }) => {
  return (
    <li>
      <Button
        customClass="opening__dropdown-item"
        onClick={() => handleSelect(position)}
      >
        {position}
      </Button>
    </li>
  );
};

OpeningDropdownList.propTypes = {
  position: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default OpeningDropdownList;
