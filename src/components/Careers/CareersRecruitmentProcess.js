import PropTypes from "prop-types";
import Perk from "../Perk";

const CareersRecruitmentProcess = ({ steps }) => {
  const renderPerks = () =>
    steps.map((step) => (
      <Perk
        key={step.id}
        number={step.number}
        title={step.title}
        text={step?.text}
      />
    ));

  return renderPerks();
};

CareersRecruitmentProcess.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    }),
  ),
};

export default CareersRecruitmentProcess;
