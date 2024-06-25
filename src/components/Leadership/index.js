import { leadershipAbout } from "@/constants/data";
import AboutCardStaff from "../About/AboutCardStaff";

const Leadership = () => {
  const renderMembers = () =>
    leadershipAbout.members.map((member) => (
      <div
        key={member.id}
        className="col-12 col-sm-6 col-md-4 leadership__card"
      >
        <AboutCardStaff
          image={member.image}
          width={member.width}
          height={member.height}
          alt={member.alt}
          name={member.name}
          position={member.position}
        />
      </div>
    ));
  return (
    <section className="leadership">
      <div className="container">
        <div className="leadership__content">
          <div className="leadership__description">
            <h2 className="title leadership__title">{leadershipAbout.title}</h2>
            <h3 className="title title--secondary leadership__subtitle">
              {leadershipAbout.subtitle}
            </h3>
          </div>
          <div className="row justify-content-center">{renderMembers()}</div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
