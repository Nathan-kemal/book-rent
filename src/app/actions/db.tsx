"use server";
import prisma from "@/lib/db";
import { v2 as cloudinary } from "cloudinary";

export default async function getOwners() {
  try {
    const users = await prisma.user.findMany({
      include: {
        books: true,
      },
    });

    if (users) return { users: users, message: "sccuess" };
  } catch (error) {
    console.error("Error signing up user:", error);
    throw error;
  }
}

type Book = {
  bookName: string;
  author: string;
  category: string;
};

// "Fiction" | "Self Helping" | "Business";
export async function actionAddBook(userId: string, bookData: Book) {
  try {
    const newBook = await prisma.book.create({
      data: {
        ...bookData,
        User: { connect: { id: userId } },
      },
    });

    if (newBook) {
      return newBook;
    }
  } catch (error) {
    console.error("Error adding book:", error);
  }
}

export async function getBooks(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        books: true,
      },
    });

    console.log(user?.books);

    if (user) return { books: user.books, message: "sccuess" };
  } catch (error) {
    console.error("Error signing up user:", error);
    throw error;
  }
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});
export async function uploadImage(formData: FormData) {
  try {
    const file = formData.get("images") as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          return resolve(result);
        })
        .end(buffer);
    });

    console.log(result);
  } catch (error) {}
}
