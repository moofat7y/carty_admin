import React from "react";

export default function ProductFilter(close) {
  return (
    <div className="product-filter">
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
            جميع المنتجات
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
            جميع المنتجات لهذا التصنيف
          </label>
        </div>
        <div className="act flex gap-5">
          <button
            type="submit"
            className="flex w-[170px] mt-3 mb-2 justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            تأكيد
          </button>
          <button
            type="button"
            onClick={close.close}
            className="flex w-[170px] mt-3 mb-2 justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            رجوع
          </button>
        </div>
      </form>
    </div>
  );
}
