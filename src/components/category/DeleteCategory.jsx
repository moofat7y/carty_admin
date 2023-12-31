import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import Modal from "../ui/modals/Modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../redux/category/categorySlice";
import { useForm } from "react-hook-form";

export default function DeleteCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { categories } = useSelector((state) => state.category);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const { id } = useParams();
  const closeModal = () => {
    setOpenModal(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryList = categories.map((item) => {
    if (item.id.toString() === id.toString()) {
      return;
    }
    return (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    );
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    dispatch(
      deleteCategory({
        id,
        deleted_id: +data.delete,
        category_id: id,
        navigate,
      })
    );
    setIsLoading(false);
  };

  return (
    <div className="delete-cat">
      <button
        onClick={() => setOpenModal(true)}
        className="text-[28px] h-fit text-red-700 hover:text-red-600"
        type="button"
      >
        <FaRegTrashCan />
      </button>
      <Modal open={openModal} onClose={closeModal} title={"حذف التصنيف"}>
        <form id="delete-cat">
          <div className="flex items-center mb-4">
            <input
              id="all-products"
              type="radio"
              {...register("delete", {
                required: true,
              })}
              value={"0"}
              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300"
            />
            <label
              for="all-products"
              className="mr-2 -mt-1 cursor-pointer text-lg font-medium text-gray-900"
            >
              حذف تلك المنتجات
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="purple-radio"
              type="radio"
              {...register("delete", {
                required: true,
              })}
              value={"1"}
              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300"
            />
            <label
              for="purple-radio"
              className="mr-2 -mt-1 cursor-pointer text-lg font-medium text-gray-900"
            >
              نقلهم إلى تصنيف آخر
            </label>
          </div>
          <div className="select">
            <select
              id="categories"
              {...register("category_id")}
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-2.5 py-1 cursor-pointer"
            >
              {categoryList}
            </select>
          </div>
          <div className="act flex gap-5 mt-3">
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              disabled={isLoading}
              className="flex w-[170px] mt-3 mb-2 justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              تأكيد
            </button>
            <Link
              type="button"
              onClick={() => setOpenModal(false)}
              className="flex w-[170px] mt-3 mb-2 justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
            >
              رجوع
            </Link>
          </div>
        </form>
      </Modal>
    </div>
  );
}
