import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import ProductList from "../../components/category/ProductList";
import RegulerInput from "../../components/ui/inputs/RegulerInput";
import TextArea from "../../components/ui/inputs/TextArea";
import DeleteCategory from "../../components/category/DeleteCategory";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import { updateCategory } from "../../redux/category/categorySlice";

export default function CategoryDetails() {
  const { state } = useLocation();
  const [category, setCategory] = useState(state?.category);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const getCategory = async () => {
      try {
        setIsLoading(true);
        const { data } = await api.get(`/seller/categories/${id}`);
        setCategory(data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    if (!category) {
      getCategory();
    }

    setValue("name", category.name);
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEditCat = async (data) => {
    setIsLoading(true);
    await dispatch(
      updateCategory({ data: { ...data, _method: "PUT" }, id, navigate })
    );
    setIsLoading(false);
  };
  return (
    <section className="py-3 min-h-[70vh] flex items-center">
      <div className="container">
        <form
          onSubmit={handleSubmit(handleEditCat)}
          className="w-full mx-auto md:w-[475px] space-y-4 text-gray-700"
        >
          <div className="act flex gap-5 items-center">
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-[130px] justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              تأكيد
            </button>
            <Link
              to={"/categories"}
              className="flex w-[130px] justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              رجوع
            </Link>
            <DeleteCategory />
          </div>
          <RegulerInput
            label={"اسم التصنيف"}
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
          {/* <ProductList /> */}
        </form>
      </div>
    </section>
  );
}
