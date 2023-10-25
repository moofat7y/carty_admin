import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../utils/api";
import errHandler from "../../utils/errHandler";
import { RegulerButton } from "../ui/buttons/RegulerButton";

export default function Payment() {
  const { token } = useSelector((state) => state.auth);
  const [payment, setPayment] = useState({
    status: "idle",
    payments: [],
  });

  useEffect(() => {
    const getPayment = async () => {
      try {
        setPayment((prev) => ({ ...prev, status: "loading" }));
        const res = await api.get("/seller/plan");
        setPayment((prev) => ({
          ...prev,
          status: "success",
          payments: res.data.data,
        }));
      } catch (error) {
        error = errHandler(error);
        setPayment((prev) => ({ ...prev, status: "error" }));
      }
    };

    if (token) {
      getPayment();
    }
  }, []);

  const plansList = payment.payments.map((item, index) => {
    return (
      <div
        key={index}
        className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow "
      >
        <h3 className="mb-4 text-2xl font-semibold">{item.plan_name}</h3>
        <p className="font-light text-gray-500 sm:text-lg ">
          {item.plan_feature}
        </p>
        <div className="flex justify-center items-baseline my-8">
          <span className="mr-2 text-5xl font-extrabold">{item.cost}</span>
          <span className="text-gray-500 ">/month</span>
        </div>
        <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 ,text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Individual configuration</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 ,text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>No setup, or hidden fees</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 ,text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>
              Team size: <span className="font-semibold">10 developers</span>
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 ,text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>
              Premium support: <span className="font-semibold">24 months</span>
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 ,text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>
              Free updates: <span className="font-semibold">24 months</span>
            </span>
          </li>
        </ul>
        <RegulerButton
          label={"اختيار"}
          props={{
            type: "button",
            color: "purple",
            disabled: true,
          }}
        />
      </div>
    );
  });
  return (
    <>
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="space-y-8 lg:grid sm:gap-6 xl:gap-10 lg:space-y-0">
          {plansList}
        </div>
      </div>
    </>
  );
}
