import { BlogsPost } from "@/constants/data";
import BlogsPosts from "./BlogsPosts";
import BlogsPostCard from "./BlogsPostCard";

const BlogsSecondBlock = () => {
  return (
    <section className="blogs second">
      <div className="container">
        <div className="blogs__wrapper">
          <div className="blogs__posts block--second">
            <BlogsPosts posts={BlogsPost.postsDown} />
            <BlogsPostCard
              alt={BlogsPost.postDouble.alt}
              image={BlogsPost.postDouble.image}
              link={BlogsPost.postDouble.link}
              informations={BlogsPost.postDouble.informations}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSecondBlock;
