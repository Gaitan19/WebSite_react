import { useState } from "react";
import { useFormik } from "formik";
import Select from "react-select";
import { validationSchema } from "@/schemas/schemaApplyPositions";
import {
  countryOptions,
  initialValues,
  fields,
  fieldsSecondary,
} from "@/constants/applyPositions";
import CareerDetailsFields from "./CareerDetailsFields";
import Input from "../Input";
import Button from "../Button";

const CareerDetailsForm = () => {
  const [topSkills, setTopSkills] = useState([]);
  const [countryCode, setCountryCode] = useState("");

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
  } = formik;

  const handleSkillsChange = (selectedOptions) => {
    setTopSkills(selectedOptions);
    setFieldValue(
      "skills",
      selectedOptions.map((option) => option.value),
    );
  };

  const handleChangeCountry = (selectedOption) => {
    setFieldValue("country", selectedOption.label);
    setCountryCode(() => selectedOption.dialCode);
  };

  return (
    <form onSubmit={handleSubmit} className="careers__form">
      <CareerDetailsFields
        fields={fields}
        formikProps={{
          handleChange,
          handleBlur,
          setFieldValue,
          setFieldTouched,
          values: formik.values,
          touched,
          errors,
        }}
      />

      <div className="careers__form-row">
        <div className="careers__form-group">
          <Select
            id="countryOptions"
            name="country"
            options={countryOptions}
            className="careers__form-country"
            classNamePrefix="select"
            placeholder="Country"
            onChange={handleChangeCountry}
          />
          {touched.country && errors.country && (
            <span className="error">{errors.country}</span>
          )}
        </div>
        <div className="careers__form-group phone">
          <div className="phone-input-container">
            {formik.values.country && (
              <span className="phone-prefix">{countryCode}</span>
            )}
            <Input
              customClass="phone-input"
              type="number"
              placeholder="Phone Number"
              name="phone"
              onChange={handleChange}
            />
          </div>
          {touched.phone && errors.phone && (
            <span className="error">{errors.phone}</span>
          )}
        </div>
      </div>

      <CareerDetailsFields
        fields={fieldsSecondary}
        formikProps={{
          handleChange,
          handleBlur,
          setFieldValue,
          setFieldTouched,
          values: formik.values,
          touched,
          errors,
        }}
        handleMultiChange={handleSkillsChange}
        topSkills={topSkills}
      />

      <Button
        buttonType="submit"
        customClass="careers__form-button"
        buttonText="APPLY"
      />
    </form>
  );
};

export default CareerDetailsForm;
