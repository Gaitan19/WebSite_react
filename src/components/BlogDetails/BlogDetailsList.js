import PropTypes from "prop-types";
import BlogDetailsPost from "./BlogDetailsPost";

const BlogDetailsList = ({ posts }) => {
  const renderPosts = () =>
    posts.map((post) => (
      <BlogDetailsPost
        key={post.id}
        title={post.title}
        text={post?.text}
        linkText={post?.linkText}
        link={post?.link}
      />
    ));

  return renderPosts();
};

BlogDetailsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      text: PropTypes.string.isRequired,
      linkText: PropTypes.string,
      link: PropTypes.string,
    }),
  ).isRequired,
};

export default BlogDetailsList;
