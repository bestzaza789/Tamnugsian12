"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import courseHR1 from "../img/courseHR1.png";
import courseHR2 from "../img/courseHR2.png";
import courseTL1 from "../img/courseTL1.png";
import courseTL2 from "../img/courseTL2.png";
import courseN1 from "../img/courseN1.png";
import courseN2 from "../img/courseN2.png";
import courseHJ1 from "../img/courseHJ1.png";
import courseHJ2 from "../img/courseHJ2.png";

export default function Course() {
  const courses = [
    {
      title: "คอร์สสอนดูดวงไพ่ยิปซี ขั้น แอดวานซ์",
      price: "2,999 บาท",
      images: [courseHR1, courseHR2],
      details: [
        "ถูกต้องตามหลักโหราศาสตร์ วิชาตำหนักเซียน 12 องค์เทพ",
        "การันตีการสอนด้วยผลงานการสอนศิษย์ มากกว่า 3,000 คน",
        "ได้เรียนวิชาการดูดวงไพ่ยิปซี แบบ CELTIC CROSS",
        "นำไปประกอบอาชีพได้จริง",
        "ได้ตำราโหราศาสตร์ไว้ทบทวน 1 เล่ม มูลค่า 1,599 บาท",
      ],
    },
    {
      title: "คอร์สสอนเขียนยันต์ร่ำรวย ขั้น แอดวานซ์",
      price: "3,999 บาท",
      images: [courseTL1, courseTL2],
      details: [
        "ถูกต้องตามหลักอักขระโบราณ เข้มขลัง งดงาม",
        "สอนตั้งแต่ไม่มีพื้นฐานจนเป็น เขียนเป็นทุกคนแน่นอน",
        "สอนเขียนอักขระขอมโบราณ ที่จำเป็นต้องมีในผืนยันต์ศักดิ์สิทธิ์",
        "สอนเขียนยันต์ในรูปแบบต่างๆหลากหลาย มีตัวอย่างมากกว่า 3,000 แบบ",
        "ผลงานการสอน ศิษย์ในคอร์ส มากกว่า 1,000 คน",
        "มีตำราโหราศาสตร์ให้อ่านศึกษาประกอบการเรียน 1 เล่ม มูลค่า 1,599 บาท",
      ],
    },
    {
      title: "วิชา ลงนะพระลักษณ์หน้าทอง",
      price: "2,999 บาท",
      images: [courseN1, courseN2],
      details: [
        "เสริมเสน่ห์ เมตตามหานิยม",
        "พิธีกรรมเสน่ห์สายขาว",
        "คนรัก คนชอบ ผู้ใหญ่ให้ความเอ็นดู อุปถัมภ์ ช่วยเหลือ",
        "เจริญก้าวหน้าในหน้าที่การงาน",
      ],
    },
    {
      title: "วิชาฮวงจุ้ย ขั้น แอดวานซ์",
      price: "4,999 บาท",
      images: [courseHJ1, courseHJ2],
      details: [
        "ศาสตร์ ดาว 9 ยุค ถูกต้องตามหลักวิชาฮวงจุ้ยโบราณ",
        "สอนตั้งแต่ไม่มีพื้นฐานจนเป็น",
        "จัดฮวงจุ้ยบ้านหรือสำนักงาน ที่ดิน เป็นทุกคนแน่นอน",
        "มีตำราโหราศาสตร์ 1 เล่ม ให้ใช้ประกอบการเรียน มูลค่า 1,599 บาท",
      ],
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
          คอร์สเรียน<span className="text-gold">โหราศาสตร์</span>
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
      </motion.div>

      <div className="space-y-16">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-gold/30 transition-all"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {course.images.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-xl">
                  <Image
                    src={img}
                    alt={`${course.title} ${i + 1}`}
                    className="w-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gold mb-4">
              {course.title}
            </h2>

            <div className="bg-gold/10 inline-block px-6 py-2 rounded-lg border border-gold/30 mb-6">
              <p className="text-xl md:text-2xl font-bold text-gold">
                ค่าครู {course.price}
              </p>
            </div>

            <ul className="space-y-3 text-gray-200">
              {course.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-gold mr-3 mt-1">✦</span>
                  <span className="text-lg">{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-2 border-gold/30"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="https://lh3.googleusercontent.com/d/1du8-1SOLKngVEMGifTwI5JV_rDZxZdDQ"
              alt="Course Bundle"
              width={1500}
              height={800}
              className="max-w-md rounded-xl"
            />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-center text-gold mb-6">
            คอร์สสอนวิชาโหราศาสตร์เพื่อสร้างตำหนัก
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 mb-8 text-gray-200 text-lg">
            <li className="flex items-center">
              <span className="text-gold mr-2">◆</span> การจัดฮวงจุ้ยมังกร
            </li>
            <li className="flex items-center">
              <span className="text-gold mr-2">◆</span> การเขียนยันต์ลงเฟรมผ้าใบ
            </li>
            <li className="flex items-center">
              <span className="text-gold mr-2">◆</span> การดูดวงไพ่ยิปซีและไพ่เทพเซียน
            </li>
            <li className="flex items-center">
              <span className="text-gold mr-2">◆</span> การดูเบอร์มงคล
            </li>
            <li className="flex items-center">
              <span className="text-gold mr-2">◆</span> การดูธาตุเกิด
            </li>
            <li className="flex items-center">
              <span className="text-gold mr-2">◆</span> การลงนะหน้าทอง
            </li>
            <li className="flex items-center">
              <span className="text-gold mr-2">◆</span> การเป็นเจ้าพิธีบวงสรวง
            </li>
          </ul>

          <div className="text-center">
            <div className="bg-gradient-to-r from-gold to-yellow-600 inline-block px-8 py-3 rounded-lg">
              <p className="text-2xl md:text-3xl font-bold text-black">
                ค่าครู 9,999 บาท
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
