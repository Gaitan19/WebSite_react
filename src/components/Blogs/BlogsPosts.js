import PropTypes from "prop-types";
import { formatDate } from "@/utils/formatDate";
import CardIndustry from "../CardIndustry";

const BlogsPosts = ({ posts }) => {
  const renderBlogs = () =>
    posts.map((post) => (
      <CardIndustry
        key={post.id}
        altPost={post.image.alt}
        author={post.author}
        date={formatDate()}
        tags={post.category}
        title={post.title}
        text={post.description}
        srcPost={post.image.src}
      />
    ));
  return renderBlogs();
};

BlogsPosts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default BlogsPosts;
