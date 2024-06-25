import PropTypes from "prop-types";
import Select from "react-select";
import { useMemo } from "react";
import Input from "../Input";
import { inputTypes } from "@/constants/applyPositions";

const CareerDetailsInput = ({
  type,
  name,
  placeholder = "",
  options = [],
  customClass = "",
  handleChange,
  setFieldValue,
  value = "",
  touched = false,
  errors = "",
  isMultiselect = false,
  handleMultiChange = () => {},
  topSkills = [],
}) => {
  const selectedValue = useMemo(
    () => options.find((option) => option.value === value),
    [options, value],
  );

  const handleSelectedOption = useMemo(() => {
    return (selectedOption) => {
      setFieldValue(name, selectedOption.value);
    };
  }, [name, setFieldValue]);

  const selectValue = useMemo(() => {
    if (isMultiselect) {
      return topSkills;
    }
    return selectedValue;
  }, [isMultiselect, topSkills, selectedValue]);

  const handleOnChange = useMemo(() => {
    if (isMultiselect) {
      return handleMultiChange;
    }
    return handleSelectedOption;
  }, [isMultiselect, handleMultiChange, handleSelectedOption]);

  return (
    <div className="careers__form-group">
      {type === "select" ? (
        <Select
          options={options}
          className={customClass}
          classNamePrefix="select"
          placeholder={placeholder}
          isMulti={isMultiselect}
          value={selectValue}
          onChange={handleOnChange}
        />
      ) : (
        <Input
          customClass={customClass}
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
        />
      )}

      {touched && errors && <span className="error">{errors}</span>}
    </div>
  );
};

CareerDetailsInput.propTypes = {
  type: PropTypes.oneOf(inputTypes).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  customClass: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  touched: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.bool),
  ]),
  errors: PropTypes.string,
  isMultiselect: PropTypes.bool,
  handleMultiChange: PropTypes.func,
  topSkills: PropTypes.array,
};

export default CareerDetailsInput;
