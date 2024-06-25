import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("*Invalid email")
    .required("*Email is a required field"),
  checkPolicy: Yup.bool().oneOf([true], "*Privacy policy must be accepted"),
});
