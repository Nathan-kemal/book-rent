"use client";
import { usePathname } from "next/navigation";
import React from "react";
import SideBar from "./sidebar";
import Navbar from "./navbar";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const RouteWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (pathname.includes("sign-in") || pathname.includes("sign-up")) {
    return <div>{children}</div>;
  }
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-row bg-[#F0F2FF]">
          <SideBar />

          <div className="w-full">
            <div className="p-6">
              <Navbar />
            </div>
            {children}
          </div>
        </div>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default RouteWrapper;
