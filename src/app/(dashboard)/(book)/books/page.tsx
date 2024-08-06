import React from "react";
import { BookTable } from "./table";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const Books = () => {
  return (
    <div className="flex w-full flex-row h-[80vh]">
      <ScrollArea className="w-[90%] h-[90%]">
        <BookTable />
      </ScrollArea>
    </div>
  );
};

export default Books;
