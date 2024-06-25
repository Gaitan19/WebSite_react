import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const CardBlog = (props) => {
  const { image, date, title, text, href, linkText } = props;

  return (
    <article className="card card--blog">
      <Image
        className="card--blog__image"
        src={image}
        width={306}
        height={203}
        alt="blog post"
      />
      <div className="card--blog__content">
        <span className="text card--blog__date">{date}</span>
        <h3 className="text card--blog__title">{title}</h3>
        <p className="text text--secondary card--blog__text">{text}</p>
        <Link className="text card--blog__link" href={href}>
          {linkText}
        </Link>
      </div>
    </article>
  );
};

CardBlog.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default CardBlog;
