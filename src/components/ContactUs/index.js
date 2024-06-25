import { useFormik } from "formik";
import { validationSchema } from "@/schemas/schemaContactUs";
import { contactUs } from "@/constants/data";
import Input from "../Input";
import Button from "../Button";

const ContactUs = () => {
  const { initialValues } = contactUs;

  const { handleChange, errors, handleSubmit, touched } = useFormik({
    initialValues,
    onSubmit: () => {},
    validationSchema,
  });

  const renderFields = () =>
    contactUs.fields.map((field) => (
      <div
        className={`contact__field ${touched[field.name] && errors[field.name] && "error"}`}
        key={field.id}
      >
        <Input
          customClass={field.customClass}
          placeholder={field.placeholder}
          type={field.type}
          name={field.name}
          isTextarea={field.isTextarea}
          onChange={handleChange}
        />
        {touched[field.name] && errors[field.name] && (
          <span className="contact__error">{errors[field.name]}</span>
        )}
      </div>
    ));

  return (
    <div className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__information">
            <h2 className="title contact__title">{contactUs.title}</h2>
            <h3 className="title contact__subtitle">{contactUs.subtitle}</h3>
            <p className="text contact__text">
              {contactUs.text}
              <span className="text contact__text contact__text-secondary">
                {contactUs.secondaryText}
              </span>
            </p>
          </div>

          <div className="contact__form">
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column align-items-center"
            >
              {renderFields()}
              <Button
                customClass="button contact__button"
                buttonText="SEND"
                buttonType="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
