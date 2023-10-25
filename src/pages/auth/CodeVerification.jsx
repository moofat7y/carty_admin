import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyEmail } from "../../redux/user/userSlice";
import api from "../../utils/api";
import { notifyError, notifySuccess } from "../../utils/notifies";

import errHandler from "../../utils/errHandler";
import RegulerInput from "../../components/ui/inputs/RegulerInput";
import { RegulerButton } from "../../components/ui/buttons/RegulerButton";

export default function CodeVerification() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailVerify = async (code) => {
    dispatch(verifyEmail({ code, navigate }));
  };

  const handleResentCode = async () => {
    try {
      setIsLoading(true);
      await api.post("/seller/resend/verification/email");
      notifySuccess("لقد تم اعادة ارسال الكود");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      errHandler(error);
      notifyError(error);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/auth/signin");
    }
  }, [user]);

  return (
    <div className="code-verification bg-gray-50">
      <div className="container h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit(handleEmailVerify)}
          className="w-full md:w-[435px] p-5 space-y-4 rounded-xl shadow-md bg-white text-gray-700"
        >
          <div className="head">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              تحقق من حسابك
            </h2>
            <p className="my-5 text-center">
              لقد أرسلنا لك رمز التحقق المكون من ستة أرقام عبر البريد الالكتروني
              أدخل الرمز أدناه لتأكيد عنوان بريدك الإلكتروني
            </p>
          </div>
          <RegulerInput
            label={"ادخل رمز التحقق"}
            inputName={"code"}
            type={"number"}
            errors={errors}
            register={{
              ...register("code", {
                required: "يجب عليك ادخال رمز التحقق",
              }),
            }}
          />

          <RegulerButton
            props={{ fullWidth: true, color: "purple", type: "submit" }}
            label={"تاكيد"}
          />

          <div className="flex flex-col gap-2 pt-5">
            <span className="text-center w-full my-0 py-0 block text-sm">
              لم تتلق رمز التحقق ؟
            </span>
            <button
              onClick={() => handleResentCode()}
              disabled={isLoading}
              className="block w-fit my-0 py-0 mx-auto text-primary-500 text-sm"
            >
              أرسل الرمز مرة اخرى
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
