import PropTypes from "prop-types";
import CardService from "../CardService";

const HomeCardService = (props) => {
  const { image, alt, title, description } = props;
  return (
    <CardService
      image={image}
      alt={alt}
      title={title}
      description={description}
    />
  );
};

HomeCardService.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HomeCardService;
