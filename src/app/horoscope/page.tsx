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
        <Image
          className="w-full  animate-fade animate-once animate-ease-in-out"
          src="https://lh3.googleusercontent.com/d/1BrFKzImoIJxsx3ucj_5OmSmfhpLzXFDe"
          alt="https://lh3.googleusercontent.com/d/1BrFKzImoIJxsx3ucj_5OmSmfhpLzXFDe"
          width="1500"
          height="800"
        />
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          ”มูให้ครบ จบในที่เดียว(ต้องนัดหมาย วันเวลาก่อนมาทำพิธี
          เนื่องจากต้องเตรียมเครื่องไหว้ที่เกี่ยวข้อง)“
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          ครอบครู ลงนะหน้าทอง ลงนะฝ่ามือเศรษฐี ดูดวงชะตา อาบน้ำมนต์ธรณีสาร
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          ณ ตำหนักเซียน 12 องค์เทพ บ้านเหล่าขวัญ หมู่ 3 อ.วัดโบสถ์ จ.พิษณุโลก
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          พ่อครูหาริ
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
