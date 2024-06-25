import { outstandingAugmentation } from "@/constants/data";

const Outstanting = () => {
  const renderPerks = () =>
    outstandingAugmentation.perks.map((perk) => (
      <div key={perk.id} className="perks__item">
        <div className="perks__item-description">
          <h3 className="title title--secondary perks__item-title">
            {perk.title}
          </h3>
          <p className="text perks__item-text">{perk.description}</p>
        </div>
      </div>
    ));

  return (
    <section className="perks">
      <div className="container">
        <div className="perks__content">
          <h2 className="title perks__title">
            {outstandingAugmentation.title}
          </h2>

          <h3 className="title perks__subtitle">
            {outstandingAugmentation.subtitle}
          </h3>

          <div className="perks__list">{renderPerks()}</div>
        </div>
      </div>
    </section>
  );
};

export default Outstanting;
