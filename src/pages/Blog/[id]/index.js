import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/components/Layout";
import { getTitleSlug } from "@/utils/getSlug";
import { data } from "@/constants/posts";
import Newsletter from "@/components/Newsletter";
import BlogDetailsList from "@/components/BlogDetails/BlogDetailsList";
import BlogDetailsIcons from "@/components/BlogDetails/BlogDetailsIcons";

export const metadata = {
  title: "Details",
};

const BlogDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const openPost = data.posts.find((post) => id === getTitleSlug(post.title));

  return (
    <Layout>
      {openPost && (
        <section className="posts">
          <div className="container">
            <div className="posts__wrapper information top">
              <h2 className="posts__title">{openPost.title}</h2>
              <p className="posts__description">{openPost.description}</p>

              <div className="posts__author">
                <span>By </span>
                <span className="posts__author-name">{openPost.author} | </span>
                <span className="posts__author-category">
                  {openPost.category}
                </span>
              </div>
              <Image
                width={1296}
                height={679}
                src={openPost.image.src}
                className="posts__image"
                priority
                alt="post"
              />
              <div className="posts__content">
                <BlogDetailsList posts={openPost.content.slice(0, 6)} />
              </div>
            </div>
          </div>

          <Newsletter />

          <div className="container">
            <div className="posts__wrapper">
              <div className="posts__content">
                <BlogDetailsList posts={openPost.content.slice(6)} />
              </div>

              <ul className="posts__socials">
                <BlogDetailsIcons icons={data.icons} />
              </ul>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogDetailsPage;
