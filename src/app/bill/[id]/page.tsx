"use client";
import { Tajawal } from "next/font/google";
import { useEffect, useState } from "react";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function Home({ params }: { params: { id: string } }) {
  useEffect(() => {}, [params.id]); // Added params.id as a dependency to re-run when it changes

  return (
    <main
      dir="rtl"
      className={`flex min-h-screen  flex-col items-center text-black justify-center p-5 sm:p-24 bg-orange-100 ${tajawal.className}`}
    >
      <div
        className="block w-3/4 p-6 text-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          بالعافية
        </h5>
        <p className=" font-bold text-gray-700">
          نرجو منكم الانتظار،، رقم طلبكم:
        </p>
        <p className="text-8xl p-10">
            {params.id}
        </p>
        <p className=" p-5 opacity-60 font-bold">
            سعر الطلب: صفر ريال
        </p>
      </div>
    </main>
  );
}
