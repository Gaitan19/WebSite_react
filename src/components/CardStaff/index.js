import Image from "next/image";
import PropTypes from "prop-types";
import { FaLinkedin } from "react-icons/fa";

const CardStaff = (props) => {
  const { image, width, height, alt, name, position } = props;

  return (
    <div className="card card--staff">
      <Image
        className="card--staff__image"
        src={image}
        width={width}
        height={height}
        alt={alt}
      />
      <div className="card--staff__content">
        <span className="text card--staff__name">{name}</span>
        <div className="d-flex align-items-center justify-content-between">
          <span className="text card--staff__position">{position}</span>
          <FaLinkedin className="card--staff__icon" />
        </div>
      </div>
    </div>
  );
};

CardStaff.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default CardStaff;
