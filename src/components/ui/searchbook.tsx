"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AddBookDialog } from "./modal";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "@/app/actions/db";
import { useSession } from "next-auth/react";
import { Book } from "@prisma/client";

// const frameworks = [
//   // {
//   //   value: "abel",
//   //   label: "abel",
//   // },
//   // {
//   //   value: "abebe",
//   //   label: "abebe",
//   // },
//   // {
//   //   value: "tana",
//   //   label: "tana",
//   // },
// ];

export function SelectBook() {
  const session = useSession();

  const fetchgetBooks = async () => {
    const userid = await session.data.user?.id;
    const response = await getBooks("66b1e5b263af0579f83266f1");
    const books = await response?.books;

    return books || [];
  };

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const { data } = useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: fetchgetBooks,
  });

  return (
    <div>
      <div className="w-[300px] flex flex-col items-center bg-white">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[300px] justify-between"
            >
              {data && value
                ? data.find((book: Book) => book.bookName === value)?.bookName
                : "Search Book By Author"}

              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Search Book..." />
              <CommandEmpty>No Author found.</CommandEmpty>
              <CommandGroup>
                {data &&
                  data.map((book: Book) => (
                    <CommandItem
                      key={book.id}
                      value={book.bookName}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === book.bookName ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {book.bookName}
                    </CommandItem>
                  ))}
              </CommandGroup>
            </Command>

            <AddBookDialog />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
