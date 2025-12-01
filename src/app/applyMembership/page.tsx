"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import apply2 from "../img/apple2.png";

export default function ApplyMembership() {
  return (
    <div className="w-full max-w-4xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          สมัครเป็น<span className="text-gold">ศิษย์ก้นกุฏิ</span>
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900/50 p-8 md:p-12 rounded-2xl border border-gray-800 hover:border-gold/30 transition-all"
      >
        <div className="flex justify-center mb-8">
          <Image
            src={apply2}
            alt="สมัคร ศิษย์ก้นกุฏิ"
            className="max-w-full md:max-w-[600px] rounded-xl"
          />
        </div>

        <div className="space-y-6 text-center md:text-left">
          <div className="bg-gold/10 p-4 rounded-lg border border-gold/30">
            <p className="text-2xl md:text-3xl font-bold text-gold">
              ลงทะเบียน 1,299 บาท
            </p>
          </div>

          <div className="space-y-4 text-gray-200">
            <p className="text-lg md:text-xl">
              สมัคร เป็นศิษย์ก้นกุฏิ อ.หาริ เพชรลานน์
            </p>
            <p className="text-gold">
              (รับเหรียญ 12 องค์เทพปีมังกรทอง 1 เหรียญ)
            </p>
            <p className="text-lg md:text-xl">
              ได้เรียนบริหารจัดการชีวิต 365 วัน<br />
              (ในเฟสบุ๊คกลุ่มปิด)
            </p>
            <p className="text-xl text-gold font-semibold">
              เรียนจบจะได้ไปใช้ชีวิต<br />
              "ดุจการเฉลิมฉลอง ความสำเร็จในทุกๆวัน"
            </p>
            <p className="text-gray-300 italic">เจริญ เจริญ นะครับ</p>
          </div>

          <div className="pt-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdhOOn-5nqKoNOgoC4eq8VsnWyTlrV-inXP5ee7s7u5SZDG5w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-600 hover:to-gold text-black font-bold text-lg md:text-xl py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/20"
            >
              📝 สมัครเลย คลิกที่นี่
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 overflow-hidden rounded-2xl border-2 border-gold/20"
      >
        <Image
          src="https://lh3.googleusercontent.com/d/1VldW_vWWtMGOnBwO3uorV5FRcyJpyJpZ"
          width={1500}
          height={800}
          alt="Membership Info"
          className="w-full"
        />
      </motion.div>
    </div>
  );
}
