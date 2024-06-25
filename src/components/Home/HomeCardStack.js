import PropTypes from "prop-types";
import CardStack from "../CardStack";

const HomeCardStack = (props) => {
  const { image, width, height, alt, name, charge, text, skills } = props;
  return (
    <CardStack
      image={image}
      width={width}
      height={height}
      alt={alt}
      name={name}
      charge={charge}
      text={text}
      skills={skills}
    />
  );
};
HomeCardStack.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  charge: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
};

export default HomeCardStack;
