import Image from "next/image";
import { letUsHome } from "@/constants/data";

const LetUs = () => {
  return (
    <section className="letus">
      <div className="container">
        <div className="letus__content">
          <div className="letus__description">
            <h2 className="title letus__title">{letUsHome.title}</h2>
            <h3 className="title title--secondary">{letUsHome.subtitle}</h3>
            <p className="text">{letUsHome.text}</p>
            <p className="text">{letUsHome.text_secondary}</p>
          </div>
          <div className="letus__circle">
            <Image
              className="letus__circle__image"
              width={636}
              height={636}
              alt="all inclusive rate convers"
              src={letUsHome.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetUs;
