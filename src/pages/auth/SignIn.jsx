import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegulerButton } from "../../components/ui/buttons/RegulerButton";
import FormInput from "../../components/ui/inputs/FormInput";
import { signIn } from "../../redux/auth/authSlice";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const { status } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(signIn({ data, navigate }));
  };

  return (
    <div className="signin min-w-[320px] md:min-w-[350px] w-[60%]">
      <Card color="transparent" shadow={false}>
        <Typography
          variant="h4"
          color="gray"
          className="text-center md:text-right"
        >
          تسجيل الدخول
        </Typography>
        <Typography
          color="gray"
          className="mt-1 font-normal text-center md:text-right"
        >
          قم بادخال بياناتك لتسجيل الدخول
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 max-w-full space-y-5"
        >
          <FormInput
            label={"البريد الالكتروني"}
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
          <FormInput
            label={"كلمة المرور"}
            inputName={"password"}
            type={"password"}
            errors={errors}
            register={{
              ...register("password", {
                required: "يجب عليك ادخال كلمة المرور",
              }),
            }}
          />

          <RegulerButton
            props={{
              fullWidth: true,
              color: "purple",
              type: "submit",
              disabled: status === "loading" && true,
            }}
            label={"تسجيل"}
          />

          <Link
            to="/reset/forgot-password"
            className="font-medium block text-center transition-colors hover:text-primary-700"
          >
            نسيت كلمة المرور ؟
          </Link>

          <Typography color="gray" className=" text-center font-normal">
            ليس لديك حساب؟{" "}
            <Link
              to="/auth/signup"
              className="font-medium text-primary-500 transition-colors hover:text-primary-700"
            >
              انشاء حساب
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
