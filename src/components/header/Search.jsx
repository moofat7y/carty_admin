import React, { useState } from "react";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

export const searchFilters = [
  { text: "الطلبات", placeholder: "ابحث برقم الطلب ، اسم العميل ، رقم الشحنة" },
  {
    text: "المنتجات",
    placeholder: "ابحث بإسم المنتج ، اسم التصنيف ، وصف المنتج أو الـSKU",
  },
  { text: "العملاء", placeholder: "ابحث بإسم العميل ، رقم الجوال" },
];
const Search = () => {
  const [filter, setFilter] = useState(0);
  return (
    <div className="flex justify-center w-[min-content]">
      <Button
        color="purple"
        className="px-3 md:px-6  hover:shadow-none shadow-none rounded-none"
      >
        <BsSearch />
      </Button>
      <Input
        type="text"
        placeholder={searchFilters[filter].placeholder}
        className=" rounded-none  focus:border focus:!border-purple-500 h-fit"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "w-[20%] !h-auto !min-w-[120px] md:!min-w-[200px]",
        }}
      />

      <Menu
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <Button
            color="white"
            className="rounded-none flex items-center justify-between px-3 md:px-6  md:min-w-[120px] w-[120px] hover:shadow-none shadow-none"
          >
            {searchFilters[filter].text}
            <MdOutlineKeyboardArrowDown className="text-lg" />
          </Button>
        </MenuHandler>
        <MenuList className="min-w-[120px] p-0 rounded-none">
          {searchFilters.map((filter, index) => {
            return (
              <MenuItem
                key={filter.text}
                className="rounded-none text-center"
                onClick={() => setFilter(index)}
              >
                {filter.text}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
};

export default Search;
