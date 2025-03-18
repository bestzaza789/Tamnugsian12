"use client";
import Image from "next/image";
import rite1 from "../img/rite1.png";
import rite2 from "../img/rite2.png";
import rite3 from "../img/rite3.png";
import line from "../img/line.png";
import Link from "next/link";

export default function News() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center m-[20px] md:m-[50px] p-[20px] py-[20px]  animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
        <div className="flex">
          <Image
            className="w-full animate-fade animate-once animate-ease-in-out"
            src="https://lh3.googleusercontent.com/d/1Y7mcveDKxti6HAg7y4DtYHmcvWCIi9kQ"
            alt="https://lh3.googleusercontent.com/d/1Y7mcveDKxti6HAg7y4DtYHmcvWCIi9kQ"
            width="1500"
            height="800"
          />
        </div>

        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-center">
          ”มูให้ครบ จบในที่เดียว“
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
        <Link href="/contact">
          <Image src={line} alt="line" className="w-[100px] md:w-[150px]" />
        </Link>
      </div>
    </div>
  );
}
