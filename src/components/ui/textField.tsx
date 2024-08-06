"use client";
import React, { useEffect, useRef, useState } from "react";
import { MDCTextField } from "@material/textfield";
import { Input } from "@/components/ui/input";
import "@material/textfield/dist/mdc.textfield.css";

const MuiTextField = ({
  title,
  type,
  value,
  onChanges,
}: {
  title: string;
  type: string;
  value: string;
  onChanges: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const textFieldRef = useRef(null);

  useEffect(() => {
    if (textFieldRef.current) {
      new MDCTextField(textFieldRef.current);
    }
  }, []);

  return (
    <div className="w-full  mx-auto">
      <div
        className="mdc-text-field mdc-text-field--outlined relative pt-6 w-full"
        ref={textFieldRef}
      >
        <input
          value={value}
          onChange={onChanges}
          type={type}
          id={title}
          className="mdc-text-field__input block w-full px-3 py-2 border placeholder-transparent focus:outline-none sm:text-sm "
        />
        <label
          className="mdc-floating-label text-gray-500 ml-2"
          htmlFor="my-text-field"
        >
          {title}
        </label>
        <div className="mdc-notched-outline ">
          <div className="mdc-notched-outline__leading "></div>
          <div className="mdc-notched-outline__notch border-none  outline-none  ">
            <label
              className="mdc-floating-label "
              htmlFor="my-text-field"
            ></label>
          </div>
          <div className="mdc-notched-outline__trailing  "></div>
        </div>
      </div>
    </div>
  );
};

export default MuiTextField;
