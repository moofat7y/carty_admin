import React from "react";
import icon from "/empty.svg";
import CategoryItem from "./CategoryItem";
import Empty from "../ui/Empty/Empty";
import { useSelector } from "react-redux";

export default function CategoryTable() {
  const { status, categories } = useSelector((state) => state.category);

  const categoryList = categories.map((item) => {
    return <CategoryItem category={item} key={item.id} />;
  });
  return (
    <div className="category my-10">
      {categories.length > 0 ? (
        <div className="category-table grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
          {categoryList}
        </div>
      ) : (
        <Empty
          title="إنشاء التصنيف الأول الخاص بك"
          img={icon}
          btnName="إضافة تصنيف"
          link="create-category"
        />
      )}
    </div>
  );
}
