import { BlogsPost } from "@/constants/data";
import BlogsPosts from "./BlogsPosts";

const BlogsFirstBlock = () => {
  return (
    <section className="blogs ">
      <div className="container">
        <div className="blogs__wrapper">
          <div className="blogs__posts block--first">
            <BlogsPosts posts={BlogsPost.TOPPOSTS} />
            <div className="blogs__posts-right">
              <BlogsPosts posts={BlogsPost.postsRight} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsFirstBlock;
