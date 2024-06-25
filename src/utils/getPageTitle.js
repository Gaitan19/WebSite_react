import { routes } from "@/constants/routes";

export const getPageTitle = (pathname) => {
  if (pathname === routes.home) {
    return "Home";
  }

  return pathname
    .split("/")
    .filter((segment) => !segment.startsWith("[") && segment)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" - ");
};
