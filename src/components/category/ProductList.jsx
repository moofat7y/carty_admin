import React from "react";
import { HiOutlineFilter } from "react-icons/hi";
import ProductFilter from "./ProductFilter";
import Modal from "../ui/modals/Modal";

export default function ProductList() {
  const [openModal, setOpenModal] = React.useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="product-list mt-7">
      <h2 className="text-2xl font-extrabold my-5">المنتجات</h2>
      <div className="filter-search flex items-center">
        {/* <form className="w-full md:w-[475px]"> */}
        <div className="flex">
          <input
            type="text"
            id="website-admin"
            className="rounded-none bg-gray-50 border text-gray-900 focus:ring-primary-500 focus:border-primary-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
            placeholder="ابحث بإسم المنتج"
          />
          <div className="filter">
            <button
              onClick={() => setOpenModal(true)}
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="h-full flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
              type="button"
            >
              <HiOutlineFilter />
            </button>
            <Modal open={openModal} onClose={closeModal} title={"فرز المنتجات"}>
              <ProductFilter close={() => setOpenModal(false)} />
            </Modal>
          </div>
        </div>
        {/* </form> */}
      </div>
      <div className="list mt-7">
        <ul>
          <li className="flex h-[36px] items-center px-4 border border-gray-300 mb-2 rounded cursor-pointer shadow-sm">
            <input
              id="pro-name"
              type="checkbox"
              value=""
              name="bordered-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="pro-name"
              className="w-full mr-2 text-sm font-medium text-gray-900 dark:text-gray-800 cursor-pointer"
            >
              اسم المنتج
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
