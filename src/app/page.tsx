"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Home() {
  const commentsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(commentsRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    // Load Facebook SDK
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

  const services = [
    "การจัดฮวงจุ้ยมังกร",
    "การเขียนยันต์ลงเฟรมผ้าใบ",
    "การดูดวงไพ่ยิปซีและไพ่เทพเซียน",
    "การเช็คสุขภาพเบอร์มงคล",
    "การดูธาตุเกิด",
    "การลงนะหน้าทอง (นะสีดามหาสเน่ห์)",
    "การลงนะลายมือมหาเศรษฐี",
    "การอาบน้ำมนต์ธรณีสาร",
    "การเป็นเจ้าพิธีบวงสรวง",
    "การทำพิธีครอบครู",
  ];

  return (
    <main className="w-full flex flex-col items-center gap-12 pb-20">
      {/* Hero Section */}
      <section className="w-full relative group overflow-hidden rounded-2xl shadow-2xl shadow-gold/20">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />
        <Image
          className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
          src="https://lh3.googleusercontent.com/d/1dJTAhw2pTysE1Sv2nOzq1BZhxYxkyQ6-"
          alt="Hero Image"
          width={1500}
          height={800}
          priority
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="px-4 py-1 bg-gold text-black font-bold rounded-full text-sm mb-4 inline-block">
              ตำหนักเซียน 12 องค์เทพ
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              ศูนย์รวมผู้เชี่ยวชาญ<br />
              <span className="text-gold">ด้านโหราศาสตร์</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
              พลิกชะตา เสริมบารมี ด้วยศาสตร์แห่งความเป็นมงคล
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            วิชาโหราศาสตร์ <span className="text-gold">ตำหนักเซียน</span>
          </h2>
          <p className="text-gray-400">
            ใช้ช่วยเหลือผู้ศรัทธาในสายโหราศาสตร์ ในด้านต่างๆ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 group cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                <span className="text-lg text-gray-200 group-hover:text-gold transition-colors">
                  {service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full max-w-7xl mx-auto px-4 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            className="w-full h-auto hover:scale-105 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/d/1oTw_vUQkhz5o37hKwImc0tHBIHWlONXG"
            alt="Gallery Image 1"
            width={1500}
            height={800}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            className="w-full h-auto hover:scale-105 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/d/1TZcwki280D8w1m2QtovEPIfRYGmf8T0g"
            alt="Gallery Image 2"
            width={1500}
            height={800}
          />
        </motion.div>
      </section>

      {/* Facebook Comments */}
      <motion.div
        ref={commentsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mx-auto px-4 bg-white rounded-xl p-6 shadow-xl"
      >
        <h3 className="text-2xl font-bold text-black mb-6 text-center">
          ความคิดเห็นจากผู้ศรัทธา
        </h3>
        <div id="fb-root"></div>
        <div
          className="fb-comments w-full"
          data-href="https://tamnugsian12.vercel.app/"
          data-width="100%"
          data-numposts="5"
        ></div>
      </motion.div>
    </main>
  );
}
