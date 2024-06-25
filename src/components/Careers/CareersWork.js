import { workCareers } from "@/constants/data";
import CareersWorkList from "./CareersWorkList";

const CareersWork = () => {
  return (
    <section className="work">
      <div className="container">
        <div className="work__wrapper">
          <h2 className="title work__title">{workCareers.title}</h2>
          <h3 className="title title--secondary work__subtitle">
            {workCareers.subtitle}
          </h3>
          <div className="work__services">
            <CareersWorkList services={workCareers.services} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersWork;
