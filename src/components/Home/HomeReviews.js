import { SwiperSlide } from "swiper/react";
import { reviews } from "@/constants/reviews";
import Reviews from "../Reviews";
import { reviewsHome } from "@/constants/data";
import HomeCardReview from "./HomeCardReview";

const HomeReviews = () => {
  const renderReviews = () =>
    reviews.map((review) => (
      <SwiperSlide key={review.id}>
        <HomeCardReview
          image={review.image}
          text={review.text}
          author={review.author}
          charge={review.charge}
          site={review.site}
          qualification={review.qualification}
        />
      </SwiperSlide>
    ));
  return (
    <Reviews
      title={reviewsHome.title}
      subtitle={reviewsHome.subtitle}
      text={reviewsHome.text}
    >
      {renderReviews()}
    </Reviews>
  );
};

export default HomeReviews;
