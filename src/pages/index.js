import Blog from "@/components/Blog";
import HomeClients from "@/components/Home/HomeClients";
import HomeHero from "@/components/Home/HomeHero";
import HomeLestsBuild from "@/components/Home/HomeLestsBuild";
import HomeReviews from "@/components/Home/HomeReviews";
import Layout from "@/components/Layout";
import LetUs from "@/components/LetUs";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <Layout>
      <HomeHero />
      <HomeClients />
      <Services />
      <LetUs />
      <HomeLestsBuild />
      <HomeReviews />
      <Blog />
    </Layout>
  );
}
