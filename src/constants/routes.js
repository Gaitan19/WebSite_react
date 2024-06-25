import { v4 } from "uuid";

export const routes = {
  home: "/",
  about: "/AboutUs",
  services: "/Services",
  blog: "/Blog",
  careers: "/Careers",
  staffAugmentation: "/StaffAugmentation",
  dedicatedTeams: "/DedicatedTeams",
};

export const options = [
  { id: v4(), text: "About Us", url: routes.about },
  {
    id: v4(),
    text: "Services",
    submenu: [
      {
        id: v4(),
        text: "Staff Augmentation",
        url: routes.staffAugmentation,
      },
      {
        id: v4(),
        text: "Dedicated Teams",
        url: routes.dedicatedTeams,
      },
    ],
  },
  { id: v4(), text: "Blog", url: routes.blog },
  { id: v4(), text: "Careers", url: routes.careers },
];
