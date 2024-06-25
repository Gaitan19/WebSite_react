import Image from "next/image";
import PropTypes from "prop-types";

const CareersCardReview = ({ name, position, description, image, link }) => {
  return (
    <article className="card card--review">
      <div className="card--review__information">
        <span className="card--review__name">{name}</span>
        <span className="card--review__position">{position}</span>
      </div>

      <p className="text card--review__description">{description}</p>

      <a className="card--review__link" href={link}>
        <Image
          className="card--review__logo"
          width={120}
          height={61}
          src={image}
          alt={name}
        />
      </a>
    </article>
  );
};

CareersCardReview.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CareersCardReview;
