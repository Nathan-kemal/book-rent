"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { useSession } from "next-auth/react";
const Navbar = () => {
  const session = useSession();
  const pathname = usePathname();

  console.log("nav", session);
  return (
    <div className="  w-full h-14   bg-white   rounded-2xl flex items-center">
      <h1 className=" font-bold ml-6">
        {session.data?.user?.role} / {pathname.slice(1)}
      </h1>
    </div>
  );
};

export default Navbar;
