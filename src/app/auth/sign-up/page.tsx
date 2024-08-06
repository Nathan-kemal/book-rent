"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import signUpUser from "@/app/actions/signUpAction";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { useRouter } from "next/navigation";
const formSchema = z
  .object({
    firstname: z.string().min(1, {
      message: "At Least 1 Characters",
    }),

    lastname: z.string().min(1, {
      message: "At Least 1 Characters",
    }),

    email: z
      .string()
      .email({
        message: "Enter Valid Email",
      })
      .min(1),

    password: z
      .string()
      .min(6, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
    location: z.string().min(1, {
      message: "Location must contain at least 1 character",
    }),
    phoneNumber: z
      .string()
      .min(10, { message: "Phone Number must contain at least 10 character" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Set the path of the error to the confirmPassword field
  });

const SignUp = () => {
  const router = useRouter();
  const handleSignUp = () => {};
  const [errorMessage, setErrorMessage] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      location: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { confirmPassword, ...userData } = values;
    const user = await signUpUser(userData);

    console.log(user);
    if (user?.status == 200) {
      router.push("/");
    } else if (user?.status == 400) {
      setErrorMessage(user.message);
    }
  }

  return (
    <div className="flex flex-row w-full h-screen">
      <div className="w-full bg-[#171B36]">1</div>
      <div className="w-full ">
        <div className="flex flex-col gap-4 justify-center items-center h-full">
          <div className="w-3/4  flex flex-col gap-6">
            <h1 className="text-red-600">{errorMessage}</h1>
            <div className="">
              <h1>Book Rent</h1>
              <h1>Signup into Book Rent</h1>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className=" w-full flex gap-4 justify-between">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            className=""
                            placeholder="First Name"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl className="">
                        <Input placeholder="Email" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirm Password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-4 justify-between w-full">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            className="w-full"
                            placeholder="Location"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input placeholder="Phone Number" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="bg-blue-500 w-full">
                  SignIn
                </Button>
              </form>
            </Form>
            <div className="flex items-center space-x-2 ">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I Accept The Term and Condition
              </label>
            </div>
            <div className=" self-center">
              <span>
                Already Have Account{" "}
                <Link className="text-blue-500" href="/">
                  {" "}
                  Sign-In
                </Link>{" "}
              </span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
