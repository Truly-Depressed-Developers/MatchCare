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
import { NGORegAddressData, NGOSubTypes } from "../StepForm.types";
import React from "react";
import { Button } from "../../ui/button";

const StepSchema = z.object({
  street: z.string().min(1, "Street is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  city: z.string().min(1, "City is required"),
  province: z.string().min(1, "Province is required"),
  county: z.string().min(1, "County is required"),
});

const StepTwo = (props: {
  handleNext: (data: NGOSubTypes) => void;
  handlePrev: () => void;
  formData: NGORegAddressData;
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
    const data: NGORegAddressData = form.getValues();
    props.handleNext(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className="grid grid-cols-3 grid-rows-2 gap-7">
          <FormItem className="flex flex-col">
            <FormLabel htmlFor="street" className="mb-2 text-lg font-semibold">
              Street
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="text"
                  id="street"
                  className="h-full w-full rounded-full px-4"
                  {...register("street")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.street?.message?.toString()}</FormMessage>
          </FormItem>

          <FormItem className="flex flex-col">
            <FormLabel
              htmlFor="postalCode"
              className="mb-2 text-lg font-semibold"
            >
              Postal code
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="text"
                  id="postalCode"
                  className="h-full w-full rounded-full px-4"
                  {...register("postalCode")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.postalCode?.message?.toString()}</FormMessage>
          </FormItem>

          <FormItem className="flex flex-col">
            <FormLabel htmlFor="city" className="mb-2 text-lg font-semibold">
              City/Town
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="text"
                  id="city"
                  className="h-full w-full rounded-full px-4"
                  {...register("city")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.city?.message?.toString()}</FormMessage>
          </FormItem>

          <FormItem className="flex flex-col">
            <FormLabel
              htmlFor="province"
              className="mb-2 text-lg font-semibold"
            >
              Province
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="text"
                  id="province"
                  className="h-full w-full rounded-full px-4"
                  {...register("province")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.province?.message?.toString()}</FormMessage>
          </FormItem>

          <FormItem className="flex flex-col">
            <FormLabel htmlFor="county" className="mb-2 text-lg font-semibold">
              County
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="text"
                  id="county"
                  className="h-full w-full rounded-full px-4"
                  {...register("county")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.county?.message?.toString()}</FormMessage>
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

export default StepTwo;
