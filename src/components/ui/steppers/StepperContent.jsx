import React from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";

export function StepperContent({ currentStep, steps }) {
  const stepList = steps.map((item, index) => {
    return (
      <Step
        activeClassName="!bg-primary-200"
        completedClassName="!bg-primary-500"
        className="w-11 h-11"
        key={index}
      >
        {item.icon}
      </Step>
    );
  });

  return (
    <div className="w-full px-4 py-8">
      <Stepper
        // isFirstStep={currentStep === 0 ? true : false}
        activeLineClassName="bg-primary-400 !right-0"
        activeStep={currentStep}
      >
        {stepList}
      </Stepper>
    </div>
  );
}
