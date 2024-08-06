import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MuiTextField from "./textField";
import { ComboboxDemo } from "./combobox";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className=" text-blue-500">
          Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Book</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="w-full">
            <MuiTextField title="Book Name" type="text" />
          </div>
          <div className="w-full">
            <MuiTextField title="Author Name" type="text" />
          </div>
          <div className="w-full">
            <ComboboxDemo />
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full" type="submit">
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
