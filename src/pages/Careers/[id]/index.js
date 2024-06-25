import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { openPositions } from "@/constants/data";
import { getTitleSlug } from "@/utils/getSlug";
import CareerDetails from "@/components/CareerDetails";

export const metadata = {
  title: "Details",
};

const CareersDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { offers } = openPositions;

  const openOffer = offers.find((offer) => id === getTitleSlug(offer.title));

  return (
    <Layout>
      {openOffer && (
        <CareerDetails
          title={openOffer.title}
          experience={openOffer.experience}
          englishLevel={openOffer.englishLevel}
          location={openOffer.location}
          description={openOffer.description}
          competencies={openOffer.competencies}
          responsibilities={openOffer.responsibilities}
        />
      )}
    </Layout>
  );
};

export default CareersDetailsPage;
