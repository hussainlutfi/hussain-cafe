import { Tajawal } from "next/font/google";
const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function Home() {
  return (
    <main dir="rtl" className={`flex min-h-screen flex-col items-center text-black justify-center p-5 sm:p-24 bg-white ${tajawal.className}`}>

      <div className="flex flex-col sm:flex-row justify-center items-center">

       


          <img
          src={'/coffeecup.svg'}
          alt="About services"
          className="absolute w-[200px] sm:w-[500px] mx-auto blur-2xl opacity-40"
          />

        <div className="flex flex-col text-black space-y-10  sm:p-10 text-center">
          <h1 className="text-4xl sm:xtext-6xl font-extrabold">ارتشف ولا تبالي</h1>
          <h1 className="text-2xl sm:text-4xl font-bold">كافي حسين هو الكافي المثالي 😎</h1>
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:justify-evenly">
            <a  href="/menu">
              <div className="bg-[#E3C892] rounded-full w-[175px] sm:w-[200px] p-2 sm:p-4 text-lg sm:text-xl font-extrabold text-center">
                قائمة المشروبات
              </div>
            </a>
            {/* <a  href=""> */}
              {/* <div className="border-2 border-[#E3C892] rounded-full w-[175px] sm:w-[200px] p-2 sm:p-4 text-lg sm:text-xl font-extrabold text-center">
                الانتظار
              </div> */}
            {/* </a> */}
          </div>
        </div>

        <img
          src={'/coffee.svg'}
          alt="About services"
          className="w-[200px] sm:w-[500px] mx-auto"
        />


        
      
      </div>
    </main>
  );
}
