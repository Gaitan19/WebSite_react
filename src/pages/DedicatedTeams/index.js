import DedicatedClients from "@/components/Dedicated/DedicatedClients";
import DedicatedHero from "@/components/Dedicated/DedicatedHero";
import DedicatedLetsBuild from "@/components/Dedicated/DedicatedLetsBuild";
import Industry from "@/components/Industry";
import Layout from "@/components/Layout";
import Outstanting from "@/components/Outstanding";

export default function DedicatedPage() {
  return (
    <Layout>
      <DedicatedHero />
      <DedicatedClients />
      <Outstanting />
      <DedicatedLetsBuild />
      <Industry subtitle="Dedicated Teams" />
    </Layout>
  );
}
