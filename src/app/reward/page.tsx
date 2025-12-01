"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Reward() {
  const awards = [
    {
      title: "รางวัลกินรีทอง ครั้งที่ 10 ปี พ.ศ. 2568",
      image: "https://lh3.googleusercontent.com/d/1nTesg5zM3HJ2ilEUE9zaFOHMz90t-Ddd",
    },
    {
      title: "รางวัลกินรีทอง ครั้งที่ 9 ปี พ.ศ. 2567",
      image: "https://lh3.googleusercontent.com/d/1p8kqHQf6BSP6V5L7n5EEw1c7TyctfUk6",
    },
    {
      title: "รางวัลกินรีทอง ครั้งที่ 8 ปี พ.ศ. 2566",
      image: "https://lh3.googleusercontent.com/d/1GPZanLZJuLNJpUVQCJyNzZjlgDvJdRo1",
    },
  ];

  const teacherAwards = [
    "https://lh3.googleusercontent.com/d/1onm38Twm3piQmBOVLW2VKFdlB_h9Mggo",
    "https://lh3.googleusercontent.com/d/1WSEGfDaAyjXl8hI5gDqO1ZRbhr-O4NfI",
    "https://lh3.googleusercontent.com/d/1ces8Ju2Sd6YfrltkrHHic3plTrVb5ltz",
  ];

  return (
    <div className="w-full max-w-6xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-gold">เกียรติรางวัล</span>
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
      </motion.div>

      <div className="space-y-16">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-gold/30 transition-all"
          >
            <h2 className="text-2xl md:text-3xl text-gold font-bold mb-6 text-center">
              {award.title}
            </h2>
            <div className="flex justify-center">
              <Image
                src={award.image}
                width={600}
                height={800}
                alt={award.title}
                className="rounded-xl shadow-2xl border-2 border-gold/20"
              />
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800"
        >
          <h2 className="text-2xl md:text-3xl text-gold font-bold mb-8 text-center">
            เกียรติรางวัล อ.หาริ เพชรลานน์
          </h2>
          <p className="text-center text-gray-300 mb-6">ผู้ก่อตั้ง ตำหนักเซียน 12 องค์เทพ</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teacherAwards.map((img, i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src={img}
                  width={300}
                  height={400}
                  alt="Teacher Award"
                  className="rounded-xl shadow-xl border border-gray-700 hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
