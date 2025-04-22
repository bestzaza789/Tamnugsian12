"use client";
import Image from "next/image";
import HR1 from "../img/HR1.png";
import HR2 from "../img/HR2.png";
import HR3 from "../img/HR3.png";
import HR4 from "../img/HR4.png";
import line from "../img/line.png";
import Link from "next/link";

export default function News() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center m-[20px] md:m-[50px] p-[20px] py-[20px]  animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
        {/* <Image
          className="w-full  animate-fade animate-once animate-ease-in-out"
          src="https://lh3.googleusercontent.com/d/1BrFKzImoIJxsx3ucj_5OmSmfhpLzXFDe"
          alt="https://lh3.googleusercontent.com/d/1BrFKzImoIJxsx3ucj_5OmSmfhpLzXFDe"
          width="1500"
          height="800"
        /> */}
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          ”มูให้ครบ จบในที่เดียว(ต้องนัดหมาย วันเวลาก่อนมาทำพิธี
          เนื่องจากต้องเตรียมเครื่องไหว้ที่เกี่ยวข้อง)“
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          ครอบครู ลงนะหน้าทอง ลงนะฝ่ามือเศรษฐี ดูดวงชะตา อาบน้ำมนต์ธรณีสาร
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          ณ ตำหนักเซียน 12 องค์เทพ
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          ครอบครู เป็น "ศิษย์มีครู"
        </h1>
        <Image
          className="w-full  animate-fade animate-once animate-ease-in-out"
          src="https://lh3.googleusercontent.com/d/1VPJkdvHFaiytBkpO669K6AatTd3ZQY2l"
          alt="https://lh3.googleusercontent.com/d/1VPJkdvHFaiytBkpO669K6AatTd3ZQY2l"
          width="1500"
          height="800"
        />
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          ลงนะหน้าทอง(นะสีดามหาสเน่ห์)
        </h1>
        <Image
          className="w-full  animate-fade animate-once animate-ease-in-out"
          src="https://lh3.googleusercontent.com/d/1it8ZKfZ2FYKymrcsz_LMhX8SIOQOYWmB"
          alt="https://lh3.googleusercontent.com/d/1it8ZKfZ2FYKymrcsz_LMhX8SIOQOYWmB"
          width="1500"
          height="800"
        />
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          ลงนะฝ่ามือเศรษฐี
        </h1>
        <Image
          className="w-full  animate-fade animate-once animate-ease-in-out"
          src="https://lh3.googleusercontent.com/d/1t8LLBP1tLoE-HLVHQyT6MVq8am56riQj"
          alt="https://lh3.googleusercontent.com/d/1t8LLBP1tLoE-HLVHQyT6MVq8am56riQj"
          width="1500"
          height="800"
        />
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          ดูดวงชะตา ด้วย"ไพ่เทพเซียน"
        </h1>
        <Image
          className="w-full  animate-fade animate-once animate-ease-in-out"
          src="https://lh3.googleusercontent.com/d/1WMellBsyimeO3NFuaAHjgMq6HzqhU4Kf"
          alt="https://lh3.googleusercontent.com/d/1WMellBsyimeO3NFuaAHjgMq6HzqhU4Kf"
          width="1500"
          height="800"
        />
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          อาบน้ำมนต์ธรณีสาร(ล้างคุณไสย์มนต์ดำฯ)
        </h1>
        <Image
          className="w-full  animate-fade animate-once animate-ease-in-out"
          src="https://lh3.googleusercontent.com/d/1lLaZy3JfYC9jMXX3NC6xnbz3BcJ9yYh8"
          alt="https://lh3.googleusercontent.com/d/1lLaZy3JfYC9jMXX3NC6xnbz3BcJ9yYh8"
          width="1500"
          height="800"
        />
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          สอบถามรายละเอียดเพิ่มเติมกับพ่อครูหาริ
        </h1>

        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          คลิกที่ปุ่มข้างล่างนี้เลย
        </h1>
        <Link href="/contact">
          <Image src={line} alt="line" className="w-[100px] md:w-[150px]" />
        </Link>
      </div>
    </div>
  );
}
