"use client";
import { Input } from "@material-tailwind/react";
import React, { useRef, useEffect, useState } from "react";

export default function FormInput({
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
      <Input
        variant="standard"
        {...register}
        id={inputName}
        name={inputName}
        type={type}
        label={label}
        color="purple"
        autoComplete={inputName}
        error={errors[inputName] && true}
      />

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
