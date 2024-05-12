"use client";
import Image from "next/image";
import bgHomePage from "./img/bgHonePage.png";

export default function Home() {
  return (
    <main className=" w-full h-full z-0 flex flex-col items-center  ">
      <div className="md:hidden m-5 p-2 bg-red-600 z-10 rounded-xl text-white text-center  w-3/4 ">
        ศูนย์รวมผู้เชี่ยวชาญด้านโหราศาสตร์ตำหนักเซียน
      </div>
      <Image
        className="w-full absolute md:relative -z-0 animate-fade animate-once animate-ease-in-out"
        src={bgHomePage}
        alt="background"
      />
      <Image
        className="w-full absolute top-[500px] md:relative -z-0 animate-fade animate-once animate-ease-in-out"
        src="https://lh3.googleusercontent.com/d/1du8-1SOLKngVEMGifTwI5JV_rDZxZdDQ"
        alt="history"
        width="1500"
        height="800"
        alt="background"
      />
    </main>
  );
}
