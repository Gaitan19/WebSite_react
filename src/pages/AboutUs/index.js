import AboutHero from "@/components/About/AboutHero";
import AboutTestimonials from "@/components/About/AboutTestimonials";
import AboutUs from "@/components/AboutUs";
import Layout from "@/components/Layout";
import Leadership from "@/components/Leadership";

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <AboutTestimonials />
      <AboutUs />
      <Leadership />
    </Layout>
  );
}
