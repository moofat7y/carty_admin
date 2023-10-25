import React, { useState } from "react";
import defaultImg from "/public/prodDefault.webp";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/product/productSlice";

export default function ProductItem({
    name,
    price,
    quantity,
    id,
    upload_site,
    image,
    setSelectedProduct,
    selectedProduct,
}) {
    const [uploaded, setIsUploaded] = useState(upload_site);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const handleDelete = async () => {
        setIsLoading(true);
        await dispatch(deleteProduct({ id }));
        setIsLoading(false);
    };
    return (
        <div className="w-full flex justify-between items-center text-lg text-gray-500 border-b pb-7 |">
        <div className="img relative w-60 h-36 border bg-primary-50 rounded-md">
            <img
            src={image ? image : defaultImg}
            alt={`${name} image`}
            width={220}
            height={220}
            className="max-w-full max-h-full mx-auto object-contain"
            />
        </div>
        <div className="px-6 py-4 font-semibold text-gray-900">
            <h3 className="line-clamp-1">{name}</h3>
            <p className="text-base my-2 text-gray-600">
            {`${quantity} `}
            قطعة
            </p>
            <span
            className={`text-xs ${
                quantity < 1
                ? "bg-red-300 text-red-800"
                : "bg-primary-300 text-primary-800"
            } px-2 py-1 rounded-3xl`}
            >
            {quantity < 1 ? "غير متاح في المخزن" : "متاح في المخزن"}
            </span>
        </div>
        <div>
            <label className="relative inline-flex items-center cursor-pointer">
            <span className="ml-3 text-sm font-medium text-gray-900 select-none">
                نشر على المتجر
            </span>
            <input
                type="checkbox"
                onChange={() => setIsUploaded((prev) => (prev === 0 ? 1 : 0))}
                checked={uploaded}
                className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-300"></div>
            </label>
        </div>
        <div className="px-6 py-4 font-semibold text-gray-900">{price} ج.م</div>
        <div className="px-6 py-4 h-full flex flex-col justify-between">
            <Link
            href={"#"}
            className="py-[5px] rounded-sm bg-primary-300 px-3 text-sm font-semibold leading-6 text-primary-800 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
            بيانات المنتج
            </Link>
            <button
            disabled={isLoading}
            onClick={() => handleDelete()}
            className="py-[5px] rounded-sm bg-primary-300 px-3 text-sm font-semibold leading-6 text-primary-800 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
            حذف المنتج
            </button>
        </div>
        </div>
        // <div className="border rounded-md p-4 ps-1 xl:ps-4 cursor-pointer flex">
        //   <div className="flex items-center pe-2 self-start">
        //     <input
        //       id={id}
        //       onClick={(e) => e.stopPropagation()}
        //       onChange={(e) =>
        //         e.target.checked
        //           ? setSelectedProduct((prev) => [...prev, +e.target.id])
        //           : setSelectedProduct((prev) =>
        //               prev.filter((product) => product !== +e.target.id)
        //             )
        //       }
        //       type="checkbox"
        //       checked={
        //         selectedProduct.findIndex((prod) => prod === id) >= 0 ? true : false
        //       }
        //       className="w-4 h-4 text-purple-600 bg-gray-100 bproduct-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bproduct-gray-600 cursor-pointer"
        //     />
        //     <label htmlFor={id} className="sr-only">
        //       checkbox
        //     </label>
        //   </div>
        //   <div className="flex flex-1 gap-2 flex-col xl:flex-row">
        //     <div className="w-full">
        //       <div className="flex w-full gap-2">
        //         <div className={`h-[84px] w-[84px] relative`}>
        //           <Image
        //             width={320}
        //             height={320}
        //             className="w-full h-full object-contain"
        //             src={prodDefault}
        //             alt={`${name} image`}
        //           />
        //         </div>

        //         <div className="flex flex-col flex-1 gap-2">
        //           <div className="grid grid-cols-6 gap-2">
        //             <div className="col-span-6 sm:col-span-2 lg:col-span-6 xl:col-span-2">
        //               <span>{name}</span>
        //             </div>

        //             <div className="col-span-6 sm:col-span-2 lg:col-span-6 xl:col-span-2">
        //               {price} ج.م
        //             </div>
        //             <div className="col-span-6 sm:col-span-2 lg:col-span-6 xl:col-span-2">
        //               {quantity} قطعة
        //             </div>
        //           </div>
        //           <div>
        //             <label className="relative inline-flex items-center cursor-pointer">
        //               <span className="ml-3 text-sm font-medium text-gray-900 select-none">
        //                 نشر على المتجر
        //               </span>
        //               <input
        //                 type="checkbox"
        //                 onChange={() =>
        //                   setIsUploaded((prev) => (prev === 0 ? 1 : 0))
        //                 }
        //                 checked={uploaded}
        //                 className="sr-only peer"
        //               />
        //               <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-300"></div>
        //             </label>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
    );
}
