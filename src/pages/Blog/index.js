import BlogsFirstBlock from "@/components/Blogs/BlogsFirstBlock";
import BlogsHero from "@/components/Blogs/BlogsHero";
import BlogsSecondBlock from "@/components/Blogs/BlogsSecondBlock";
import Layout from "@/components/Layout";
import Newsletter from "@/components/Newsletter";

export default function BlogPage() {
  return (
    <Layout>
      <BlogsHero />
      <BlogsFirstBlock />
      <Newsletter />
      <BlogsSecondBlock />
    </Layout>
  );
}
