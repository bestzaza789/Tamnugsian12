"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import line from "../img/line.png";
import qrcode from "../img/qrcode.png";

export default function Contact() {
  return (
    <div className="w-full max-w-2xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-gold">ติดต่อสอบถาม</span>
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900/50 p-12 rounded-2xl border border-gray-800 hover:border-gold/30 transition-all text-center"
      >
        <div className="flex justify-center mb-6">
          <Image src={line} alt="LINE" className="w-32 h-32" />
        </div>
        <p className="text-2xl md:text-3xl text-gold font-bold mb-8">
          Line ID: 0987898949
        </p>
        <div className="flex justify-center">
          <Image
            src={qrcode}
            alt="LINE QR Code"
            className="w-48 h-48 rounded-xl border-2 border-gold/20"
          />
        </div>
        <p className="mt-8 text-gray-300">สแกน QR Code เพื่อเพิ่มเพื่อน</p>
      </motion.div>
    </div>
  );
}
