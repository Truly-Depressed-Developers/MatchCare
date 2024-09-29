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
import { NGOContactData, NGOSubTypes } from "../StepForm.types";
import React from "react";
import { Button } from "../../ui/button";

const StepSchema = z.object({
  name: z.string().min(1, "NGO name is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  website: z.string().optional(),
  location: z.string().min(1, "Location is required"),
});

const StepOne = (props: {
  handleNext: (data: NGOSubTypes) => void;
  formData: NGOContactData;
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
    const data: NGOContactData = form.getValues();
    props.handleNext(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className="grid grid-cols-3 grid-rows-2 gap-7">
          <FormItem className="flex flex-col">
            <FormLabel htmlFor="name" className="mb-2 text-lg font-semibold">
              Company’s name*
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="text"
                  id="name"
                  className="h-full w-full rounded-full px-4"
                  {...register("name")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.name?.message?.toString()}</FormMessage>
          </FormItem>

          <FormItem className="flex flex-col">
            <FormLabel htmlFor="email" className="mb-2 text-lg font-semibold">
              Email*
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="email"
                  id="email"
                  className="h-full w-full rounded-full px-4"
                  {...register("email")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.email?.message?.toString()}</FormMessage>
          </FormItem>

          <FormItem className="flex flex-col">
            <FormLabel htmlFor="phone" className="mb-2 text-lg font-semibold">
              Phone*
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="tel"
                  id="phone"
                  className="h-full w-full rounded-full px-4"
                  {...register("phone")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.phone?.message?.toString()}</FormMessage>
          </FormItem>

          <FormItem className="flex flex-col">
            <FormLabel htmlFor="website" className="mb-2 text-lg font-semibold">
              Website
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="text"
                  id="website"
                  className="h-full w-full rounded-full px-4"
                  {...register("website")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.website?.message?.toString()}</FormMessage>
          </FormItem>

          <FormItem className="flex flex-col">
            <FormLabel
              htmlFor="location"
              className="mb-2 text-lg font-semibold"
            >
              Location*
            </FormLabel>
            <FormControl>
              <Card className="h-16 w-full rounded-full">
                <input
                  type="text"
                  id="location"
                  className="h-full w-full rounded-full px-4"
                  {...register("location")}
                />
              </Card>
            </FormControl>
            <FormMessage>{errors.location?.message?.toString()}</FormMessage>
          </FormItem>
        </div>
        <div className="absolute -bottom-44 flex w-full flex-row-reverse items-center justify-between">
          <Button
            type="submit"
            className="my-10 -mr-12 h-14 w-48 rounded-full px-10 py-5 text-lg font-bold"
          >
            Next step
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default StepOne;
