import { useFormik } from "formik";
import Link from "next/link";
import { newsletterData } from "@/constants/data";
import Input from "../Input";
import { validationSchema } from "@/schemas/schemaNewsletter";
import Button from "../Button";
import { routes } from "@/constants/routes";

const Newsletter = () => {
  const { initialValues } = newsletterData;

  const { handleChange, errors, handleSubmit, touched } = useFormik({
    initialValues,
    onSubmit: () => {},
    validationSchema,
  });

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__info">
            <h3 className="title newsletter__title">{newsletterData.title}</h3>
            <p className="title title--secondary newsletter__description">
              {newsletterData.description}
            </p>
          </div>

          <form className="newsletter__form" onSubmit={handleSubmit}>
            <label className="newsletter__form-label">
              {newsletterData.label}
            </label>
            <div
              className={`newsletter__form-block  ${touched.email && errors.email && "error"}`}
            >
              <Input
                customClass="newsletter__form-email"
                name="email"
                onChange={handleChange}
                placeholder="Enter e-mail"
              />

              <Button
                customClass="button newsletter__button"
                buttonText="Subscribe"
                buttonType="submit"
              />

              {touched.email && errors.email && (
                <span className="newsletter__error">{errors.email}</span>
              )}
            </div>
            <div
              className={`newsletter__form-block check ${touched.checkPolicy && errors.checkPolicy && "error"}`}
            >
              <Input
                customClass="newsletter__form-check"
                name="checkPolicy"
                onChange={handleChange}
                type="checkbox"
                id="checkPolicy"
                defaultCheck
              />
              <label className="newsletter__labelcheck" htmlFor="checkPolicy">
                {newsletterData.checkText}
                <Link
                  className="newsletter__labelcheck-link"
                  href={routes.blog}
                >
                  {newsletterData.policy}
                </Link>
              </label>
              {touched.checkPolicy && errors.checkPolicy && (
                <span className="newsletter__error">{errors.checkPolicy}</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
