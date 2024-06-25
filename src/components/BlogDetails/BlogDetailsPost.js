import PropTypes from "prop-types";
import parse from "html-react-parser";
import { formatText } from "@/utils/formatText";

const BlogDetailsPost = ({
  title = "",
  text = "",
  linkText = "",
  link = "",
}) => {
  return (
    <div className="posts__item">
      {title.length > 0 && <h3 className="posts__item-title">{title}</h3>}
      {text && (
        <p className="posts__item-text">
          {parse(formatText(text, linkText, link))}
        </p>
      )}
    </div>
  );
};

BlogDetailsPost.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  linkText: PropTypes.string,
  link: PropTypes.string,
};

export default BlogDetailsPost;
