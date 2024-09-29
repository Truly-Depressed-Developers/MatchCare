import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Card } from "../../ui/card";
import { NGODescriptionData, NGOSubTypes } from "../StepForm";
import React from "react";
import { Button } from "../../ui/button";

const StepSchema = z.object({
  description: z.string().min(1, "KRS is required"),
});

const StepSeven = (props: {
  handleNext: (data: NGOSubTypes) => void;
  handlePrev: () => void;
  formData: NGODescriptionData;
}) => {
  const form = useForm<z.infer<typeof StepSchema>>({
    resolver: zodResolver(StepSchema),
    defaultValues: { description: props.formData },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = () => {
    const data: NGODescriptionData = form.getValues().description;
    props.handleNext(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <FormItem className="flex flex-col">
          <FormLabel
            htmlFor="krs"
            className="mb-2 text-lg font-medium text-gray-400"
          >
            Is there any additional information you&apos;d like to provide?
          </FormLabel>
          <FormControl>
            <Card className="h-fit min-h-16 w-full rounded-3xl">
              <textarea
                id="description"
                className="h-full w-full rounded-3xl p-4"
                {...register("description")}
              />
            </Card>
          </FormControl>
          <FormMessage>{errors.description?.message?.toString()}</FormMessage>
        </FormItem>
        <div className="absolute -bottom-44 flex w-full flex-row-reverse items-center justify-between">
          <Button
            type="submit"
            className="my-10 -mr-12 h-14 w-48 rounded-full px-10 py-5 text-lg font-bold"
          >
            Submit
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
    </Form>
  );
};

export default StepSeven;
