import Image from "next/image";
import PropTypes from "prop-types";
import Button from "../Button";

const Hero = (props) => {
  const {
    children = <></>,
    title,
    subtitle = "",
    text = "",
    buttonText,
    logo = "",
    customClasses = {},
  } = props;
  const {
    customClass = "",
    customContainer = "",
    customContent = "",
    customTitle = "",
    customSubtitle = "",
    customText = "",
    customDescription = "",
    customButton = "",
  } = customClasses;

  return (
    <section className={`hero ${customClass}`}>
      <div className={`container ${customContainer}`}>
        <div className={`hero__content ${customContent}`}>
          <div className={`hero__description ${customDescription}`}>
            <h2 className={`title hero__title ${customTitle}`}>{title}</h2>
            {subtitle.length > 0 && (
              <h3
                className={`title title--primary hero__title ${customSubtitle}`}
              >
                {subtitle}
              </h3>
            )}
            {text.length > 0 && (
              <p className={`text hero__text ${customText}`}>{text}</p>
            )}
            <div className="hero__content-bottom">
              <Button
                customClass={`button hero__content-button ${customButton}`}
                buttonText={buttonText}
              />
              {logo.length > 0 && <Image src={logo} width={150} height={162} />}
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  logo: PropTypes.string,
  customClasses: PropTypes.shape({
    customClass: PropTypes.string,
    customContent: PropTypes.string,
    customTitle: PropTypes.string,
    customSubtitle: PropTypes.string,
    customText: PropTypes.string,
    customContainer: PropTypes.string,
    customDescription: PropTypes.string,
    customButton: PropTypes.string,
  }),
};

export default Hero;
