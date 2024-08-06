"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdOutlineSpaceDashboard,
  MdLibraryBooks,
  MdNotificationsNone,
  MdOutlineSettings,
  MdExitToApp,
} from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
type SideButtonProps = {
  title: string;
  link: string;
  children: React.ReactNode;
};
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const SideBar = () => {
  const pathname = usePathname();
  const session = useSession();
  const [role, setRole] = useState();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setRole(session.data?.user?.role);

    if (session.data?.user.role == "Admin") {
      setIsAdmin(true);
    }
  }, [session.data?.user?.role]);

  const SideButton = ({ title, link, children }: SideButtonProps) => {
    return (
      <Link href={link}>
        <div
          className={` ${
            pathname.includes(link) ? "bg-[#00ABFF]" : ""
          } flex m-1  hover:cursor-pointer rounded-md hover:bg-slate-600 h-12`}
        >
          <div className="flex gap-2 m-4 items-center">
            {children}
            <h1>{title}</h1>
          </div>
        </div>
      </Link>
    );
  };
  return (
    <div className="  ml-6 mr-6 mt-6 bg-[#171B36] w-96  h-[96vh] rounded-2xl text-white flex flex-col ">
      <div className="flex gap-2 m-4 items-center text-blue-500">
        <MdOutlineSpaceDashboard />
        <h2>Book Rent</h2>
      </div>

      <div>
        <SideButton link="dashboard" title="Dashboard">
          <MdOutlineSpaceDashboard />
        </SideButton>

        {isAdmin && (
          <div>
            <SideButton link="books" title="Books">
              <MdLibraryBooks />
            </SideButton>

            <SideButton link="owners" title="Owners">
              <MdNotificationsNone />
            </SideButton>
          </div>
        )}
        {!isAdmin && (
          <div>
            {" "}
            <SideButton link="book-upload" title="Book Upload">
              <MdLibraryBooks />
            </SideButton>
          </div>
        )}

        <SideButton link="notification" title="Notification">
          <MdNotificationsNone />
        </SideButton>

        <SideButton link="setting" title="Setting">
          <MdOutlineSettings />
        </SideButton>

        <SideButton link="login" title="Login as Admin">
          <CgProfile />
        </SideButton>
      </div>
      <div className=" self-center absolute bottom-8">
        <Button
          onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
          className="w-52 bg-gray-700"
        >
          <MdExitToApp /> Logout
        </Button>
      </div>
    </div>
  );
};

export default SideBar;

//  slected #00ABFF
