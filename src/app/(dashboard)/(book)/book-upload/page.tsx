"use client";
import AddQuestionary from "@/components/ui/addquestion";
import { ComboboxDemo } from "@/components/ui/combobox";
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { MdOutlineFileUpload } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useToast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  quantity: z.number().min(1, {
    message: "Qunatity Must Be Greater than 0.",
  }),

  price: z.number().min(1, {
    message: "price Must Be Greater than 0.",
  }),
});

const BookUpload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePlaceholderClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const { toast } = useToast();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className=" w-full flex flex-col justify-center items-center ">
          <h1 className=" m-4"> Upload New Book</h1>
          <div className="flex gap-4 z-20">
            <ComboboxDemo />
            <AddQuestionary />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mt-4  z-0">
            <div>
              <Input
                required
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }} // Hide the actual input
              />

              <div className=" border-2 border-dashed border-[#ccc] p-[20px]  text-center cursor-pointer flex justify-center items-center gap-2 ">
                {selectedImage && (
                  <div style={{ marginTop: "20px" }}>
                    <IoIosCloseCircleOutline
                      size={20}
                      color="#00ABFF"
                      onClick={clearImage}
                    />
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className=" w-24 h-24 object-contain"
                    />
                  </div>
                )}
                <div
                  className="flex gap-4 justify-center items-center"
                  onClick={handlePlaceholderClick}
                >
                  <MdOutlineFileUpload color="#00ABFF" />
                  <p className="text-[#00ABFF]"> Upload Book Cover</p>
                </div>
              </div>
            </div>
          </div>

          <Button
            className="bg-[#00ABFF] mt-4  w-96"
            onClick={() => {
              toast({
                title: "Message",
                description: "Submited Successfuly",
              });
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BookUpload;
