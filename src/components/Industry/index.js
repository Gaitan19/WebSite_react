import PropTypes from "prop-types";
import { industryAugmentation } from "@/constants/data";
import AugmentationCardIndustry from "../Augmentation/AugmentationCardIndustry";

const Industry = ({ subtitle }) => {
  const renderPosts = () =>
    industryAugmentation.posts.map((post) => (
      <div key={post.id}>
        <AugmentationCardIndustry
          altPost={post.altPost}
          srcPost={post.image}
          author={post.author}
          date={post.date}
          title={post.title}
          text={post.text}
          tags={post.tags}
        />
      </div>
    ));
  return (
    <section className="industry">
      <div className="container">
        <div className="industry__content">
          <h2 className="title industry__title">
            {industryAugmentation.title}
          </h2>
          <h3 className="title industry__subtitle">
            {industryAugmentation.subtitle} {subtitle}
          </h3>

          <div className="industry__posts">{renderPosts()}</div>
        </div>
      </div>
    </section>
  );
};

Industry.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Industry;
