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

        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          งานบวงสรวง ตำหนักเซียน 12 องค์เทพ จังหวัดพิษณุโลก วันที่ 13 กรกฏาคม
          พ.ศ. 2567 เวลา 09.59 น.
        </h1>
        <ul className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          <li>1. ได้เข้าร่วมพิธีครอบครูรับพลังเทพ ประจำปี</li>
          <li>
            2. ได้พบปะ ศิษย์พี่ ศิษย์น้อง รับของมงคล สำนักต่างๆ ที่นำมาฝากกัน
          </li>
          <li>
            3. ได้เรียนวิชาเจ้าพิธีในงานบวงสรวงฟรี
            (แนะนำให้ศิษย์ผู้ชายใส่ชุดเจ้าพิธีมาร่วมงาน ถ้ามี)
          </li>
        </ul>

        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          รถตู้ คันที่ 1 กำหนดการเดินทาง จากกรุงเทพ วันที่ 12 กรกฏาคม พ.ศ. 2567
          เวลา 16.59 น. ปตท.สำนักงานใหญ่ วิภาวดี-รังสิต ผู้ประสานงาน อ.จุ้ย โทร
          095-5914692
        </h1>
        <ul className="text-[15px] w-full my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          <li>1. อาจารย์จุ้ย</li>
          <li>2. อาจารย์เหลิม</li>
          <li>3. อาจารย์อนัญญา</li>
          <li>4. อาจารย์แอนนี่</li>
          <li>5. ศิษย์ชนะ (พี่ดำ)</li>
        </ul>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          นอนพัก คืนวันที่ 12 ที่ "ปายรีสอร์ท" เพื่อรอเข้าร่วมพิธีเช้าวันที่ 13
          และ ไปไหว้พระพุทธชินราชต่อหลังเสร็จพิธี
        </h1>
        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          กำหนดการเดินทางกลับกรุงเทพ วันที่ 13 กรกฏาคม พ.ศ. 2567
          เดินทางกลับกรุงเทพ เวลา 16.30 น.
        </h1>
        <h1 className="text-[15px] my-[10px] w-full md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          ศิษย์สามารถร่วมเป็นเจ้าภาพ งานบวงสรวง
        </h1>
        <ul className="text-[15px] my-[10px] w-full md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          <li>- เจ้าภาพเจ้าพิธี</li>
          <li>- เจ้าภาพบายสี</li>
          <li>- เจ้าภาพเครื่องไหว้</li>
          <li>- เจ้าภาพโรงทานมื้อเช้า (อาหารเหนือ ฝีมือ ย่าบุญมา)</li>
        </ul>
        <h1 className="text-[15px] my-[10px] w-full md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          (ประมาณรายจ่ายเจ้าภาพรวม 15,000 บาท) ที่บัญชีพร้อมเพย์ตำหนัก
          0877898262 ซื่อบัญชี ชยพล เพชรลานน์ สาธุครับ
        </h1>
        <h1 className="text-[15px] my-[10px] w-full md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          รายชื่อผู้ร่วมเป็นเจ้าภาพ
        </h1>
        <ul className="text-[15px] w-full my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          <li>- อ.ปรียาณัณท์ เซนเนนท์ ร่วมเป็นเจ้าภาพ 2000 บาท</li>
          <li>- ศิษย์มงคล สอนใจมั่น ร่วมเป็นเจ้าภาพ 395 บาท</li>
          <li>- อาจารย์อนัญญา ตำหนักเซียนมาเลเซีย ร่วมเป็นเจ้าภาพ 500 บาท</li>
          <li>- อาจารย์เต ตำหนักเซียนสันป่าตอง ร่วมเป็นเจ้าภาพ 1000 บาท</li>
          <li>- ศิษย์อมรพันธ์ แสนวงษ์ไชยา ร่วมเป็นเจ้าภาพ 1000 บาท</li>
          <li>- ศิษย์ไม่ประสงค์ออกนาม ร่วมเป็นเจ้าภาพ 100 บาท</li>
        </ul>
        <h1 className="text-[15px] my-[10px] w-full md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          ร่วมกันสืบสานงานตำหนัก ขอให้ศิษย์ทุกท่าน เจริญ รุ่งเรือง ครับ
        </h1>
        <ul className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          <li>สำรองห้องพัก คืนละ 400 บาท แจ้งอาจารย์หาริ เพชรลานน์</li>
          <li>- อาจารย์จุ้ย ตำหนักเซียน เดินทางจากกรุงเทพ ด้วยรถตู้ </li>
          <li>จองห้องพัก 1 ห้อง วันที่ 12 กรกฎาคม 2567</li>

          <li>- อาจารย์จุ้ย ตำหนักเซียน เดินทางจากกรุงเทพ ด้วยรถตู้</li>
          <li>จองห้องพัก 1 ห้อง วันที่ 12 กรกฎาคม 2567</li>

          <li>- อาจารย์ท็อป ตำหนักเซียน เดินทางจากกรุงเทพ ด้วยรถส่วนตัว</li>

          <li>
            จองห้องพัก 1 ห้อง วันที่ 11-12 รวม 2 คืน เพื่อมาช่วยเตรียมสถานที่
          </li>

          <li>- อาจารย์จีรนันท์ ตำหนักเซียน เดินทางจากจังหวัดลำพูน</li>

          <li>จองห้องพัก 1 ห้อง วันที่ 12 กรกฎาคม 2567</li>

          <li>
            - อาจารย์อนัญญา ตำหนักเซียน เดินทางจากประเทศมาเลเซีย
            ต่อการเดินทางจากกรุงเทพ ด้วยรถตู้
          </li>

          <li>จองห้องพัก 1 ห้อง วันที่ 12 กรกฎาคม 2567</li>

          <li>- ศิษย์ณปภัช กระแสสุข เดินทางจากจังหวัดเชียงใหม่</li>

          <li>จองห้องพัก 1 ห้อง วันที่ 12 กรกฎาคม 2567</li>

          <li>- อาจารย์ปรียาณัณท์ ตำหนักเซียนสระบุรี เดินทางเองจากสระบุรี</li>

          <li>จองห้องพักเบื้องต้น 1 ห้อง วันที่ 12 กรกฎาคม 2567</li>

          <li>- ศิษย์ชนะ “พี่ดำ” ตำหนักเซียน เดินทางจากกรุงเทพ ด้วยรถตู้</li>

          <li>จองห้องพัก 1 ห้อง วันที่ 12 กรกฎาคม 2567</li>

          <li>- ศิษย์อมรพันธ์ ตำหนักเซียน เดินทางมาร่วมงาน ด้วยรถส่วนตัว</li>
          <li>- อาจารย์เล็ก ตำหนักเซียน เดินทางมาร่วมงาน ด้วยรถส่วนตัว</li>
          <li>- อาจารย์เหลิม ตำหนักเซียน เดินทางจากกรุงเทพ ด้วยรถตู้</li>

          <li>จองห้องพัก 1 ห้อง วันที่ 12 กรกฎาคม 2567</li>

          <li>- อาจารย์แอนนี่ ตำหนักเซียน เดินทางจากกรุงเทพ ด้วยรถตู้</li>

          <li>จองห้องพัก 1 ห้อง วันที่ 12 กรกฎาคม 2567</li>

          <li>รวมห้องพัก 9 ห้อง</li>
        </ul>

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
