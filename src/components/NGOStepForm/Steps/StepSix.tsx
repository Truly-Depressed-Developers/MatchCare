import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Card } from "../../ui/card";
import {
  NGOAreaData,
  NGORecipientData,
  NGORegistrationData,
  NGOSubTypes,
} from "../StepForm";
import React, { use, useEffect } from "react";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";

const options = [
  "Children and Youth",
  "Elderly",
  "People with Disabilities",
  "Low-income Families",
  "Minority Groups",
  "Homeless Individuals",
];

const StepSix = (props: {
  handleNext: (data: NGOSubTypes) => void;
  handlePrev: () => void;
  formData: NGORecipientData;
}) => {
  const [areas, setAreas] = React.useState<string[]>([]);

  const areasErrorMsg = "At least one recipient must be selected";
  const [disaplError, setDisaplError] = React.useState(false);

  useEffect(() => {
    setAreas(props.formData);
  }, [props.formData]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (areas.length === 0) {
      setDisaplError(true);
      return;
    } else {
      props.handleNext(areas);
    }
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <div>
        {options.map((option, index) => (
          <div key={index} className="my-1">
            <Checkbox
              className="mr-2"
              id={option}
              value={option}
              checked={areas.includes(option)}
              onCheckedChange={(checked: boolean) => {
                const value = option;
                if (checked) {
                  setDisaplError(false);
                  setAreas([...areas, value]);
                } else {
                  setAreas(
                    areas.length > 1
                      ? areas.filter((area) => area !== value)
                      : [],
                  );
                }
              }}
            />
            <label htmlFor={option} className="cursor-pointer">
              {option}
            </label>
          </div>
        ))}
        {disaplError && (
          <p className="my-2 text-sm text-red-600">{areasErrorMsg}</p>
        )}
      </div>
      <div className="absolute -bottom-44 flex w-full flex-row-reverse items-center justify-between">
        <Button
          type="submit"
          className="my-10 -mr-12 h-14 w-48 rounded-full px-10 py-5 text-lg font-bold"
        >
          Next step
        </Button>
        <Button
          variant="outline"
          onClick={props.handlePrev}
          className="my-10 -ml-12 h-16 w-48 rounded-full border-primary px-10 py-5 text-lg font-bold text-primary hover:text-primary"
        >
          Previous step
        </Button>
      </div>
    </form>
  );
};

export default StepSix;
