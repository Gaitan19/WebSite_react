import Link from "next/link";
import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaCalendar } from "react-icons/fa";
import { getTitleSlug } from "@/utils/getSlug";
import { routes } from "@/constants/routes";

const OpeningCard = ({ title, description, location, experience }) => (
  <article className="opening__offer">
    <Link
      className="opening__offer-link"
      href={`${routes.careers}/${getTitleSlug(title)}`}
    >
      <div className="opening__offer-wrapper">
        <div className="opening__offer-info">
          <h4 className="opening__offer-title">{title}</h4>
          <p className="opening__offer-description">{description}</p>
        </div>

        <div className="opening__offer-details">
          <p className="opening__offer-location">
            <FaMapMarkerAlt className="opening__offer-icon" />
            {location}
          </p>
          <p className="opening__offer-experience">
            <FaCalendar className="opening__offer-icon" />
            {experience}
          </p>
        </div>
      </div>
    </Link>
  </article>
);

OpeningCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
};

export default OpeningCard;
