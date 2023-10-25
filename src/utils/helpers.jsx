import { FaHome, FaBoxes } from "react-icons/fa";

export const navList = [
  {
    type: "item",
    label: "الرئيسيه",
    icon: <FaHome />,
    href: "/",
  },
  {
    type: "acc",
    label: "ادارة متجرك",
    icon: <FaBoxes />,
    tabs: [
      {
        label: "المنتجات",
        href: "/products",
      },
      {
        label: "التصنيفات",
        href: "/categories",
      },
    ],
  },
];
