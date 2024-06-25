import { heroBlogs } from "@/constants/data";
import Hero from "../Hero";

const BlogsHero = () => {
  return (
    <>
      <Hero
        title={heroBlogs.title}
        text={heroBlogs.text}
        buttonText={heroBlogs.buttonText}
        customClasses={heroBlogs.customClasses}
      />
    </>
  );
};

export default BlogsHero;
