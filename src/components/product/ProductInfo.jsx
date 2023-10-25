import React from "react";
import { BsPlus } from "react-icons/bs";
import RegulerInput from "../ui/inputs/RegulerInput";
import TextArea from "../ui/inputs/TextArea";
import { RegulerButton } from "../ui/buttons/RegulerButton";

export default function ProductInfo({ register, watch, errors }) {
  return (
    <div className="pro-info mt-10">
      <div className="flex mb-3 items-center justify-center w-full">
        {watch("image")?.length > 0 ? (
          <img
            width={320}
            height={320}
            className="h-64 w-full"
            src={URL.createObjectURL(watch("image")[0])}
            alt="product image"
          />
        ) : (
          <>
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 ">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                {...register("image", { requried: "Please choose an image" })}
                className="hidden"
              />
            </label>
          </>
        )}
      </div>

      <div className="col-span-2">
        <RegulerInput
          label={"اسم المنتج"}
          inputName={"name"}
          type={"text"}
          errors={errors}
          register={{
            ...register("name", {
              required: "يجب عليك ادخال اسم المنتج",
            }),
          }}
        />
      </div>
      <TextArea
        label={"وصف المنتج"}
        inputName={"description"}
        type={"text"}
        errors={errors}
        register={{
          ...register("description", {
            required: "يجب عليك ادخال وصف المنتج",
          }),
        }}
      />

      <RegulerInput
        label={"سعر المنتج"}
        inputName={"price"}
        type={"number"}
        errors={errors}
        register={{
          ...register("price", {
            required: "يجب عليك ادخال سعر المنتج",
          }),
        }}
      />
      <RegulerInput
        label={"sku"}
        inputName={"sku"}
        type={"number"}
        errors={errors}
        register={{ ...register("sku") }}
      />
      <RegulerInput
        label={"الكمية"}
        inputName={"quantity"}
        type={"number"}
        errors={errors}
        register={{
          ...register("quantity", {
            required: "يجب عليك ادخال الكميه",
          }),
        }}
      />
      <div className="">
        <label htmlFor="categories" className="block text-sm font-medium">
          اختر التصنيف
        </label>
        <select
          id="categories"
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-2.5 py-1 cursor-pointer"
        >
          <option value="ملابس">ملابس</option>
          <option value="أجهزة الكترونية">أجهزة الكترونية</option>
        </select>
      </div>
      <RegulerButton
        icon={<BsPlus className="text-xl" />}
        label={"إضافة تصنيف جديد"}
        props={{
          type: "button",
          color: "gray",
          variant: "outlined",
          fullWidth: true,
          className: "flex items-center justify-center gap-3 mt-4",
        }}
      />
    </div>
  );
}
