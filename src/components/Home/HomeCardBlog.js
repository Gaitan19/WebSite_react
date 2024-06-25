import PropTypes from "prop-types";
import CardBlog from "../CardBlog";

const HomeCardBlog = (props) => {
  const { image, date, title, text, href, linkText } = props;

  return (
    <CardBlog
      image={image}
      date={date}
      title={title}
      text={text}
      href={href}
      linkText={linkText}
    />
  );
};

HomeCardBlog.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default HomeCardBlog;
