import React, { useRef, useEffect, useState } from "react";

export default function SelectInput({
  inputName,
  label,
  type,
  errors,
  register,
  options,
  defaultOption,
}) {
  const [errMsgHeight, setErrMsgHeight] = useState(0);
  const errorMsg = useRef();

  useEffect(() => {
    if (errorMsg) {
      setErrMsgHeight(errorMsg.current.clientHeight);
    }
  }, [errors[inputName]]);

  const optionsList = options.map((item, index) => {
    return (
      <option key={index} value={item.id}>
        {item.name}
      </option>
    );
  });

  return (
    <div>
      <label
        htmlFor={inputName}
        className="block text-sm font-medium leading-6 text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <select
          {...register}
          id={inputName}
          name={inputName}
          type={type}
          autoComplete={inputName}
          className={`bg-gray-50 ring-1 ring-inset ring-gray-300 text-black text-sm rounded-lg focus:ring-primary-500  block w-full px-2.5 py-1 ${
            errors[inputName] ? "!ring-red-700" : ""
          }`}
        >
          <option value={defaultOption.value}>{defaultOption.label}</option>
          {optionsList}
        </select>
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
