import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useFormSteps from "../../hooks/useFormSteps";

import { IoCreateOutline } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";
import { StepperContent } from "../../components/ui/steppers/StepperContent";
import ProductInfo from "../../components/product/ProductInfo";
import ProductDescription from "../../components/product/ProductDetails";
import ProductDiscount from "../../components/product/ProductDiscount";

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "colors",
  });
  // const {
  //   fields: sizeFields,
  //   append: appendSize,
  //   remove: removeSize,
  // } = useFieldArray({
  //   control,
  //   name: "sizes",
  // });
  const { next, back, currentStep, steps, step } = useFormSteps([
    {
      title: "",
      status: 0,
      component: (
        <ProductInfo register={register} errors={errors} watch={watch} />
      ),
      icon: <IoCreateOutline />,
    },
    {
      title: "",
      status: 0,
      component: (
        <ProductDiscount register={register} errors={errors} watch={watch} />
      ),
      icon: <TbFileDescription />,
    },
    {
      title: "",
      status: 0,
      component: (
        <ProductDescription
          register={register}
          errors={errors}
          fields={fields}
          append={append}
          remove={remove}
          control={control}
          watch={watch}
          // appendSize={appendSize}
          // removeSize={removeSize}
          // sizeFields={sizeFields}
        />
      ),
      icon: <TbFileDescription />,
    },
  ]);

  const onSubmit = (data) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append("upload_site", 1);
    // Object.entries(data).map(([key, val]) => {
    //   if (
    //     data.value === "size" &&
    //     (key === "width" ||
    //       key === "length" ||
    //       key === "height" ||
    //       key === "weight")
    //   ) {
    //     return;
    //   }

    //   if ((data.value === "weight") & (key === "size")) {
    //     return;
    //   }
    //   if (key === "image") {
    //     formData.append("image", val[0]);
    //     return;
    //   }
    //   if (key === "colors") {
    //     data[key].forEach((color, index) => {
    //       formData.append(`colors[${index}][color]`, color.color);
    //     });

    //     return;
    //   }
    //   formData.append(key, val);
    // });

    //    dispatch(createProduct({ data: formData, router }));
  };

  return (
    <section className="create-product py-3">
      <div className="container  w-full md:w-[550px]">
        <StepperContent steps={steps} currentStep={currentStep} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>{step.component}</div>
          <div className="w-full mt-7 mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button
                onClick={() => back()}
                type="button"
                className={`text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 ${
                  currentStep === 0 ? "hidden" : ""
                }`}
              >
                السابق
              </button>
              <button
                onClick={() => next()}
                type="button"
                disabled={!isValid}
                className={`${
                  currentStep + 1 === steps.length ? "hidden" : ""
                } ${
                  !isValid ? "opacity-50" : ""
                } text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800`}
              >
                التالي
              </button>

              <button
                type="submit"
                className={`text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 ${
                  currentStep + 1 === steps.length ? "block" : "hidden"
                }`}
              >
                تاكيد
              </button>
            </div>

            <Link
              className={`text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 `}
              to="/products"
            >
              الغاء
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
