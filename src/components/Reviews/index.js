import PropTypes from "prop-types";
import { Swiper } from "swiper/react";
import { responsiveReviews } from "@/constants/reviews";

const Reviews = (props) => {
  const {
    customClass = "",
    title,
    subtitle,
    text,
    children = <></>,
    responsive = responsiveReviews,
  } = props;

  return (
    <section className={`reviews ${customClass}`}>
      <div className="container">
        <h2 className="title reviews__title">{title}</h2>
        <h3 className="title title--secondary reviews__subtitle">{subtitle}</h3>
        <p className="text reviews__text">{text}</p>
        <div className="reviews__cards">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={25}
            breakpoints={responsive}
            loop
          >
            {children}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

Reviews.propTypes = {
  customClass: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
  responsive: PropTypes.object,
};

export default Reviews;
