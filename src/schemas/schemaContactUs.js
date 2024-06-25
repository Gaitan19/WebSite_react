import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Required field"),
  email: Yup.string().email("Invalid email").required("Required field"),
  company: Yup.string().required("Required field"),
  phoneNumber: Yup.string()
    .test("is-number", "Phone number must contain only digits", (value) =>
      /^\d+$/.test(value),
    )
    .required("Required field"),
  message: Yup.string().required("Required field"),
});
