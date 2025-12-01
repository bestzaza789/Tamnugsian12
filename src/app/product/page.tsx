"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Product {
  id: number;
  imageUrl: string;
  productName: string;
  price: number;
}

export default function Product() {
  const products = [
    {
      id: 1,
      productName: "ปากกาเงินล้าน\nตะบองท้าวเวสสุวรรณ",
      price: 789,
      imageUrl: "https://lh3.googleusercontent.com/d/1jEiGH4uadDWjer1O8IGrC3mkKfe-UoRY",
    },
    {
      id: 2,
      productName: "ไม้ครู\nเพื่อประกอบพิธีกรรม",
      price: 299,
      imageUrl: "https://lh3.googleusercontent.com/d/1FVNUGwgExdQgakjI7Q1kFpQ2c7OH69iv",
    },
    {
      id: 3,
      productName: "เสือคาบดาบ สำหรับ แก้ฮวงจุ้ย",
      price: 299,
      imageUrl: "https://lh3.googleusercontent.com/d/1rtuisxIMshVZVDAAekAiGSmfXoS0o8Ag",
    },
    {
      id: 13,
      productName: "ยันต์อรหันต์คุ้มกายา แถมฟรี กรอบป้ายภาษีรถยนต์ตำหนักเซียน",
      price: 789,
      imageUrl: "https://lh3.googleusercontent.com/d/11EM8u5u9HNl38ZI3HAk9ddYZhwAMWZ3d",
    },
    {
      id: 14,
      productName: "กรอบป้ายภาษีรถยนต์ตำหนักเซียน",
      price: 499,
      imageUrl: "https://lh3.googleusercontent.com/d/1oPQdY7_s6lfg_AUBuB0v7MWHhSJtAmlx",
    },
    {
      id: 15,
      productName: "พัดซินแส ตำหนักเซียน",
      price: 499,
      imageUrl: "https://lh3.googleusercontent.com/d/1tBQq8rgRzmApdGJEPg3z7cSPluYMA8rf",
    },
    {
      id: 16,
      productName: "หน้าพระลักษณ์หน้าทอง",
      price: 1250,
      imageUrl: "https://lh3.googleusercontent.com/d/17m6AmQJmT-xQcvXXTF7V4rWkSsOYgZDA",
    },
    {
      id: 17,
      productName: "หินมงคลปีมังกรทอง(สำหรับวางหน้าหิ้งพระ)",
      price: 789,
      imageUrl: "https://lh3.googleusercontent.com/d/1zWyceEMUtuI38xvJfyWNh0l5Flr0ywhQ",
    },
    {
      id: 18,
      productName: "ล็อคเก็ต 12 องค์เทพเสริมความเฮง เทพคุ้มครอง",
      price: 329,
      imageUrl: "https://lh3.googleusercontent.com/d/1uUg6zhL8ynWsosWJOp61WgfHOMII0PIN",
    },
    {
      id: 19,
      productName: "ไพ่เทพเซียน พร้อมผ้าฉากหลังตำหนัก",
      price: 2999,
      imageUrl: "https://lh3.googleusercontent.com/d/1BoeK5W0kAckAwsdM9y-dFlwUO-tHKTUC",
    },
    {
      id: 20,
      productName: "ตำราสอนสมาธิ เดินจงกรม และบทสวดมนต์ ทำวัตรเช้า-เย็น",
      price: 399,
      imageUrl: "https://lh3.googleusercontent.com/d/1sVm9nx6455-yp1v9H3XvNCNPrc_O4e8l",
    },
    {
      id: 21,
      productName: "ยันต์ขนาดเล็กผ่านพิธี ฟรีค่าส่ง",
      price: 129,
      imageUrl: "https://lh3.googleusercontent.com/d/1qFIHWK9y88Xod1_SF3jqwciWo-oG3aot",
    },
    {
      id: 22,
      productName: "เสื้อศิษย์ก้นกุฏิ(เกรดพรีเมี่ยม)",
      price: 599,
      imageUrl: "https://lh3.googleusercontent.com/d/1LiG4pqz6L4QI6qls7vBG61oX5rUOD-0g",
    },
    {
      id: 23,
      productName: "เหรียญบารมีครู (เงิน ทอง นาค)",
      price: 1299,
      imageUrl: "https://lh3.googleusercontent.com/d/1ig39jC-5E2AVUeQwEqdZogupc-YGsyHn",
    },
    {
      id: 4,
      productName: "สบู่ นะหน้าทอง\nเมตตามหานิยม",
      price: 199,
      imageUrl: "https://lh3.googleusercontent.com/d/1-PZsfdl5Q96Ye7yKmKc2BmKFm8khMy3U",
    },
    {
      id: 5,
      productName: "พัดขงเบ้ง\nสำหรับซินแส",
      price: 499,
      imageUrl: "https://lh3.googleusercontent.com/d/1uF-op60CgWcfsvDktuZnoZmmo-GwbM5-",
    },
    {
      id: 6,
      productName: "ยันต์มหามงคลผ่านพิธี\nขนาด 30x30 เซนติเมตร",
      price: 3599,
      imageUrl: "https://lh3.googleusercontent.com/d/1NgPJtyxXSIN74hfM9PkctF3bMUpAxAXe",
    },
    {
      id: 7,
      productName: "ยันต์มหามงคลผ่านพิธี\nขนาด 50x50 เซนติเมตร",
      price: 7899,
      imageUrl: "https://lh3.googleusercontent.com/d/1Pc-LakVzB6Y9zZJV1dkHuJL5yqJitHtr",
    },
    {
      id: 8,
      productName: 'กระเป๋าบารมีครู 5 สี\nแถมคอร์สเรียนบริหารชีวิต "ศิษย์มีครู"',
      price: 999,
      imageUrl: "https://lh3.googleusercontent.com/d/12jLk3tAdeMwXccSlycsao6oOjciRHXx7",
    },
    {
      id: 10,
      productName: "ตำราโหราศาสตร์\nฮวงจุ้ย เขียนยันต์ ดูดวง",
      price: 1599,
      imageUrl: "https://lh3.googleusercontent.com/d/1jIO_H3NMx-14X6SAlVrVIzxtjmucPp-m",
    },
    {
      id: 11,
      productName: "ตำราดูธาตุเกิด\nศาสตร์ดาว 9 ยุค",
      price: 999,
      imageUrl: "https://lh3.googleusercontent.com/d/1Q9xC0IKOnpmmjNPirPCE4Bew_fcrYNpg",
    },
    {
      id: 12,
      productName: "เบอร์มังกร 789",
      price: 89999,
      imageUrl: "https://lh3.googleusercontent.com/d/1wObnXzL1zDxIW9q-ShsPL7ir3hRWBjhK",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-gold">วัตถุมงคล</span>
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gold/50 transition-all duration-300 overflow-hidden group"
          >
            <div className="relative aspect-square overflow-hidden bg-gray-800">
              <Image
                src={product.imageUrl}
                alt={product.productName}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm md:text-base text-gray-200 mb-3 h-12 line-clamp-2">
                {product.productName.replace(/\\n/g, " ")}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xl md:text-2xl font-bold text-gold">
                  ฿{product.price.toLocaleString()}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
