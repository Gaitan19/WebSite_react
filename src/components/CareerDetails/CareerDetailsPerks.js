import { detailsCareers } from "@/constants/data";
import CareerDetailsList from "./CareerDetailsList";

const CareerDetailsPerks = () => {
  return (
    <section className="careers__perks">
      <div className="container">
        <div className="careers__perks-wrapper">
          <h2 className="careers__perks-title">{detailsCareers.perks}</h2>

          <CareerDetailsList
            items={detailsCareers.benefits}
            customClass="careers__list careers__perks-list"
            customItemClass="careers__list-item careers__perks-list-item"
          />
        </div>
      </div>
    </section>
  );
};

export default CareerDetailsPerks;
