import PropTypes from "prop-types";
import { v4 } from "uuid";

const CareerDetailsItems = ({ items, customClass = "" }) => {
  const renderItems = () =>
    items.map((item) => (
      <li className={customClass} key={v4()}>
        {item}
      </li>
    ));

  return renderItems();
};

CareerDetailsItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  customClass: PropTypes.string,
};

export default CareerDetailsItems;
