import PropTypes from "prop-types";
import CareerDetailsItems from "./CareerDetailsItems";

const CareerDetailsList = ({
  items,
  customClass = "",
  customItemClass = "",
}) => {
  return (
    <ul className={customClass}>
      <CareerDetailsItems items={items} customClass={customItemClass} />
    </ul>
  );
};

CareerDetailsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  customClass: PropTypes.string,
  customItemClass: PropTypes.string,
};

export default CareerDetailsList;
