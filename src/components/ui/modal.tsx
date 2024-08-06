import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { AddBookForm } from "../addbook";

export function AddBookDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className=" text-blue-500 w-full">
          Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Book</DialogTitle>
        </DialogHeader>

        <AddBookForm />
      </DialogContent>
    </Dialog>
  );
}
