import { ScrollArea } from "@radix-ui/react-scroll-area";
import React from "react";
import { BookTable } from "../books/table";
import { OwnerTable } from "./table";

const Owners = () => {
  return (
    <div className="flex w-full flex-row h-[80vh]">
      <ScrollArea className="w-[90%] h-[90%]">
        <OwnerTable />
      </ScrollArea>
    </div>
  );
};

export default Owners;
