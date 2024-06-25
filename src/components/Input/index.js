import PropTypes from "prop-types";

const Input = (props) => {
  const {
    customClass,
    type = "text",
    placeholder = "",
    name = "",
    isTextarea = false,
    onChange = () => {},
    onBlur = () => {},
    id = "",
    defaultCheck = false,
  } = props;

  return isTextarea ? (
    <textarea
      className={customClass}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
    />
  ) : (
    <input
      id={id}
      name={name}
      className={customClass}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      defaultChecked={defaultCheck}
    />
  );
};

Input.propTypes = {
  customClass: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "tel", "number", "checkbox"]),
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isTextarea: PropTypes.bool,
  id: PropTypes.string,
  defaultCheck: PropTypes.bool,
};

export default Input;
