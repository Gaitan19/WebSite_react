import PropTypes from "prop-types";
import Button from "../Button";

const LetsBuild = ({
  children = <> </>,
  title,
  subtitle,
  customClasses = {},
}) => {
  const {
    customClass = "",
    customTitle = "",
    customSubtitle = "",
    customPerks = "",
    customButton = "",
  } = customClasses;

  return (
    <section className={`build ${customClass}`}>
      <div className="container">
        <h2 className={`title build__title ${customTitle}`}>{title}</h2>
        <h3
          className={`title title--secondary build__subtitle ${customSubtitle}`}
        >
          {subtitle}
        </h3>
        <div className="build__content">
          <div className={`build__perks ${customPerks}`}>{children}</div>
          <Button
            customClass={`button ${customButton}`}
            buttonText="SCHEDULE A CALL"
          />
        </div>
      </div>
    </section>
  );
};
LetsBuild.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  customClasses: PropTypes.shape({
    customClass: PropTypes.string,
    customTitle: PropTypes.string,
    customSubtitle: PropTypes.string,
    customPerks: PropTypes.string,
    customButton: PropTypes.string,
  }),
};

export default LetsBuild;
