import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";

const Clients = (props) => {
  const {
    customClass = "",
    children,
    speed = 50,
    autoFill = false,
    direction = "left",
  } = props;

  return (
    <section className={`clients ${customClass}`}>
      <div className="container">
        <Marquee speed={speed} autoFill={autoFill} direction={direction}>
          {children}
        </Marquee>
      </div>
    </section>
  );
};

Clients.propTypes = {
  customClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  speed: PropTypes.number,
  autoFill: PropTypes.bool,
  direction: PropTypes.string,
};

export default Clients;
