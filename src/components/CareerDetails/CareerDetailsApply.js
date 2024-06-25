import { applyPosition } from "@/constants/data";
import CareerDetailsForm from "./CareerDetailsForm";

const CareerDetailsApply = () => {
  return (
    <section className="careers__apply">
      <div className="container">
        <div className="careers__apply-wrapper">
          <div className="careers__apply-information">
            <h2 className="title careers__apply-title">
              {applyPosition.title}
            </h2>
            <h3 className="title title--secondary careers__apply-subtitle">
              {applyPosition.subtitle}
            </h3>
            <p className="careers__apply-description">
              {applyPosition.description}
            </p>
          </div>
          <CareerDetailsForm />
        </div>
      </div>
    </section>
  );
};

export default CareerDetailsApply;
