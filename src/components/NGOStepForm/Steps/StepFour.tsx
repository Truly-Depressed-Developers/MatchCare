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
import { NGORegistrationData, NGOSubTypes } from "../StepForm";
import React from "react";
import { Button } from "../../ui/button";

const StepSchema = z.object({
  krs: z.string().min(1, "KRS is required"),
  regon: z.string().min(1, "REGON is required"),
  nip: z.string().min(1, "NIP is required"),
  year: z.string().min(4, "Year is required"),
  legalForm: z.string().min(1, "Legal form is required"),
});

const StepFour = (props: {
  handleNext: (data: NGOSubTypes) => void;
  handlePrev: () => void;
  formData: NGORegistrationData;
}) => {
  const form = useForm<z.infer<typeof StepSchema>>({
    resolver: zodResolver(StepSchema),
    defaultValues: props.formData,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = () => {
    const data: NGORegistrationData = form.getValues();
    props.handleNext(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className="grid grid-cols-3 grid-rows-2 gap-7">
          <FormItem className="flex flex-col">
            <FormLabel htmlFor="krs" className="mb-2 text-lg font-semibold">
              National Court Register (KRS)
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="number"
                  id="krs"
                  className="h-full w-full rounded-full px-4"
                  {...register("krs")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.krs?.message?.toString()}</FormMessage>
          </FormItem>

          <FormItem className="flex flex-col">
            <FormLabel htmlFor="regon" className="mb-2 text-lg font-semibold">
              Statistical Number (REGON)
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="number"
                  id="regon"
                  className="h-full w-full rounded-full px-4"
                  {...register("regon")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.regon?.message?.toString()}</FormMessage>
          </FormItem>

          <FormItem className="flex flex-col">
            <FormLabel htmlFor="nip" className="mb-2 text-lg font-semibold">
              Tax Identification Number (NIP)
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="number"
                  id="nip"
                  className="h-full w-full rounded-full px-4"
                  {...register("nip")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.nip?.message?.toString()}</FormMessage>
          </FormItem>

          <FormItem className="flex flex-col">
            <FormLabel htmlFor="year" className="mb-2 text-lg font-semibold">
              Year of establishment
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="number"
                  id="year"
                  className="h-full w-full rounded-full px-4"
                  {...register("year")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.year?.message?.toString()}</FormMessage>
          </FormItem>

          <FormItem className="flex flex-col">
            <FormLabel
              htmlFor="legalForm"
              className="mb-2 text-lg font-semibold"
            >
              Legal form
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="text"
                  id="legalForm"
                  className="h-full w-full rounded-full px-4"
                  {...register("legalForm")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.legalForm?.message?.toString()}</FormMessage>
          </FormItem>
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
    </Form>
  );
};

export default StepFour;
