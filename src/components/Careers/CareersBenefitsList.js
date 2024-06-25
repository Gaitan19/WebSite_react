import PropTypes from "prop-types";
import CareersBenefitsItem from "./CareersBenefitsItem";

const CareersBenefitsList = ({ perks }) => {
  const renderPerks = () =>
    perks.map((perk) => (
      <CareersBenefitsItem
        key={perk.id}
        description={perk.description}
        image={perk.image}
      />
    ));

  return renderPerks();
};

CareersBenefitsList.propTypes = {
  perks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CareersBenefitsList;
