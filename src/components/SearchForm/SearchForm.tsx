"use client";

import React from "react";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { type Area, type Event, type Support } from "./SearForm.types";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  location: z
    .string()
    .min(2, { message: "Location must be at least 2 characters long" })
    .refine((val) => (val.match(/,/g) || []).length >= 2, {
      message: "Please provide city, region, and country separated by commas",
    }),
  additionalInfo: z.string(),
});

const SearchForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      additionalInfo: "",
    },
  });

  const [area, setArea] = React.useState<Area>("environmental");
  const [event, setEvent] = React.useState<Event>("one-time");
  const [support, setSupport] = React.useState<Support>("financial");

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("area", area);
    console.log("event", event);
    console.log("value of location", values.location);
    console.log("support", support);
    console.log("additionalInfo", values.additionalInfo);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="rounded-3xl">
          <CardContent className="space-y-16 p-12">
            <div>
              <h1 className="mb-3 text-lg text-[#6F6C90]">
                1. Which area of impact are you most interested in collaborating
                on?
              </h1>
              <div className="grid grid-cols-2 grid-rows-2 gap-7">
                <Card
                  className={cn("flex items-center", {
                    "border-primary": area === "environmental",
                  })}
                  onClick={() => setArea("environmental")}
                >
                  <CardContent className="flex w-full items-center px-[1.625rem] py-6 font-medium">
                    <CirclePlaceholder />
                    Environmental
                  </CardContent>
                </Card>
                <Card
                  className={cn("flex items-center", {
                    "border-primary": area === "social",
                  })}
                  onClick={() => setArea("social")}
                >
                  <CardContent className="flex w-full items-center px-[1.625rem] py-6 font-medium">
                    <CirclePlaceholder />
                    Social
                  </CardContent>
                </Card>
                <Card
                  className={cn("flex items-center", {
                    "border-primary": area === "governance",
                  })}
                  onClick={() => setArea("governance")}
                >
                  <CardContent className="flex w-full items-center px-[1.625rem] py-6 font-medium">
                    <CirclePlaceholder />
                    Governance
                  </CardContent>
                </Card>
                <Card
                  className={cn("flex items-center", {
                    "border-primary": area === "other",
                  })}
                  onClick={() => setArea("other")}
                >
                  <CardContent className="flex w-full items-center px-[1.625rem] py-6 font-medium">
                    <CirclePlaceholder />
                    Other
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <h1 className="mb-3 text-lg text-[#6F6C90]">
                2. What type of collaboration are you seeking?
              </h1>
              <div className="grid grid-cols-2 gap-7">
                <Card
                  className={cn("flex items-center", {
                    "border-primary": event === "one-time",
                  })}
                  onClick={() => setEvent("one-time")}
                >
                  <CardContent className="flex w-full items-center px-[1.625rem] py-8 font-medium">
                    One-time event
                  </CardContent>
                </Card>
                <Card
                  className={cn("flex items-center", {
                    "border-primary": event === "long-term",
                  })}
                  onClick={() => setEvent("long-term")}
                >
                  <CardContent className="flex w-full items-center px-[1.625rem] py-8 font-medium">
                    Long-term
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <h1 className="mb-3 text-lg text-[#6F6C90]">
                3. What is the preferred location for the collaboration? Please
                specify the city, region, or country.
              </h1>
              <div>
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Card className="flex items-center rounded-2xl">
                          <CardContent className="flex w-full items-center p-0 font-medium">
                            <Input
                              placeholder="Cracow, Małopolskie, Poland"
                              {...field}
                              className="w-full rounded-2xl border-none px-[1.375rem] py-8 text-lg shadow-none"
                            />
                          </CardContent>
                        </Card>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div>
              <h1 className="mb-3 text-lg text-[#6F6C90]">
                4. What type of support are you able to offer?
              </h1>
              <div className="grid grid-cols-2 grid-rows-2 gap-7">
                <Card
                  className={cn("flex items-center", {
                    "border-primary": support === "financial",
                  })}
                  onClick={() => setSupport("financial")}
                >
                  <CardContent className="flex w-full items-center px-[1.625rem] py-8 font-medium">
                    Financial support
                  </CardContent>
                </Card>
                <Card
                  className={cn("flex items-center", {
                    "border-primary": support === "material",
                  })}
                  onClick={() => setSupport("material")}
                >
                  <CardContent className="flex w-full flex-col justify-center px-[1.625rem] py-8 font-medium">
                    Material support
                    <p className="text-sm font-light">
                      (e.g., equipment, space)
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className={cn("flex items-center", {
                    "border-primary": support === "expertise",
                  })}
                  onClick={() => setSupport("expertise")}
                >
                  <CardContent className="flex w-full items-center px-[1.625rem] py-8 font-medium">
                    Expertise or mentorship
                  </CardContent>
                </Card>
                <Card
                  className={cn("flex items-center", {
                    "border-primary": support === "other",
                  })}
                  onClick={() => setSupport("other")}
                >
                  <CardContent className="flex w-full items-center px-[1.625rem] py-8 font-medium">
                    Other
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <h1 className="mb-3 text-lg text-[#6F6C90]">
                5. Is there any additional information you&apos;d like to
                provide?
              </h1>
              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Card className="flex items-center">
                        <CardContent className="flex w-full items-center p-0 font-medium">
                          <Textarea
                            placeholder="Let us know :))"
                            {...field}
                            className="min-h-32 w-full rounded-xl border-none p-5 px-[1.375rem] text-lg shadow-none"
                          />
                        </CardContent>
                      </Card>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center">
          <Button
            type="submit"
            className="my-10 rounded-3xl px-10 py-5 font-bold"
            onClick={() =>
              form.formState.isValid ? router.push("/search/results") : null
            }
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SearchForm;

const CirclePlaceholder = () => {
  return (
    <div className="mx-4 flex h-16 w-16 items-center rounded-full bg-[#4A3AFF]"></div>
  );
};
