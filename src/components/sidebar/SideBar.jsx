import React from "react";
import { Card, List } from "@material-tailwind/react";
import { navList } from "../../utils/helpers";
import NavItem from "./NavItem";
import NavAccordion from "./NavAccordion";

export function SideBar() {
  const nav_list = navList.map((item, index) => {
    if (item.type === "acc") {
      return (
        <NavAccordion
          key={index}
          label={item.label}
          tabs={item.tabs}
          icon={item.icon}
        />
      );
    } else {
      return (
        <NavItem
          key={index}
          label={item.label}
          icon={item.icon}
          href={item.href}
        />
      );
    }
  });

  return (
    <Card className="h-screen sticky top-0 w-full max-w-[17rem] p-4 shadow-xl bg-primary-800 rounded-none shadow-blue-gray-900/5">
      <div className="logo w-full flex justify-center h-14 mb-5 relative">
        <img src={"../../../public/logo.ico"} alt="logo" className="w-12 h-12" />
      </div>
      <List>{nav_list}</List>
    </Card>
  );
}
