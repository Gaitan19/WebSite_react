import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { getTitleSlug } from "@/utils/getSlug";
import { routes } from "@/constants/routes";

const CardIndustry = ({
  altPost,
  srcPost,
  author,
  date,
  tags,
  title,
  text,
}) => {
  const renderTags = () =>
    tags.map((tag) => (
      <span className="card--industry__tag" key={tag.id}>
        {tag.text}
      </span>
    ));

  return (
    <article className="card card--industry">
      <Link
        className="card--industry__link"
        href={`${routes.blog}/${getTitleSlug(title)}`}
      >
        <Image
          className="card--industry__image"
          width={414}
          height={203}
          alt={altPost}
          src={srcPost}
        />
      </Link>
      <div className="card--industry__description">
        <div className="card--industry__information">
          <span className="card--industry__author">{author}</span>
          <span className="card--industry__point"> • </span>
          <span className="card--industry__date">{date}</span>
        </div>
        <div className="card--industry__head">
          <Link
            className="card--industry__title"
            href={`${routes.blog}/${getTitleSlug(title)}`}
          >
            {title}
          </Link>
          <Image
            className="card--industry__arrow"
            src="/arrow-up.png"
            width={15}
            height={15}
            alt="arrow up"
          />
        </div>
        <p className="card--industry__text">{text}</p>
        <div className="card--industry__tags">{renderTags()}</div>
      </div>
    </article>
  );
};

CardIndustry.propTypes = {
  altPost: PropTypes.string.isRequired,
  srcPost: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardIndustry;
