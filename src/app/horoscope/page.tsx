"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import line from "../img/line.png";

export default function Horoscope() {
  const services = [
    {
      title: "ครอบครู - \"ศิษย์มีครู\"",
      image: "https://lh3.googleusercontent.com/d/1VPJkdvHFaiytBkpO669K6AatTd3ZQY2l",
    },
    {
      title: "ลงนะหน้าทอง (นะสีดามหาสเน่ห์)",
      image: "https://lh3.googleusercontent.com/d/1it8ZKfZ2FYKymrcsz_LMhX8SIOQOYWmB",
    },
    {
      title: "ลงนะฝ่ามือเศรษฐี",
      image: "https://lh3.googleusercontent.com/d/1t8LLBP1tLoE-HLVHQyT6MVq8am56riQj",
    },
    {
      title: "ดูดวงชะตา ด้วย \"ไพ่เทพเซียน\"",
      image: "https://lh3.googleusercontent.com/d/1WMellBsyimeO3NFuaAHjgMq6HzqhU4Kf",
    },
    {
      title: "อาบน้ำมนต์ธรณีสาร (ล้างคุณไสย์มนต์ดำฯ)",
      image: "https://lh3.googleusercontent.com/d/1lLaZy3JfYC9jMXX3NC6xnbz3BcJ9yYh8",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          พิธีกรรม<span className="text-gold">เสริมดวง</span>
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8" />
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          "มูให้ครบ จบในที่เดียว"
        </p>
        <p className="text-gray-400">
          (ต้องนัดหมาย วันเวลาก่อนมาทำพิธี เนื่องจากต้องเตรียมเครื่องไหว้ที่เกี่ยวข้อง)
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 mb-12 text-center"
      >
        <p className="text-xl md:text-2xl text-gold">
          ครอบครู • ลงนะหน้าทอง • ลงนะฝ่ามือเศรษฐี • ดูดวงชะตา • อาบน้ำมนต์ธรณีสาร
        </p>
        <p className="text-gray-300 mt-4">ณ ตำหนักเซียน 12 องค์เทพ</p>
      </motion.div>

      <div className="space-y-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-gold/30 transition-all"
          >
            <h3 className="text-2xl md:text-3xl text-gold font-bold mb-6 text-center">
              {service.title}
            </h3>
            <div className="overflow-hidden rounded-xl">
              <Image
                src={service.image}
                alt={service.title}
                width={1500}
                height={800}
                className="w-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center bg-gray-900/50 p-8 rounded-2xl border border-gray-800"
      >
        <h3 className="text-2xl md:text-3xl text-white mb-4">
          สอบถามรายละเอียดเพิ่มเติม
        </h3>
        <p className="text-gray-300 mb-6">กับพ่อครูหาริ</p>
        <Link href="/contact" className="inline-block hover:scale-110 transition-transform">
          <Image src={line} alt="LINE Contact" className="w-32 h-32" />
        </Link>
        <p className="text-gold mt-4">คลิกที่ปุ่มข้างบนนี้เลย</p>
      </motion.div>
    </div>
  );
}
