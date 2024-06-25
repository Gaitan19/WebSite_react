import PropTypes from "prop-types";
import OpeningCard from "./OpeningCard";

const OpeningList = ({ offers }) => {
  const renderOffers = () =>
    offers.map((offer) => (
      <OpeningCard
        key={offer.id}
        title={offer.title}
        description={offer.description}
        experience={offer.experience}
        location={offer.location}
      />
    ));

  return renderOffers();
};

OpeningList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      experience: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default OpeningList;
