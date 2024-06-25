import PropTypes from "prop-types";
import CardReview from "../CardReview";

const AboutCardReview = (props) => {
  const { image, text, author, charge, site, qualification } = props;
  return (
    <CardReview
      image={image}
      text={text}
      author={author}
      charge={charge}
      site={site}
      qualification={qualification}
    />
  );
};

AboutCardReview.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  charge: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  qualification: PropTypes.string.isRequired,
};

export default AboutCardReview;