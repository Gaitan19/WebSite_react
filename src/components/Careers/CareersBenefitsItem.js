import Image from "next/image";
import PropTypes from "prop-types";

const CareersBenefitsItem = ({ image, description }) => {
  return (
    <div className="benefits__perk">
      <Image
        src={image}
        width={106}
        height={85}
        alt={description}
        className="benefits__perk-image"
      />
      <span className="benefits__perk-description">{description}</span>
    </div>
  );
};

CareersBenefitsItem.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CareersBenefitsItem;
