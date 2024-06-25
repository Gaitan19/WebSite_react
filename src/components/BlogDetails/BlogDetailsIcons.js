import Image from "next/image";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const BlogDetailsIcons = ({ icons }) => {
  const renderIcons = () =>
    icons.map((icon) => (
      <li key={v4()} className="posts__socials-item">
        <Image width={48} height={48} src={icon} />
      </li>
    ));

  return renderIcons();
};

BlogDetailsIcons.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BlogDetailsIcons;
