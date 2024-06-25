import PropTypes from "prop-types";
import { FaCalendarAlt, FaComment, FaMapMarkerAlt } from "react-icons/fa";
import { detailsCareers } from "@/constants/data";

const CareerDetailsLooking = ({
  title,
  location,
  englishLevel,
  experience,
}) => {
  return (
    <section className="careers__looking">
      <div className="container">
        <div className="careers__looking-wrapper">
          <h2 className="title careers__looking-title">
            {detailsCareers.careersLooking}
          </h2>
          <h3 className="title title--secondary careers__looking-subtitle">
            {title}
          </h3>
          <div className="careers__looking-icons">
            <span className="careers__looking-location">
              <FaMapMarkerAlt className="careers__looking-icon" /> {location}
            </span>
            <span className="careers__looking-english">
              <FaComment className="careers__looking-icon" /> {englishLevel}
            </span>
            <span className="careers__looking-experience">
              <FaCalendarAlt className="careers__looking-icon" /> {experience}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

CareerDetailsLooking.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  englishLevel: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
};

export default CareerDetailsLooking;
