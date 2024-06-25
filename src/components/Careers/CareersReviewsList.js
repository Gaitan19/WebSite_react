import PropTypes from "prop-types";
import { SwiperSlide } from "swiper/react";
import CareersCardReview from "./CareersCardReview";

const CareersReviewsList = ({ cards }) => {
  const renderCards = cards.map((card) => (
    <SwiperSlide key={card.id}>
      <CareersCardReview
        name={card.name}
        position={card.position}
        description={card.description}
        image={card.image}
        link={card.link}
      />
    </SwiperSlide>
  ));

  return renderCards;
};

CareersReviewsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CareersReviewsList;
