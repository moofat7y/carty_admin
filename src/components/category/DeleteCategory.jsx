import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import Modal from "../ui/modals/Modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../redux/category/categorySlice";

export default function DeleteCategory() {
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const { id } = useParams();
  const closeModal = () => {
    setOpenModal(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onDelete = async () => {
    setIsLoading(true);
    dispatch(deleteCategory({ id, navigate }));
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
        <form>
          <div class="flex items-center mb-4">
            <input
              checked
              id="all-products"
              type="radio"
              value=""
              name="colored-radio"
              class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300"
            />
            <label
              for="all-products"
              class="mr-2 -mt-1 cursor-pointer text-lg font-medium text-gray-900"
            >
              حذف تلك المنتجات
            </label>
          </div>
          <div class="flex items-center mb-4">
            <input
              checked
              id="purple-radio"
              type="radio"
              value=""
              name="colored-radio"
              class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300"
            />
            <label
              for="purple-radio"
              class="mr-2 -mt-1 cursor-pointer text-lg font-medium text-gray-900"
            >
              نقلهم إلى تصنيف آخر
            </label>
          </div>
          <div className="select">
            <select
              id="categories"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-2.5 py-1 cursor-pointer"
            >
              <option value="ملابس">ملابس</option>
              <option value="أجهزة الكترونية">أجهزة الكترونية</option>
            </select>
          </div>
          <div className="act flex gap-5 mt-3">
            <button
              type="button"
              onClick={() => onDelete()}
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
