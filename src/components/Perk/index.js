import Image from "next/image";
import PropTypes from "prop-types";

const Perk = (props) => {
  const {
    number,
    image = "",
    title,
    text = "",
    width = 0,
    height = 0,
    alt = "",
  } = props;
  return (
    <div className="build__perk">
      <div className="build__perk-content">
        <span className="build__perk-number">{number}</span>
        <div className="build__perk-information">
          <span className="text build__perk-title">{title}</span>
          {text.length > 0 && (
            <span className="text build__perk-text">{text}</span>
          )}
        </div>
      </div>
      {image.length > 0 && (
        <Image
          className="build__perk-image"
          src={image}
          width={width}
          height={height}
          alt={alt}
        />
      )}
    </div>
  );
};

Perk.propTypes = {
  number: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
};

export default Perk;
