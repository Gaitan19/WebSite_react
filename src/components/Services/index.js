import Image from "next/image";
import { services } from "@/constants/services";
import HomeCardService from "../Home/HomeCardService";
import { serviceHome } from "@/constants/data";

const Services = () => {
  const renderServices = () =>
    services.map((service) => (
      <HomeCardService
        key={service.id}
        image={service.image}
        alt="service"
        title={service.title}
        description={service.description}
      />
    ));
  return (
    <section className="services">
      <div className="container">
        <div className="services__content">
          <div className="services__text">
            <h2 className="title services__title">{serviceHome.title}</h2>
            <h3 className="title title--secondary services__subtitle">
              {serviceHome.subtitle}
            </h3>
            <p className="text">{serviceHome.text}</p>
          </div>
          <div className="services__images">
            <Image
              width={342}
              height={220}
              src={serviceHome.image}
              alt="Services"
            />
          </div>
        </div>
        <div className="services__bottom">{renderServices()}</div>
      </div>
    </section>
  );
};

export default Services;
