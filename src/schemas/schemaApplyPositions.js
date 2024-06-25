import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().required("*Name is a required field").min(3).max(25),
  email: yup.string().required("*Email is a required field").email(),
  country: yup.string().required("*Country is a required field"),
  phone: yup.string().required("*Phone is a required field").min(7).max(20),
  link: yup.string().required("*Link is a required field"),
  referred: yup.string().required("*Referred By is a required field"),
  skills: yup.array().of(yup.string()).required().min(1, "*Field is required"),
  english: yup.string().required("*English Level is a required field"),
});
