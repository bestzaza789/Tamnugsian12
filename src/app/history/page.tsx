"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function History() {
  const historyItems = [
    {
      text: "ตำหนักเซียน 12 องค์เทพ จังหวัด พิษณุโลก (เดิมชื่อ ตำหนักเซียนเรือนเพชรลานนา) ตั้งอยู่ อำเภอวัดโบสถ์",
      image: "https://lh3.googleusercontent.com/d/1dJTAhw2pTysE1Sv2nOzq1BZhxYxkyQ6-",
    },
    {
      text: "ก่อตั้ง โดย อาจารย์หาริ เพชรลานน์ และศรัทธาบุญจากศิษยานุศิษย์ทั่วโลก เมื่อวันที่ 13 กรกฎาคม พ.ศ. 2561",
      image: null,
    },
    {
      text: "12 องค์เทพ ประกอบด้วย ไท่เสียงเหล่ากุง พระแม่กวนอิม ลื่อทงปิง น่าไฉ่ฮั้ว ฮั่นเชียงจื่อ เช่าก๊กกู๋ เตียวกั๋วเล่า ทิก๊วยลี้ ฮ้อเซียนโกว ฮั่งเจ็งลี้ ซำง้วน และ ปู่ชีวกโกมารภัทร",
      image: "https://lh3.googleusercontent.com/d/1U4-DCsiDh16T5SlZVJTwFAcVANwRa9VS",
      extraImages: ["https://lh3.googleusercontent.com/d/1pebtx0AkkflSW-CASk7NjVGyGWg3Ahlr"],
    },
    {
      text: "ตำหนักเซียน 12 องค์เทพ อำเภอวัดโบสถ์ จังหวัดพิษณุโลก ผู้ดูแล พ่อครูหาริ เพชรลานน์",
      image: "https://lh3.googleusercontent.com/d/1SN7VkV2UW3NMhX4KhoXCMAldu06jQWsa",
    },
    {
      text: "ตำหนักเซียน 12 องค์เทพ รามคำแหง 53 กรุงเทพ ผู้ดูแล อาจารย์จุ้ย และ อาจารย์ท็อป ตำหนักเซียน",
      image: "https://lh3.googleusercontent.com/d/15ImlGPZ6hNXqtFXB6Ippc1YtbidwybXG",
    },
    {
      text: "ตำหนักเซียน 12 องค์เทพ สาขาปทุมธานี ผู้ดูแล อาจารย์แอนนี่ ตำหนักเซียน",
      image: "https://lh3.googleusercontent.com/d/1BIN7GsdKibD01mDr1yy8hI5lfQiokzE6",
    },
    {
      text: "ตำหนักเซียน 12 องค์เทพ เรือนบุญมาดามสายติดดิน สระบุรี ผู้ดูแล อาจารย์สาว ตำหนักเซียน",
      image: "https://lh3.googleusercontent.com/d/1tnE2Bvnd1HrE_konPgBcvc4UAQbYMml6",
    },
    {
      text: "ตำหนักเซียน 12 องค์เทพ สาขาสันป่าตอง เชียงใหม่ ผู้ดูแล อาจารย์หนุ่ย ตำหนักเซียน",
      image: "https://lh3.googleusercontent.com/d/1IQ437msexFOZx9YZmRnz5goCyh2KOBSW",
    },
    {
      text: "ตำหนักเซียน 12 องค์เทพ สาขาลำพูน ผู้ดูแล อาจารย์นัท ตำหนักเซียน",
      image: "https://lh3.googleusercontent.com/d/1D-HiNVxJiVgS8A6jeHk1MAxpKxp-2jaL",
    },
    {
      text: "ตำหนักเซียน 12 องค์เทพ สาขาจันทบุรี ผู้ดูแล อาจารย์อ๋อม ตำหนักเซียน",
      image: "https://lh3.googleusercontent.com/d/1oYX5u58orjjly7-1p9IMqXaHBop-bSpl",
    },
    {
      text: "ตำหนักเซียน 12 องค์เทพ สาขามาเลเซีย ผู้ดูแล อาจารย์อนัญญา ตำหนักเซียน",
      image: "https://lh3.googleusercontent.com/d/1L9wXZJszbnRUu-1udPqbJ1JSvtiPdt5I",
    },
    {
      text: "ตำหนักเซียน 12 องค์เทพ สาขาออสเตรเลีย ผู้ดูแล อาจารย์ปทิดา ตำหนักเซียน",
      image: "https://lh3.googleusercontent.com/d/1E4DDbzcZGM9EifzDAwxQ7kk9dxa1dC8X",
    },
    {
      text: "ตำหนักเซียน 12 องค์เทพ สาขาสิงคโปร์ ผู้ดูแล อาจารย์สยาม ตำหนักเซียน",
      image: null,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 pt-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ประวัติ <span className="text-gold">ตำหนักเซียน</span>
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
      </motion.div>

      <div className="space-y-16">
        {historyItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
          >
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-gold/30 transition-colors shadow-lg">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex-1 w-full">
              {item.image && (
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/20">
                  <Image
                    src={item.image}
                    width={800}
                    height={600}
                    alt="History Image"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
              )}
              {item.extraImages && (
                <div className="mt-4 grid grid-cols-1 gap-4">
                  {item.extraImages.map((img, i) => (
                    <div key={i} className="relative group rounded-2xl overflow-hidden shadow-xl border border-gray-800">
                      <Image
                        src={img}
                        width={800}
                        height={600}
                        alt="Extra History Image"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
