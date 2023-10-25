import React, { useRef, useEffect, useState } from "react";

export default function RegulerInput({
  inputName,
  label,
  type,
  errors,
  register,
}) {
  const [errMsgHeight, setErrMsgHeight] = useState(0);
  const errorMsg = useRef();

  useEffect(() => {
    if (errorMsg) {
      setErrMsgHeight(errorMsg.current.clientHeight);
    }
  }, [errors[inputName]]);

  return (
    <div>
      <label
        htmlFor={inputName}
        className="block text-sm font-medium leading-6 text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          {...register}
          id={inputName}
          name={inputName}
          type={type}
          autoComplete={inputName}
          className={`block duration-150 w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 ${
            errors[inputName] ? "!ring-red-700" : ""
          }`}
        />
      </div>

      <div
        style={{ height: errors[inputName]?.message ? errMsgHeight : 0 }}
        className={`h-0 overflow-hidden duration-200 mt-1`}
      >
        <p ref={errorMsg} className="text-[12px] text-red-600">
          {errors[inputName]?.message}
        </p>
      </div>
    </div>
  );
}
