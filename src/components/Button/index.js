import PropTypes from "prop-types";

const Button = (props) => {
  const {
    customClass,
    buttonText = "",
    buttonType = "button",
    children = <></>,
    onClick = () => {},
    disabled = false,
    ariaLabel = "",
  } = props;

  return (
    <button
      className={customClass}
      type={buttonType}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {buttonText}
      {children}
    </button>
  );
};

Button.propTypes = {
  customClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  buttonType: PropTypes.oneOf(["button", "submit"]),
  buttonText: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default Button;
