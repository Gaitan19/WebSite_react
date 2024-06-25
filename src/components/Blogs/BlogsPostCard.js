import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { getTitleSlug } from "@/utils/getSlug";
import BlogPostInformationList from "./BlogPostInformationList";

const BlogsPostCard = ({ image, alt, link, informations }) => {
  return (
    <article className="card card--industry double">
      <Link
        className="card--industry__link"
        href={`/blog/${getTitleSlug(link)}`}
      >
        <Image
          className="card--industry__image"
          width={414}
          height={203}
          alt={alt}
          src={image}
        />
      </Link>
      <div className="card--industry__informations">
        <BlogPostInformationList informations={informations} />
      </div>
    </article>
  );
};

BlogsPostCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
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

export default BlogsPostCard;
