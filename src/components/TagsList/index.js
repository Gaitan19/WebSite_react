import PropTypes from "prop-types";

const TagLists = ({ customClass, tags }) => {
  const renderTags = () =>
    tags.map((tag) => (
      <span className={customClass} key={tag.id}>
        {tag.text}
      </span>
    ));

  return <>{renderTags()}</>;
};

TagLists.propTypes = {
  customClass: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TagLists;
