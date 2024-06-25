import { benefitsCareers } from "@/constants/data";
import CareersBenefitsList from "./CareersBenefitsList";

const CareersBenefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <h2 className="title benefits__title">{benefitsCareers.title}</h2>
        <h3 className="title title--secondary benefits__subtitle">
          {benefitsCareers.subtitle}
        </h3>
        <div className="benefits__perks">
          <CareersBenefitsList perks={benefitsCareers.cards} />
        </div>
      </div>
    </section>
  );
};

export default CareersBenefits;
