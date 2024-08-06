"use client";
import DoughnutChart from "@/components/charts/Dongnut";
import LineGraph from "@/components/charts/Line";
import { DatePickerWithRange } from "@/components/daterange";
import { DataTableDemo } from "@/components/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-row h-[85vh] ">
      <Card className="w-1/4 h-full">
        <CardContent className="p-2">
          <Card className="p-0 mt-2">
            <CardHeader className="">
              <CardTitle className="text-xs ">This Month Statistics</CardTitle>
              <CardDescription className="text-xs">
                Tu, Nov 10, 2023 5:57 PM
              </CardDescription>
            </CardHeader>
            <CardContent>dfdf</CardContent>
          </Card>

          <Card className="p-0 mt-2">
            <CardHeader className="">
              <CardTitle className="text-xs flex justify-between text-gray-400">
                <p>Available Books</p>
                <p className="p-1 rounded-sm bg-blue-100 text-xs font-mono">
                  Today
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DoughnutChart />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <div className="w-[95%] h-2/3 p-8 bg-white rounded-lg ">
          {/* <DataTableDemo /> */}

          <div className="h-full">
            <DataTableDemo />
          </div>
        </div>

        {/*  */}
        <div className="w-[95%]  h-1/3 p-8 bg-white rounded-lg ">
          <div className="flex items-center gap-2 ">
            <h1 className="text-sm ">Earning Summary</h1>
            <DatePickerWithRange className="" />
          </div>
          <LineGraph />
        </div>
      </div>

      {/*  */}

      {/*  */}
    </div>
  );
};

export default Dashboard;
