import PropTypes from "prop-types";
import CardIndustry from "../CardIndustry";

const AugmentationCardIndustry = ({
  altPost,
  srcPost,
  author,
  date,
  tags,
  title,
  text,
}) => {
  return (
    <CardIndustry
      altPost={altPost}
      srcPost={srcPost}
      author={author}
      date={date}
      tags={tags}
      title={title}
      text={text}
    />
  );
};

AugmentationCardIndustry.propTypes = {
  altPost: PropTypes.string.isRequired,
  srcPost: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AugmentationCardIndustry;
