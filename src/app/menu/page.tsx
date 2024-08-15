import { Tajawal } from "next/font/google";
import { menu } from "../../../data/menu";
import { Coffee } from "../../../interfaces/coffee";
const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function Home() {
  return (
    <main dir="rtl" className={`flex min-h-screen flex-col items-center p-10  sm:p-24 text-black  bg-orange-100 ${tajawal.className}`}>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 sm:mb-5">المشروبات الساخنة</h1>
        <h1 className="text-xl sm:text-2xl font-extrabold mb-5 sm:mb-10">أنقر على ما تريد ارتشافه</h1>

        <div className="space-y-4">
      {menu.map((coffee: Coffee) => (
        <a
          key={coffee.id}
          href={`/menu/${coffee.id}`}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
        >
          <img
            className="object-cover w-full sm:h-[200px] rounded-t-lg md:rounded-none md:rounded-xl"
            src={coffee.image}
            alt={coffee.name}
          />
          <div className="flex flex-col justify-between p-4 leading-normal text-center sm:text-start ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {coffee.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              {coffee.description}
            </p>
          </div>
        </a>
      ))}
    </div>
    </main>
  );
}
