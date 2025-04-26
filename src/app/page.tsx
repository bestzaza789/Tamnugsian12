"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-full h-full z-0 flex flex-col items-center  ">
      <div className="md:hidden mx-5 my-1 p-2 bg-red-600 z-10 rounded-xl text-white text-center  w-3/4 ">
        ศูนย์รวมผู้เชี่ยวชาญด้านโหราศาสตร์ตำหนักเซียน
      </div>
      <Image
        className="w-full absolute md:relative -z-0 animate-fade animate-once animate-ease-in-out"
        src="https://lh3.googleusercontent.com/d/1dJTAhw2pTysE1Sv2nOzq1BZhxYxkyQ6-"
        alt="history"
        width="1500"
        height="800"
      />
      <Image
        className="w-full absolute top-[300px] md:relative -z-0 animate-fade animate-once animate-ease-in-out"
        src="https://lh3.googleusercontent.com/d/15Eb8AASShsrcLQKu6rdDHs89nWlEqZAb"
        alt="https://lh3.googleusercontent.com/d/15Eb8AASShsrcLQKu6rdDHs89nWlEqZAb"
        width="1500"
        height="800"
      />
    </main>
  );
}
