import PropTypes from "prop-types";
import Link from "next/link";
import { getTitleSlug } from "@/utils/getSlug";
import { formatDate } from "@/utils/formatDate";
import TagLists from "../TagsList";
import { routes } from "@/constants/routes";

const BlogsPostInformation = ({ author, title, description, category }) => {
  return (
    <div className="card--industry__description">
      <div className="card--industry__information">
        <span className="card--industry__author">{author}</span>
        <span className="card--industry__point"> • </span>
        <span className="card--industry__date">{formatDate()}</span>
      </div>
      <div className="card--industry__head">
        <Link
          className="card--industry__title"
          href={`${routes.blog}/${getTitleSlug(title)}`}
        >
          {title}
        </Link>
      </div>
      <p className="card--industry__text">{description}</p>
      <div className="card--industry__tags">
        <TagLists customClass="card--industry__tag" tags={category} />
      </div>
    </div>
  );
};

BlogsPostInformation.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BlogsPostInformation;
