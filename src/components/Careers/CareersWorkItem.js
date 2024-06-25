import PropTypes from "prop-types";
import Image from "next/image";
import parse from "html-react-parser";

function CareersWorkItem({ image, title, description }) {
  return (
    <div className="card card--work">
      <div className="card--work__wrapper">
        <div className="card--work__heading">
          <Image
            src={image}
            width={120}
            height={120}
            alt="service"
            className="card--work__image"
          />
          <h3 className="card--work__title">{title}</h3>
        </div>
        <div className="card--work__body">
          <p className="card--work__description">{parse(description)}</p>
        </div>
      </div>
    </div>
  );
}

CareersWorkItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CareersWorkItem;
