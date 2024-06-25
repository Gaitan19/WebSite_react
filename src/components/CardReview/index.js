import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

const CardReview = (props) => {
  const { image, text, author, charge, site, qualification } = props;
  return (
    <article className="card card--review">
      <Image src={image} width={120} height={34} />
      <p className="text card--review__description">{text}</p>
      <div className="card--review__contact">
        <span className="text card--review__author">{author}</span>
        <span className="text text--secondary card--review__charge">
          {charge}
        </span>
      </div>
      <div className="card--review__qualifications">
        <Image src={site} width={97} height={50} />
        <Image
          className="card--review__stars"
          src={qualification}
          width={360}
          height={106}
        />
      </div>
    </article>
  );
};

CardReview.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  charge: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  qualification: PropTypes.string.isRequired,
};

export default CardReview;
