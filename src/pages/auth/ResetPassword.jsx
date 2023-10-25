import React, { useState } from "react";
import RegulerInput from "../../components/ui/inputs/RegulerInput";
import { RegulerButton } from "../../components/ui/buttons/RegulerButton";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { notifyError, notifySuccess } from "../../utils/notifies";
import errHandler from "../../utils/errHandler";
import api from "../../utils/api";
export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { token } = useParams();

  console.log(location);
  const handlreResetPasswordHandler = async (data) => {
    try {
      setIsLoading(true);
      const res = await api.post("/seller/reset-password", {
        ...data,
        token: token,
      });
      notifySuccess("لقد تم تغيير كلمة المرور الخاصه بك بنجاح");
      navigate("/auth/signin");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      error = errHandler(error);
      notifyError(error);
    }
  };
  return (
    <div className="reset-password bg-gray-50">
      <div className="container h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit(handlreResetPasswordHandler)}
          className="w-full md:w-[435px] p-5 space-y-4 rounded-xl shadow-md bg-white text-gray-700"
        >
          <div className="head">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              إعادة تعيين كلمة المرور
            </h2>
          </div>
          <RegulerInput
            label={"كلمة المرور"}
            inputName={"password"}
            type={"password"}
            errors={errors}
            register={register("password", {
              required: "يجب عليك ادخال كلمة المرور",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d{5,})(?=.*[!@#$%])[A-Za-z\d!@#$%]+$/,
                message:
                  "يجب ان تتكون كلمة المرور علي الاقل من خمس احرف علي الاقل حرف مميز (#,@,&,*) وحرف كبير ",
              },
            })}
          />

          <RegulerInput
            label={"تاكيد كلمة المرور "}
            inputName={"password_confirmation"}
            type={"password"}
            errors={errors}
            register={register("password_confirmation", {
              required: "يجب عليك ادخال كلمة المرور",
            })}
          />

          <RegulerButton
            props={{
              fullWidth: true,
              color: "purple",
              type: "submit",
              disabled: isLoading,
            }}
            label={"إعادة تعيين كلمة المرور"}
          />
        </form>
      </div>
    </div>
  );
}
