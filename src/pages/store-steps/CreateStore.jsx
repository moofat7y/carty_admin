import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StoreInfo from "../../components/create-store/StoreInfo";

import { IoCreateOutline } from "react-icons/io5";
import { BiLogoMastercard } from "react-icons/bi";
import { useForm } from "react-hook-form";
import useFormSteps from "../../hooks/useFormSteps";
import { RegulerButton } from "../../components/ui/buttons/RegulerButton";
import { StepperContent } from "../../components/ui/steppers/StepperContent";
import Payment from "../../components/create-store/Payment";
import { createStore } from "../../redux/user/userSlice";

export default function CreateStore() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { next, back, currentStep, steps, step } = useFormSteps([
    {
      title: "اختر الباقه",
      status: 0,
      component: <Payment />,
      icon: <BiLogoMastercard className="text-xl" />,
    },
    {
      title: "معلومات المتجر",
      status: 0,
      component: (
        <StoreInfo register={register} errors={errors} watch={watch} />
      ),
      icon: <IoCreateOutline className="text-xl" />,
    },
  ]);

  const onSubmit = (data) => {
    dispatch(createStore({ data, navigate }));
  };
  return (
    <section className="min-h-screen py-5 flex items-center">
      <div className="container flex flex-col items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[40%] min-w-[320px]"
        >
          <StepperContent currentStep={currentStep} steps={steps} />
          <div className="py-8">{step.component}</div>
          <div className="w-full mt-10 flex justify-between items-center">
            {currentStep > 0 && steps.length > 1 ? (
              <RegulerButton
                props={{ type: "button", color: "gray", onClick: () => back() }}
                label={"السابق"}
              />
            ) : null}

            {/* {currentStep + 1 === steps.length ? ( */}
            <RegulerButton
              props={{
                type: "submit",
                color: "purple",
                onClick: handleSubmit(onSubmit),
                className: `${
                  currentStep + 1 === steps.length ? "" : "!hidden"
                }`,
              }}
              label={"تاكيد"}
            />
            {/* ) : ( */}
            <RegulerButton
              props={{
                type: "button",
                color: "purple",
                onClick: () => next(),
                // disabled: !isValid,
                className: `${
                  currentStep + 1 === steps.length ? "!hidden" : ""
                }`,
              }}
              label={"التالي"}
            />
            {/* )} */}
          </div>
        </form>
      </div>
    </section>
  );
}
