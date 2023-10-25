import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import RegulerInput from "../ui/inputs/RegulerInput";
import TextArea from "../ui/inputs/TextArea";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../redux/category/categorySlice";
import { RegulerButton } from "../ui/buttons/RegulerButton";

export default function AddCategory(close) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    await dispatch(createCategory({ data, navigate }));
    close.close();
    setIsLoading(false);
  };
  return (
    <div className="add-cat">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[280px] md:w-[435px] space-y-4 text-gray-700"
      >
        <RegulerInput
          label={"ادخل اسم التصنيف"}
          inputName={"name"}
          type={"text"}
          errors={errors}
          register={{
            ...register("name", {
              required: "يجب عليك ادخال اسم",
            }),
          }}
        />
        <TextArea
          label={"وصف التصنيف"}
          inputName={"note"}
          type={"text"}
          errors={errors}
          register={{
            ...register("note"),
          }}
        />
        <div className="act flex gap-5">
          <RegulerButton
            label={"اضافه"}
            props={{
              type: "submit",
              color: "purple",
              disabled: isLoading,
              fullWidth: true,
            }}
          />
          <RegulerButton
            label={"رجوع"}
            props={{
              type: "button",
              color: "gray",
              fullWidth: true,
              variant: "outlined",
              onClick: close.close,
            }}
          />
        </div>
      </form>
    </div>
  );
}
