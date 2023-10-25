import { ListItem, ListItemPrefix } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({ label, icon, href }) {
  return (
    <NavLink
      to={href}
      className="text-white active:bg-primary-900 active:rounded-xl"
    >
      <ListItem className=" hover:bg-primary-900 hover:text-white active:text-white focus:text-white">
        <ListItemPrefix className="!mr-0 ml-3 text-xl">{icon}</ListItemPrefix>
        {label}
      </ListItem>
    </NavLink>
  );
}
