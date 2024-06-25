import PropTypes from "prop-types";
import CareersWorkItem from "./CareersWorkItem";

const CareersWorkList = ({ services }) => {
  const renderServices = () =>
    services.map((service) => (
      <CareersWorkItem
        key={service.id}
        image={service.image}
        title={service.title}
        description={service.description}
      />
    ));

  return renderServices();
};

CareersWorkList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CareersWorkList;
