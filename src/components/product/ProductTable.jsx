"use client";
import React, { useState } from "react";
import icon from "/public/empty.svg";
import { useSelector } from "react-redux";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import ProductItem from "./ProductItem";
import Empty from "../ui/Empty/Empty";
import { Link } from "react-router-dom";

export default function ProductTable() {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const { products, status } = useSelector((state) => state.product);

    const productList = products.map((item, index) => {
        return (
            <ProductItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                upload_site={item.upload_site}
                image={item.image}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
            />
        );
    });
    return (
        <div className="product my-10">
            {/* <div className="search-filter my-5 flex justify-center">
                <Search
                    inputName={"search-product"}
                    type={"search"}
                    placeholder={"ابحث باسم المنتج او ال SKU"}
                />
                <button className='py-[5px] rounded-e-md bg-primary-800 hover:bg-primary-900 px-3 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'>
                    تصفية
                </button>
            </div> */}

            {products.length < 1 ? (
                <Empty
                    title="إنشاء المنتج الاول الخاص بك"
                    img={icon}
                    btnName="إضافة منتج"
                    link="create-product"
                />
                ) : (
                <>
                    <Link
                        to={"/dashboard/create-product"}
                        type="button"
                        className="text-white bg-primary-500 hover:bg-primary-300 focus:ring-4 focus:outline-none focus:ring-primary-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mb-2"
                    >
                        اضافة منتج
                    </Link>
                    <div className="text-gray-700 mb-4 bg-gray-50  flex justify-between w-full py-3 px-[18px]">
                        {/* Col */}
                        <div className="col flex items-center gap-2">
                        <div className="flex items-center">
                            <input
                            id="checkbox-all"
                            onChange={(e) =>
                                e.target.checked
                                ? setSelectedProduct((prev) =>
                                    products.map((product) => product.id)
                                    )
                                : setSelectedProduct([])
                            }
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="checkbox-all" className="sr-only">
                            checkbox
                            </label>
                        </div>
                        <div className="text flex items-center gap-1">
                            <AiOutlineUsergroupDelete className="mx-auto text-gray-700 text-2xl" />
                            <p className="my-1 font-semibold">المنتجات</p>
                            <span className="text-xs mr-1 text-gray-500">
                            ({products.length} منتج)
                            </span>
                        </div>
                        </div>
                        {/* Col */}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-1 gap-[14px]">
                        {productList}
                    </div>
                </>
            )}
        </div>
    );
}
