"use client";

import { useEffect, useState } from "react";
import {
  NGOAreaData,
  NGOContactData,
  NGODescriptionData,
  NGOFormData,
  NGORecipientData,
  NGORegAddressData,
  NGORegistrationData,
  NGOSubTypes,
} from "./StepForm.types";
import { Card } from "../ui/card";
import StepFormStatusBar from "./StepForm-status-bar";
import { Separator } from "../ui/separator";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFourth from "./Steps/StepFour";
import StepFifth from "./Steps/StepFive";
import StepSixth from "./Steps/StepSix";
import StepSeven from "./Steps/StepSeven";

const stepTitles: {
  [key: number]: { title: string; description?: JSX.Element };
} = {
  0: { title: "Contact details" },
  1: { title: "Registered Address" },
  2: {
    title: "Office address",
    description: <span className="font-normal text-gray-600">(optional)</span>,
  },
  3: { title: "Registration details" },
  4: {
    title: "Area of activity",
    description: (
      <span className="font-normal text-gray-600">
        (multiple selection answer)
      </span>
    ),
  },
  5: {
    title: "Recipients of the action",
    description: (
      <span className="font-normal text-gray-600">
        (multiple selection answer)
      </span>
    ),
  },
  6: {
    title: "Additional description",
    description: <span className="font-normal text-gray-600">(optional)</span>,
  },
};

const StepForm = () => {
  const [step, setStep] = useState(0);
  const [maxSteps, setMaxSteps] = useState(7);
  const [formData, setFormData] = useState<NGOFormData>({
    contact: { name: "", location: "", email: "", phone: "", website: "" },
    regAddress: {
      street: "",
      postalCode: "",
      city: "",
      province: "",
      county: "",
    },
    officeAddress: {
      street: "",
      postalCode: "",
      city: "",
      province: "",
      county: "",
    },
    registrationData: { krs: "", regon: "", nip: "", year: "", legalForm: "" },
    areas: [],
    recipients: [],
    description: "",
  });

  useEffect(() => {
    setMaxSteps(Object.keys(stepTitles).length);
  }, []);

  const handleStepOne = (data: NGOContactData) => {
    setFormData((prev) => ({ ...prev, contact: data }));
  };

  const handleStepTwo = (data: NGORegAddressData) => {
    setFormData((prev) => ({ ...prev, regAddress: data }));
  };

  const handleStepThree = (data: NGORegAddressData) => {
    setFormData((prev) => ({ ...prev, officeAddress: data }));
  };

  const handleStepFour = (data: NGORegistrationData) => {
    setFormData((prev) => ({ ...prev, registrationData: data }));
  };

  const handleStepFive = (data: NGOAreaData) => {
    setFormData((prev) => ({ ...prev, areas: data }));
  };

  const handleStepSix = (data: NGORecipientData) => {
    setFormData((prev) => ({ ...prev, recipients: data }));
  };

  const handleStepSeven = (data: NGODescriptionData) => {
    setFormData((prev) => ({ ...prev, description: data }));
  };

  const handlePrev = () => setStep((prev) => prev - 1);
  const handleNext = (data: NGOSubTypes) => {
    if (step === 0) handleStepOne(data as NGOContactData);
    else if (step === 1) handleStepTwo(data as NGORegAddressData);
    else if (step === 2) handleStepThree(data as NGORegAddressData);
    else if (step === 3) handleStepFour(data as NGORegistrationData);
    else if (step === 4) handleStepFive(data as NGOAreaData);
    else if (step === 5) handleStepSix(data as NGORecipientData);
    else if (step === 6) handleStepSeven(data as NGODescriptionData);

    if (step === maxSteps - 1) onSubmitFullForm();
    else setStep((prev) => prev + 1);
  };

  const onSubmitFullForm = () => {
    console.log(formData);
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  const getTitle = (
    step: number,
  ): { title: string; description?: JSX.Element } => {
    return stepTitles[step];
  };

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="mb-10 space-y-4">
        <h1 className="text-center text-4xl font-bold">
          Join our amazing community!
        </h1>
        <p className="text-center text-lg">
          Please fill the form below in order to join us and find the best
          <br />
          partner for you.
        </p>
      </div>
      <Card className="mb-28 flex flex-col justify-between px-12 py-9">
        <StepFormStatusBar step={step} maxSteps={7} />
        <Separator className="mb-12 mt-7" />
        <h1 className="mb-16 text-2xl font-bold">
          {getTitle(step).title}{" "}
          {getTitle(step).description && getTitle(step).description}
        </h1>
        <div>
          {step === 0 && (
            <StepOne handleNext={handleNext} formData={formData.contact} />
          )}
          {step === 1 && (
            <StepTwo
              handleNext={handleNext}
              handlePrev={handlePrev}
              formData={formData.regAddress}
            />
          )}
          {step === 2 && (
            <StepThree
              handleNext={handleNext}
              handlePrev={handlePrev}
              formData={formData.officeAddress}
            />
          )}
          {step === 3 && (
            <StepFourth
              handleNext={handleNext}
              handlePrev={handlePrev}
              formData={formData.registrationData}
            />
          )}
          {step === 4 && (
            <StepFifth
              handleNext={handleNext}
              handlePrev={handlePrev}
              formData={formData.areas as string[]}
            />
          )}
          {step === 5 && (
            <StepSixth
              handleNext={handleNext}
              handlePrev={handlePrev}
              formData={formData.recipients as string[]}
            />
          )}
          {step === 6 && (
            <StepSeven
              handleNext={handleNext}
              handlePrev={handlePrev}
              formData={formData.description}
            />
          )}
        </div>
      </Card>
    </div>
  );
};

export default StepForm;
