"use client";
import AddQuestionary from "@/components/ui/addquestion";
import { SelectBook } from "@/components/ui/searchbook";
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
import { CldUploadButton, CldUploadWidget } from "next-cloudinary";
import { uploadImage } from "@/app/actions/db";

const formSchema = z.object({
  quantity: z.preprocess(
    (value) => (typeof value === "string" ? parseFloat(value) : value),
    z.number().min(1, {
      message: "Quantity Must Be Greater than 0.",
    })
  ),

  price: z.preprocess(
    (value) => (typeof value === "string" ? parseFloat(value) : value),
    z.number().min(1, {
      message: "Price Must Be Greater than 0.",
    })
  ),

  image: z.instanceof(FileList).optional(),
});

const BookUpload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const fileRef = form.register("image");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    console.log("files", files[0]);
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const formData = new FormData();
    Array.from(values.image).forEach((file, index) => {
      formData.append(`images`, file); // Use the same key for multiple files
    });

    console.log(formData.get("images"));
    const response = await uploadImage(formData);
    console.log(response);
  }

  const { toast } = useToast();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className=" w-full flex flex-col justify-center items-center ">
          <h1 className=" m-4"> Upload New Book</h1>
          <div className="flex gap-2  flex-col justify-center items-center">
            <SelectBook />
            {/* <AddQuestionary /> */}

            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl className="">
                      <Input
                        type="number"
                        className=""
                        placeholder="Book Quantity"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl className="">
                      <Input
                        type="number"
                        className=""
                        placeholder="Rent Price for 2 week"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mt-4  z-0">
            <div>
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl className="">
                      <Input type="file" className="" {...fileRef} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
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

              {/* <CldUploadWidget uploadPreset="book_rent" options={{}}>
                {({ open }) => {
                  return (
                    <button onClick={() => open()}>Upload an Image</button>
                  );
                }}
              </CldUploadWidget> */}

              {/* <CldUploadButton uploadPreset="book_rent" /> */}
            </div>
          </div>

          <Button type="submit" className="bg-[#00ABFF] mt-4  w-96">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BookUpload;
