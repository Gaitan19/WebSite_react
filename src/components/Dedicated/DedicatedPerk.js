import PropTypes from "prop-types";
import Perk from "../Perk";

const DedicatedPerk = (props) => {
  const {
    number,
    image = "",
    title,
    text,
    width = 0,
    height = 0,
    alt = "",
  } = props;
  return (
    <Perk
      number={number}
      title={title}
      text={text}
      image={image}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

DedicatedPerk.propTypes = {
  number: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
};

export default DedicatedPerk;
