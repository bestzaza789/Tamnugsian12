"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Home() {
  const commentsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(commentsRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    // โหลด Facebook SDK
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.src =
      "https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v22.0&appId=947322670076680";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <main className="w-full h-full z-0 flex flex-col items-center">
      {/* ส่วนอื่นๆ */}
      <div className="md:hidden mx-5 my-1 p-2 bg-red-600 z-10 rounded-xl text-white text-center w-3/4">
        ศูนย์รวมผู้เชี่ยวชาญด้านโหราศาสตร์ตำหนักเซียน
      </div>

      <Image
        className="w-full absolute md:relative -z-0 animate-fade animate-once animate-ease-in-out"
        src="https://lh3.googleusercontent.com/d/1dJTAhw2pTysE1Sv2nOzq1BZhxYxkyQ6-"
        alt="history"
        width={1500}
        height={800}
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
        alt="Image 2"
        width={1500}
        height={800}
      />

      <Image
        className="w-full absolute top-[1060px] md:relative -z-0 animate-fade animate-once animate-ease-in-out"
        src="https://lh3.googleusercontent.com/d/1efpIxqVvStQ2pjBEHtlLCqZ5a-fcBWFE"
        alt="Image 3"
        width={1500}
        height={800}
      />

      {/* Facebook Comments */}
      <motion.div
        ref={commentsRef}
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-center items-center mt-10 p-4 z-[9999]  absolute top-[1400px] md:relative"
      >
        <div className="w-full max-w-5xl">
          <div id="fb-root"></div>
          <div
            className="fb-comments"
            data-href="https://tamnugsian12.vercel.app/"
            data-width="100%"
            data-numposts="5"
          ></div>
        </div>
      </motion.div>
    </main>
  );
}
