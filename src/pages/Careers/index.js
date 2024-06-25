import CareersBenefits from "@/components/Careers/CareersBenefits";
import CareersGallery from "@/components/Careers/CareersGallery";
import CareersHero from "@/components/Careers/CareersHero";
import CareersRecruitment from "@/components/Careers/CareersRecruitment";
import CareersReviews from "@/components/Careers/CareersReviews";
import CareersWork from "@/components/Careers/CareersWork";
import Layout from "@/components/Layout";
import Opening from "@/components/Opening";

export default function CareersPage() {
  return (
    <Layout>
      <CareersHero />
      <CareersWork />
      <Opening />
      <CareersRecruitment />
      <CareersReviews />
      <CareersBenefits />
      <CareersGallery />
    </Layout>
  );
}
