import PropTypes from "prop-types";
import CardStaff from "../CardStaff";

const AboutCardStaff = (props) => {
  const { image, width, height, alt, name, position } = props;
  return (
    <CardStaff
      image={image}
      width={width}
      height={height}
      alt={alt}
      name={name}
      position={position}
    />
  );
};

AboutCardStaff.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default AboutCardStaff;
