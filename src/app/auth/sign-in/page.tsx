"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import MuiTextField from "@/components/ui/textField";
import { Checkbox } from "@/components/ui/checkbox";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [iserror, setisError] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async () => {
    setisLoading(true);
    const signInResponse = await signIn("credentials", {
      email: email,
      password: password,
    });

    console.log(signInResponse);
  };
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="w-full bg-[#171B36]">1</div>
      <div className="w-full h-screen">
        <div className="flex flex-col gap-4 justify-center items-center h-full">
          <div>{isLoading && <h1>Loading</h1>}</div>

          <div className="w-full p-12 flex flex-col gap-4">
            <div className="">
              <h1>Book Rent</h1>
              <h1>LogIn As</h1>
            </div>
            <MuiTextField
              title="Email"
              type="text"
              value={email}
              onChanges={handleEmailInputChange}
            />
            <MuiTextField
              title="Password"
              type="password"
              value={password}
              onChanges={handlePasswordInputChange}
            />
            <div className="flex items-center space-x-2 ">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember Me
              </label>
            </div>
            <Button onClick={handleSignIn} className="bg-blue-500 w-full">
              SignIn
            </Button>

            <h1 className=" self-center">
              Sont Have An Account{" "}
              <span>
                <Link href={`/auth/sign-up`} className="text-blue-500">
                  Sign-Up
                </Link>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
