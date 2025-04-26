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

      <section className="w-full absolute top-[400px] md:relative -z-0 animate-fade animate-once animate-ease-in-out text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-left px-4 md:px-8">
        <h1 className="font-bold mb-4">
          วิชาโหราศาสตร์ ของตำหนักเซียน 12 องค์เทพ
        </h1>
        <p className="mb-4">
          ใช้ช่วยเหลือผู้ศรัทธาในสายโหราศาสตร์ ในด้านต่างๆ ดังต่อไปนี้:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>การจัดฮวงจุ้ยมังกร</li>
          <li>การเขียนยันต์ลงเฟรมผ้าใบ</li>
          <li>การดูดวงไพ่ยิปซีและไพ่เทพเซียน</li>
          <li>การเช็คสุขภาพเบอร์มงคล</li>
          <li>การดูธาตุเกิด</li>
          <li>การลงนะหน้าทอง (นะสีดามหาสเน่ห์)</li>
          <li>การลงนะลายมือมหาเศรษฐี</li>
          <li>การอาบน้ำมนต์ธรณีสาร</li>
          <li>การเป็นเจ้าพิธีบวงสรวง</li>
          <li>การทำพิธีครอบครู</li>
        </ul>
      </section>

      <Image
        className="w-full absolute top-[800px] md:relative -z-0 animate-fade animate-once animate-ease-in-out"
        src="https://lh3.googleusercontent.com/d/15Eb8AASShsrcLQKu6rdDHs89nWlEqZAb"
        alt="https://lh3.googleusercontent.com/d/15Eb8AASShsrcLQKu6rdDHs89nWlEqZAb"
        width="1500"
        height="800"
      />
    </main>
  );
}
