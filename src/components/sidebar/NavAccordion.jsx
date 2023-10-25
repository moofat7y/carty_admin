import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function NavAccordion({ icon, label, tabs }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Accordion
      open={isOpen}
      icon={
        <MdOutlineKeyboardArrowDown
          className={`mx-auto text-xl text-white transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      }
      children={{ span: "!ml-0" }}
    >
      <ListItem
        className="p-0 active:bg-primary-900 hover:bg-primary-900  hover:text-white active:text-white focus:text-white"
        selected={isOpen}
      >
        <AccordionHeader
          onClick={() => setIsOpen((prev) => !prev)}
          className="border-b-0 p-3 text-white"
        >
          <ListItemPrefix className="!mr-0 ml-3 text-xl text-white">
            {icon}
          </ListItemPrefix>
          <Typography
            color="white"
            className="ml-auto leading-tight font-normal"
          >
            {label}
          </Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
        <List className="p-0 !min-w-full">
          {tabs.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.href}
                className="text-white active:bg-primary-900 active:rounded-xl"
              >
                <ListItem className=" hover:bg-primary-900 hover:text-white active:text-white focus:text-white">
                  <ListItemPrefix className="!mr-0 ml-3">
                    <MdOutlineKeyboardArrowLeft className="text-xl text-white" />
                  </ListItemPrefix>
                  {item.label}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </AccordionBody>
    </Accordion>
  );
}
