import Image from "next/image";
import { galleryCareers } from "@/constants/data";

const CareersGalleryItems = () => {
  const renderGalleryItems = () =>
    galleryCareers.map((item) => (
      <Image
        className="careers__gallery-image"
        key={item.id}
        src={item.image}
        alt="Careers Gallery "
        width={381}
        height={381}
      />
    ));

  return renderGalleryItems();
};

export default CareersGalleryItems;
