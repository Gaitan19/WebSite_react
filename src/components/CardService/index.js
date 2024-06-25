import Image from "next/image";
import PropTypes from "prop-types";
import Button from "../Button";

const CardService = (props) => {
  const { image, alt, title, description } = props;
  return (
    <div className="services__item">
      <Image
        className="services__icon"
        alt={alt}
        width={78}
        height={78}
        src={image}
      />
      <h3 className="title title--secondary services__item__title">{title}</h3>
      <p className="text services__description">{description}</p>
      <Button customClass="button button--dark" buttonText="Learn more" />
    </div>
  );
};

CardService.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardService;
