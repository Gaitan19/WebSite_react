import PropTypes from "prop-types";
import CareerDetailsLooking from "./CareerDetailsLooking";
import CareersDetailsAbout from "./CareersDetailsAbout";
import CareerDetailsPerks from "./CareerDetailsPerks";
import CareerDetailsApply from "./CareerDetailsApply";

const CareerDetails = ({
  title,
  experience,
  englishLevel,
  location,
  description,
  competencies,
  responsibilities,
}) => {
  return (
    <>
      <CareerDetailsLooking
        title={title}
        englishLevel={englishLevel}
        experience={experience}
        location={location}
      />

      <CareersDetailsAbout
        description={description}
        competencies={competencies}
        responsibilities={responsibilities}
      />

      <CareerDetailsPerks />
      <CareerDetailsApply />
    </>
  );
};

CareerDetails.propTypes = {
  title: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  englishLevel: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  competencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CareerDetails;
