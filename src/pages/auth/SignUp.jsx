import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../components/ui/inputs/FormInput";
import { RegulerButton } from "../../components/ui/buttons/RegulerButton";
import { signUp } from "../../redux/auth/authSlice";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(signUp({ data, navigate }));
  };

  return (
    <div className="signup min-w-[320px] md:min-w-[350px] w-[60%]">
      <Card color="transparent" shadow={false}>
        <Typography
          variant="h4"
          color="gray"
          className="text-center md:text-right"
        >
          إنشاء حساب
        </Typography>
        <Typography
          color="gray"
          className="mt-1 font-normal text-center md:text-right"
        >
          قم بإدخال بياناتك لإنشاء حساب
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 max-w-full space-y-5"
        >
          <FormInput
            label={"اسم التاجر"}
            inputName={"name"}
            type={"text"}
            errors={errors}
            register={{
              ...register("name", { required: "يجب عليك ادخال اسمك" }),
            }}
          />
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
            label={"رقم الجوال"}
            inputName={"phone"}
            type={"tel"}
            errors={errors}
            register={register("phone", {
              required: "يجب عليك ادخال رقم الجوال الخاص بك",
            })}
          />
          <FormInput
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

          <FormInput
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
              disabled: status === "loading" && true,
            }}
            label={"تسجيل"}
          />

          <Typography color="gray" className="mt-4 text-center font-normal">
            هل لديك حساب بالفعل؟{" "}
            <Link
              to="/auth/signin"
              className="font-medium text-primary-500 transition-colors hover:text-primary-700"
            >
              تسجيل الدخول
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
