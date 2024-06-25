import { SwiperSlide } from "swiper/react";
import { reviewsCareers } from "@/constants/data";
import Reviews from "../Reviews";
import CareersCardReview from "./CareersCardReview";
// import CareersReviewsList from "./CareersReviewsList";
// TODO: check later the careers reviews list

const CareersReviews = () => {
  const renderCards = () =>
    reviewsCareers.cards.map((card) => (
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

  return (
    <Reviews
      title={reviewsCareers.title}
      subtitle={reviewsCareers.subtitle}
      text={reviewsCareers.text}
      responsive={reviewsCareers.responsive}
      customClass="team"
    >
      {renderCards()}
      {/* <CareersReviewsList cards={reviewsCareers.cards} /> */}
    </Reviews>
  );
};

export default CareersReviews;
