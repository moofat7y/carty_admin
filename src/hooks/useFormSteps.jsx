import { useState } from "react";

export default function useFormSteps(steps, startIndex) {
  const [currentStep, setCurrentStep] = useState(startIndex ? startIndex : 0);

  function next() {
    setCurrentStep((prev) => {
      if (prev >= steps.length - 1) return prev;
      return prev + 1;
    });
  }

  function back() {
    setCurrentStep((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }

  function goTo(index) {
    setCurrentStep(index);
  }

  return {
    currentStep,
    step: steps[currentStep],
    goTo,
    next,
    back,
    steps,
  };
}
