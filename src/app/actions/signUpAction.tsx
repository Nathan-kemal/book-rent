"use server";

import prisma from "@/lib/db";

type User = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  location: string;
  phoneNumber: string;
};

export default async function signUpUser(user: User) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    // If the user already exists, return null or handle it as you see fit
    if (existingUser) return { message: "User Aleready Exist" };

    const newUser = await prisma.user.create({
      data: {
        firstName: user.firstname,
        lastName: user.lastname,
        email: user.email,
        password: user.password,
        phoneNumber: user.phoneNumber,
        location: user.location,
      },
    });

    if (newUser) {
      return { message: "User Created", status: 200 };
    }
    return { message: "Error", status: 400 };

    return;
  } catch (error) {
    console.error("Error signing up user:", error);
    throw error; // or return a custom error object/message
  }
}
