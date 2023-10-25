import React from "react";
import { BsFolderPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Empty(props) {
  return (
    <div className="empty-categories h-[70vh] flex flex-col gap-2 justify-center items-center">
      <div className="icon relative h-96 w-96">
        <img
          loading="eager"
          className="w-full h-full object-contain"
          src={props.img}
          alt="empty-image"
        />
      </div>
      <div className="text text-center text-gray-800">
        <h3 className="text-2xl font-extrabold">{props.title}</h3>
        <p className="text-sm font-semibold">
          ولحسن الحظ أنه من السهل إنشاء عنصر جديد
        </p>
      </div>
      <div className="btn">
        <Link
          to={props.link}
          className="flex gap-3 mt-3 mb-2 justify-center items-center rounded-md bg-primary-400 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          {props.btnName}
          <BsFolderPlus />
        </Link>
      </div>
    </div>
  );
}
