import PropTypes from "prop-types";
import BlogsPostInformation from "./BlogsPostInformation";

const BlogPostInformationList = ({ informations }) => {
  const renderInformation = () =>
    informations.map((information) => (
      <BlogsPostInformation
        key={information.id}
        author={information.author}
        title={information.title}
        description={information.description}
        category={information.category}
      />
    ));

  return renderInformation();
};

BlogPostInformationList.propTypes = {
  informations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default BlogPostInformationList;
