import { blogs } from "@/constants/blogs";
import { blogHome } from "@/constants/data";
import HomeCardBlog from "../Home/HomeCardBlog";

const Blog = () => {
  const renderBlogs = () =>
    blogs.map((blog) => (
      <HomeCardBlog
        key={blog.id}
        image={blog.image}
        date={blog.date}
        title={blog.title}
        text={blog.text}
        href={blog.link}
        linkText={blog.linkText}
      />
    ));

  return (
    <section className="blog">
      <div className="container">
        <h2 className="title blog__title">{blogHome.title}</h2>
        <h3 className="title title--secondary blog__subtitle">
          {blogHome.subtitle}
        </h3>
        <div className="blog__posts">{renderBlogs()}</div>
      </div>
    </section>
  );
};

export default Blog;
