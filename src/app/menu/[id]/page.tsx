"use client";
import { Tajawal } from "next/font/google";
import { useEffect, useState } from "react";
import { Coffee } from "../../../../interfaces/coffee";
import { menu } from "../../../../data/menu";
import { createClient } from "../../../../utils/supabase/client";
import { usePathname, useRouter } from "next/navigation";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function Home({ params }: { params: { id: string } }) {
  const router = useRouter();
  const path = usePathname();
  const [item, setItem] = useState<Coffee | undefined>();
  const [name, setName] = useState<string>();

  useEffect(() => {
    const coffeeId = parseInt(params.id, 10); // Convert id from string to number
    const foundItem = menu.find((coffee: Coffee) => coffee.id === coffeeId);
    setItem(foundItem);
  }, [params.id]); // Added params.id as a dependency to re-run when it changes

  async function Order() {
    const { data, error } = await createClient()
      .from("orders")
      .insert([{ name, drink: item?.name }])
      .select();

    if (error) {
      throw new Error("Coudn't Order");
    }

    
    router.push(`/bill/${data[0].id}`);
  }
  return (
    <main
      dir="rtl"
      className={`flex min-h-screen flex-col items-center text-black justify-center p-5 sm:p-24 bg-orange-100 ${tajawal.className}`}
    >
      <div className="max-w-sm sm:max-w-full bg-white border border-gray-200 rounded-2xl shadow sm:w-1/2">
        {item ? (
          <>
            <img
              className="w-full rounded-t-2xl"
              src={item.image}
              alt={item.name}
            />

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900  text-center">
                  {item.name}
                </h5>
              </a>

              <div className="py-10">
                <h1 className="p-2 font-bold">الاسم الكريم</h1>
                <input
                  type="text"
                  className="rounded-2xl p-2 w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/* <p className="mb-3 font-normal text-gray-700 ">
                    {item.description}
                  </p> */}
              <div
                onClick={Order}
                className="inline-flex items-center w-full justify-center py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                أطلب
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}
