import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import RegulerInput from "../ui/inputs/RegulerInput";

export default function ProductDiscount({ errors, register, watch }) {
  console.log(watch("site-star"));
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="col flex h-[36px] items-center px-4 border border-gray-300 mt-7 rounded cursor-pointer shadow-sm">
        <label
          htmlFor="show-on-website"
          className="w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-800 cursor-pointer"
        >
          نشر على الموقع
        </label>
        <input
          id="show-on-website"
          type="checkbox"
          defaultChecked={true}
          {...register("status")}
          name="bordered-checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div className="col flex h-[36px] items-center px-4 border border-gray-300 mt-7 rounded cursor-pointer shadow-sm">
        <label
          htmlFor="pro-star"
          className="flex items-center gap-2 w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-800 cursor-pointer"
        >
          <AiOutlineStar className="text-lg" />
          منتج مميز
        </label>
        <input
          id="pro-star"
          type="checkbox"
          defaultChecked={false}
          {...register("site-star")}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <RegulerInput
        label={"إضافة خصم"}
        inputName={"discount"}
        type={"number"}
        errors={errors}
        register={{ ...register("discount") }}
      />
      <RegulerInput
        label={"تاريخ انتهاء الخصم"}
        inputName={"discount_date"}
        type={"date"}
        errors={errors}
        register={{ ...register("discount_date") }}
      />
    </div>
  );
}
