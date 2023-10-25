import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { useForm } from "react-hook-form";
import RegulerInput from "../../components/ui/inputs/RegulerInput";
import { RegulerButton } from "../../components/ui/buttons/RegulerButton";
import errHandler from "../../utils/errHandler";
import { notifyError } from "../../utils/notifies";

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleSignInHandler = async (data) => {
    try {
      setIsLoading(true);
      await api.post("/seller/forget-password", data);
      navigate("/auth/signin");
      setIsLoading(false);
    } catch (error) {
      error = errHandler(error);
      setIsLoading(false);
      notifyError(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignInHandler)}
      className="w-full md:w-[435px] p-5 space-y-4 rounded-xl shadow-md bg-white text-gray-700"
    >
      <div className="head">
        <h2 className="text-2xl font-bold text-gray-800">نسيت كلمة المرور</h2>
        <p className="my-5">
          الرجاء إدخال عنوان البريد الإلكتروني الذي تريد إرسال معلومات إعادة
          تعيين كلمة المرور إليه
        </p>
      </div>
      <RegulerInput
        label={"ادخل عنوان البريد الالكتروني"}
        inputName={"email"}
        type={"text"}
        errors={errors}
        register={{
          ...register("email", {
            required: "يجب عليك ادخال بريدك الالكتروني",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "البريد الالكتروني الذي ادخلته غير صالح",
            },
          }),
        }}
      />

      <RegulerButton
        props={{
          fullWidth: true,
          color: "purple",
          type: "submit",
          disabled: isLoading,
        }}
        label={"طلب إعادة تعيين كلمة المرور"}
      />
      <Link className="block mt-2 mx-auto text-center" to={"/auth/signin"}>
        العودة لتسجيل الدخول
      </Link>
    </form>
  );
}
