import PropTypes from "prop-types";
import CareerDetailsInput from "./CareerDetailsInput";
import { inputTypes } from "@/constants/applyPositions";

const CareerDetailsFields = ({
  fields,
  formikProps: {
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldTouched,
    values,
    touched,
    errors,
  },
  handleMultiChange = () => {},
  topSkills = [],
}) => {
  return fields.map((field) => (
    <CareerDetailsInput
      key={field.name}
      type={field.type}
      name={field.name}
      placeholder={field.placeholder}
      options={field.options}
      customClass={field.customClass}
      handleChange={handleChange}
      handleBlur={handleBlur}
      setFieldValue={setFieldValue}
      setFieldTouched={setFieldTouched}
      value={values[field.name]}
      touched={touched[field.name]}
      errors={errors[field.name]}
      isMultiselect={field.isMultiselect}
      handleMultiChange={handleMultiChange}
      topSkills={topSkills}
    />
  ));
};

CareerDetailsFields.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(inputTypes).isRequired,
      name: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      options: PropTypes.array,
      customClass: PropTypes.string,
      isMultiselect: PropTypes.bool,
    }),
  ).isRequired,
  formikProps: PropTypes.shape({
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }).isRequired,
  handleMultiChange: PropTypes.func,
  topSkills: PropTypes.array,
};

export default CareerDetailsFields;
