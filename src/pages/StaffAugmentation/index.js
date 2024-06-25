import AugmentationClients from "@/components/Augmentation/AugmentationClients";
import AugmentationHero from "@/components/Augmentation/AugmentationHero";
import AugmentationLestsBuild from "@/components/Augmentation/AugmentationLestsBuild";
import Industry from "@/components/Industry";
import Layout from "@/components/Layout";
import Outstanting from "@/components/Outstanding";

export default function StaffAugmentationAPage() {
  return (
    <Layout>
      <AugmentationHero />
      <AugmentationClients />
      <Outstanting />
      <AugmentationLestsBuild />
      <Industry subtitle="Staff Augmentation" />
    </Layout>
  );
}
