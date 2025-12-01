"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import line from "../img/line.png";

export default function Rite() {
  return (
    <div className="w-full max-w-4xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          รับจัด<span className="text-gold">พิธีบวงสรวง</span>
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
        <div className="mb-8 overflow-hidden rounded-2xl">
          <Image
            src="https://lh3.googleusercontent.com/d/1Y7mcveDKxti6HAg7y4DtYHmcvWCIi9kQ"
            alt="Ceremony"
            width={1500}
            height={800}
            className="w-full"
          />
        </div>

        <h2 className="text-xl md:text-2xl text-center text-gray-200 mb-8">
          รับจัดพิธีบวงสรวงเทพ สิ่งศักดิ์สิทธิ์แบบครบวงจร
        </h2>
        <p className="text-center text-gold text-lg mb-8">
          มี 3 ขนาด: ชุดเล็ก, ชุดกลาง, ชุดใหญ่
        </p>

        <div className="text-center">
          <p className="text-gray-300 mb-6">ติดต่อนัดหมาย</p>
          <Link href="/contact" className="inline-block hover:scale-110 transition-transform">
            <Image src={line} alt="LINE Contact" className="w-32 h-32" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
