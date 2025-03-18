"use client";
import Image from "next/image";
import news1 from "../img/news1.png";
import news2 from "../img/news2.png";
import news3 from "../img/news3.png";
import news4 from "../img/news4.png";
import news5 from "../img/news5.png";

export default function News() {
  return (
    <div className="w-full flex flex-row justify-around items-center">
      <div className="flex flex-col justify-around items-center m-[20px] md:m-[50px] p-[20px] py-[20px]  ">
        <div className="flex animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          <Image
            src={news1}
            alt="history"
            className="hidden md:flex md: md:w-[300px] md:my-[20px] md:mx-2 my-[20px] mx-2 w-[150px]"
          />
          <Image
            src={news2}
            alt="history"
            className="md:w-[500px] md:my-[20px] md:mx-1 my-[20px] mx-2 w-[150px]"
          />
          <Image
            src={news3}
            alt="history"
            className="md:w-[300px] md:my-[20px] md:mx-1 my-[20px] mx-2 w-[100px]"
          />
        </div>

        <h1 className="text-[15px] my-[10px] w-full md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          ตำหนักเซียน 12 องค์เทพ สถานที่ศักดิ์สิทธิ์..
        </h1>

        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          ศิษได้ร่วมทำบุญกันสร้างได้ด้วยจิตศรัทธา 13 กรกฎาคม 2568 เวลา 09.59 น.
          เวียนมาบรรจบ เป็นวันครบรอบ 5 ปี ตำหนักเซียน 12 องค์เทพ พิษณุโลก
        </h1>

        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          เชิญศิษย์ร่วมงานพิธีบวงสรวงที่ตำหนัก หรือ ร่วมทำบุญผ่านช่องทางออนไลน์
        </h1>

        <ul className="text-[15px] my-[10px] w-full md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          <li>- บูชาพระรัตนตรัย</li>
          <li>- บูชาตำหนัก</li>
          <li>- บูชา 12 องค์เทพ</li>
          <li>- บูชาครู</li>
          <li>- บูชาตำหรับตำรา</li>
          <li>- บูชาสรรพวิชา</li>
          <li>- บูชาวัตถุมงคล</li>
        </ul>

        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          ขอให้ศิษย์เติบโตในหน้าที่การงานต่อไป เจริญ เจริญ นะครับ
        </h1>

        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          บัญชีร่วมบุญพร้อมเพย์ตำหนัก 0987898949 ซื่อบัญชี หาริ เพชรลานน์
          สาธุครับ
        </h1>

        <h1 className="text-[15px] my-[10px] w-full md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          โมทนาสาธุครับ
        </h1>

        <div className="flex animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          <Image
            src={news4}
            alt="history"
            className="md:w-[500px] md:my-[20px] md:mx-2 my-[20px] mx-2 w-[150px]"
          />
          <Image
            src={news5}
            alt="history"
            className="md:w-[300px] md:my-[20px] md:mx-2 my-[20px] mx-2 w-[100px]"
          />
        </div>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          เชิญชวนกัลยาณมิตรร่วมเป็นสะพานบุญ สร้าง
          ”หอพุทธชินราชปาฏิหาริย์“เพื่อประดิษฐาน องค์พระพุทธชินราช” หลวงพ่อทันใจ
          พระศรีอริยเมตไตรย หลวงปู่ทวด หลวงพ่อโต ฯ
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          สมทบร่วมจัดสร้าง “หอพระพุทธชินราชปาฏิหาริย์” 50 กอง(กองละ 9,999.99
          บาท)
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          โอนทำบุญ บัญชี ผู้ดูแลตำหนักพระแม่กวนอิมพันมือ(นาทวี) ธนาคารไทยพาณิชย์
          สาขานาทวี (สงขลา) ชื่อบัญชี คุณแม่ปิยะดา แซ่ลิ่ม เลขบัญชี 413-193630-6
        </h1>
      </div>
    </div>
  );
}
