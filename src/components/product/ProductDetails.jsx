import React from "react";
import RegulerInput from "../ui/inputs/RegulerInput";
import { useFieldArray } from "react-hook-form";

export default function ProductDescription({
  register,
  fields,
  watch,
  append,
  remove,
  control,
  // appendSize,
  // removeSize,
  // sizeFields,
  errors,
}) {
  const handleAddSize = (index) => {
    append({ size: "" }, { shouldFocus: true });
  };

  const handleRemoveSize = (productIndex, sizeIndex) => {
    remove(productIndex, sizeIndex);
  };

  const handleSizeChange = (productIndex, sizeIndex, event) => {
    const { value } = event.target;
    update(productIndex, { sizes: { [sizeIndex]: value } });
  };
  return (
    <div className="pro-info mt-10">
      <>
        {fields.map((field, index) => (
          <div key={field.id}>
            <input
              type="color"
              {...register(`product_details.${index}.color`)}
              defaultValue={field.color}
            />
            <input
              type="number"
              {...register(`product_details.${index}.quantity`)}
              defaultValue={field.quantity}
            />

            <ul className="grid w-full gap-6 md:grid-cols-2 col-span-2">
              <li>
                <input
                  type="radio"
                  id={`hosting-small${index}`}
                  {...register(`product_details.${index}.value`)}
                  className="hidden peer"
                  value="weight"
                />
                <label
                  htmlFor={`hosting-small${index}`}
                  className="block text-center font-semibold w-full px-5 py-1 text-gray-800 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary-600 peer-checked:bg-gray-100 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100"
                >
                  وزن
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id={`hosting-big${index}`}
                  {...register(`product_details.${index}.value`)}
                  value="size"
                  className="hidden peer"
                />
                <label
                  htmlFor={`hosting-big${index}`}
                  className="block text-center font-semibold w-full px-5 py-1 text-gray-800 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-primary-600 peer-checked:bg-gray-100 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100"
                >
                  مقاس
                </label>
              </li>
            </ul>

            {watch(`product_details.${index}.value`) === "weight" && (
              <div className="my-2 grid grid-cols-2 gap-2 items-center">
                <input
                  placeholder="الطول"
                  type="number"
                  className="block duration-150 w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  {...register(`product_details.${index}.weights.length`)}
                />
                <input
                  placeholder="العرض"
                  type="number"
                  className="block duration-150 w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  {...register(`product_details.${index}.weights.width`)}
                />
                <input
                  placeholder="الارتفاع"
                  type="number"
                  className="block duration-150 w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  {...register(`product_details.${index}.weights.height`)}
                />
                <input
                  placeholder="الوزن"
                  type="number"
                  className="block duration-150 w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  {...register(`product_details.${index}.weights.weight`)}
                />
              </div>
            )}

            {watch(`product_details.${index}.value`) === "size" && (
              <div className="my-2">
                <button onClick={() => handleAddSize(index)}>add size</button>
              </div>
            )}

            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </div>
        ))}
        <button
          className="w-full text-center"
          type="button"
          onClick={() => append({ color: "" })}
        >
          اضافة تفاصيل للمنتج
        </button>
      </>

      {watch("value") === "weight" && (
        <div className="my-2 grid grid-cols-2 gap-2 items-center">
          <RegulerInput
            label={"الطول"}
            inputName={"length"}
            type={"number"}
            errors={errors}
            register={{ ...register("length") }}
          />

          <RegulerInput
            label={"العرض"}
            inputName={"width"}
            type={"number"}
            errors={errors}
            register={{ ...register("width") }}
          />

          <RegulerInput
            label={"الارتفاع"}
            inputName={"height"}
            type={"number"}
            errors={errors}
            register={{ ...register("height") }}
          />

          <RegulerInput
            label={"الوزن"}
            inputName={"weight"}
            type={"number"}
            errors={errors}
            register={{ ...register("weight") }}
          />
        </div>
      )}

      {watch("value") === "size" && (
        <div className="my-2">
          <RegulerInput
            label={"الحجم"}
            inputName={"size"}
            type={"text"}
            errors={errors}
            register={{ ...register("size") }}
          />
        </div>
      )}
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

      {/* <div className="flex items-center gap-3">
        <input id="has-color" type="checkbox" {...register("has-color")} />
        <label htmlFor="has-color">اللون</label>
      </div> */}
    </div>
  );
}
