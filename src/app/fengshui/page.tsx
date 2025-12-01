"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import courseHJ1 from "../img/courseHJ1.png";
import HJ2 from "../img/HJ2.png";
import HJ3 from "../img/HJ3.png";
import line from "../img/line.png";

export default function Fengshui() {
  return (
    <div className="w-full max-w-5xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          จัดฮวงจุ้ยมังกร <span className="text-gold">ทั่วประเทศ</span>
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-gold/30 transition-all"
      >
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Image src={courseHJ1} alt="Fengshui 1" className="w-full rounded-xl" />
          <Image src={HJ2} alt="Fengshui 2" className="w-full rounded-xl" />
          <Image src={HJ3} alt="Fengshui 3" className="w-full rounded-xl" />
        </div>

        <h2 className="text-xl md:text-2xl text-center text-gray-200 mb-8">
          จัดฮวงจุ้ยมังกร 4 จตุรทิศ ทั่วประเทศ (ศาสตร์ดาว 9 ยุค)
        </h2>

        <div className="text-center">
          <p className="text-gray-300 mb-6">นัดหมายอาจารย์ตำหนักเซียน</p>
          <Link href="/contact" className="inline-block hover:scale-110 transition-transform">
            <Image src={line} alt="LINE Contact" className="w-32 h-32" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
