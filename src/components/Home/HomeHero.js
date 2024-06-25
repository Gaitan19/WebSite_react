import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Hero from "../Hero";
import { heroCards } from "@/constants/heroCards";
import HomeCardStack from "./HomeCardStack";
import { heroHome } from "@/constants/data";

const HomeHero = () => {
  const renderHeroCars = () =>
    heroCards.map((heroCard) => (
      <SwiperSlide key={heroCard.id}>
        <HomeCardStack
          image={heroCard.image}
          width={120}
          height={120}
          alt={heroCard.alt}
          name={heroCard.name}
          charge={heroCard.charge}
          text={heroCard.text}
          skills={heroCard.skills}
        />
      </SwiperSlide>
    ));

  return (
    <Hero
      title={heroHome.title}
      subtitle={heroHome.subtitle}
      text={heroHome.text}
      buttonText={heroHome.buttonText}
      logo={heroHome.logo}
      customClasses={heroHome.customClasses}
    >
      <div className="hero__stack">
        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          speed={1000}
          modules={[Autoplay]}
          loop
        >
          {renderHeroCars()}
        </Swiper>
      </div>
    </Hero>
  );
};

export default HomeHero;
