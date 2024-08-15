"use client";
import { Tajawal } from "next/font/google";
import { Order } from "../../../interfaces/coffee";
import { useEffect, useState } from "react";
import { createClient } from "../../../utils/supabase/client";
const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function Home() {
  const [orders, setOrders] = useState<Order[]>();

  useEffect(() => {
    getData()
  }, []);

  async function getData() {
    const { data, error } = await createClient().from("orders").select("*");

      if (error) {
        throw new Error("couldn't fetch");
      }

      const values: Order[] = data!;
      console.log(data);
      console.log(values);
      

      setOrders(values);
  }

  const getStatusColor = (status: number) => {
    switch (status) {
      case 1:
        return "bg-orange-100";
      case 2:
        return "bg-green-100";
      case 3:
        return "bg-gray-100";
      default:
        return "bg-white";
    }
  };

  return (
    <main
      dir="rtl"
      className={`flex min-h-screen flex-col items-center p-10  sm:p-24 text-black  bg-orange-100 ${tajawal.className}`}
    >
      <div className="space-y-4">
        {/* {orders.map((order) => (
          <div
            key={order.id}
            className={`p-4 border border-gray-200 rounded-lg shadow ${getStatusColor(
              order.status
            )}`}
          >
            <p className="text-lg font-semibold">رقم الطلب: {order.id}</p>
            <p className="text-lg">الاسم: {order.name}</p>
            <p className="text-lg">المشروب: {order.drink}</p>
          </div>
        ))} */}
      </div>
    </main>
  );
}
