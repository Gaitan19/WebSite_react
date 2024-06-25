import { SwiperSlide } from "swiper/react";
import { reviews } from "@/constants/reviews";
import AboutCardReview from "./AboutCardReview";
import { testimonialsAbout } from "@/constants/data";
import Reviews from "../Reviews";

const AboutTestimonials = () => {
  const renderReviews = () =>
    reviews.map((review) => (
      <SwiperSlide key={review.id}>
        <AboutCardReview
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
      title={testimonialsAbout.title}
      subtitle={testimonialsAbout.subtitle}
      text={testimonialsAbout.text}
      customClass="reviews--about"
    >
      {renderReviews()}
    </Reviews>
  );
};

export default AboutTestimonials;
