"use client";
import { usePathname } from "next/navigation";
import React from "react";
import SideBar from "./sidebar";
import Navbar from "./navbar";
import { SessionProvider } from "next-auth/react";
const RouteWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (pathname.includes("sign-in") || pathname.includes("sign-up")) {
    return <div>{children}</div>;
  }
  return (
    <SessionProvider>
      <div className="flex flex-row bg-[#F0F2FF]">
        <SideBar />

        <div className="w-full">
          <div className="p-6">
            <Navbar />
          </div>
          {children}
        </div>
      </div>
    </SessionProvider>
  );
};

export default RouteWrapper;
