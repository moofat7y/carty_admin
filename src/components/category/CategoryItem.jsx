import React from "react";
import { Link } from "react-router-dom";

export default function CategoryItem({ category }) {
  return (
    <div className="cat-item">
      <div className="bg-primary-100 px-5 py-10 rounded-t-md">
        <div className="text text-center text-xl font-bold text-primary-900">
          <h3>{category.name}</h3>
          <span className="block mt-2 text-gray-500 text-lg">
            {`${category.products_count} `}
            منتج
          </span>
        </div>
      </div>
      <div className="">
        <Link
          to={`/categories/${category.id}`}
          state={{ category }}
          className="block text-center py-2 rounded-b-md bg-primary-300 px-3 text-sm font-semibold leading-6 text-primary-900 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          عرض التفاصيل
        </Link>
      </div>
    </div>
  );
}
