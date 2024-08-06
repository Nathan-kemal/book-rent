"use client";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ChevronsUpDown, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Input } from "@/components/ui/input";
import MuiTextField from "./textField";
const AddQuestionary = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const data = ["quest 1", "quest 2"];

  const Question = () => {
    return (
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        <div className="flex items-center space-x-2 ">
          <Checkbox id="terms" className=" " />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Question 1
          </label>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Card className="w-[300px]  h-28">
        <CardHeader>
          <CardTitle className=" text-xs text-gray-500">
            Create project
          </CardTitle>
        </CardHeader>
        <CardContent className=" p-0 m-0 bg-white z-20">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[300px] space-y-2 "
          >
            <div className="flex items-center justify-between space-x-4 px-4">
              <Input />
              <Button>Add</Button>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            {/* <Question /> */}
            <CollapsibleContent className="space-y-2">
              <Question />
              <Question />
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
        <Input className="w-[300px] mt-4" placeholder="Rent Price for 2 Week" />
      </Card>
    </div>
  );
};

export default AddQuestionary;
