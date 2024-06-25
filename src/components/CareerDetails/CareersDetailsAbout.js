import PropTypes from "prop-types";
import { detailsCareers } from "@/constants/data";
import CareerDetailsList from "./CareerDetailsList";

const CareerDetailsAbout = ({
  description,
  competencies,
  responsibilities,
}) => {
  return (
    <section className="careers__about">
      <div className="container">
        <div className="careers__about-wrapper">
          <h2 className="title title--secondary careers__about-title">
            {detailsCareers.about}
          </h2>
          <p className="text careers__about-description">{description}</p>
          <p className="text careers__about-competencies">
            {detailsCareers.competencies}
          </p>
          <CareerDetailsList
            items={competencies}
            customClass="careers__list"
            customItemClass="careers__list-item"
          />
          <p className="text careers__about-responsibilities">
            {detailsCareers.responsibilities}
          </p>
          <CareerDetailsList
            items={responsibilities}
            customClass="careers__list"
            customItemClass="careers__list-item"
          />
        </div>
      </div>
    </section>
  );
};

CareerDetailsAbout.propTypes = {
  description: PropTypes.string.isRequired,
  competencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CareerDetailsAbout;
