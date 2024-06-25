import { about } from "@/constants/data";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className="about-description">
            <h2 className="title about__title">{about.title}</h2>
            <h3 className="title title--secondary about__subtitle">
              {about.subtitle}
            </h3>
          </div>
          <p className="text about__text">{about.text}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
