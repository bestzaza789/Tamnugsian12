"use client";
import Image from "next/image";
import apply1 from "../img/apply1.png";
import apply2 from "../img/apple2.png";
import { Button } from "@chakra-ui/react";
export default function ApplyMembership() {
  return (
    <div className="w-full flex flex-col justify-around items-center">
      <div className="flex flex-col justify-around items-center w-2/3 m-[20px] md:m-[50px] p-[20px] py-[20px] rounded-xl shadow-md shadow-slate-700 animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
        <Image
          className="md:max-w-[600px]"
          src={apply2}
          alt="สมัคร ศิษย์ก้นกุฏิ สมัครโปร 300 บาท"
        />
        <div>
          <h1 className="text-start text-[10px] md:text-[30px] m-[20px]">
            ลงทะเบียน 1,299 บาท
          </h1>
          <h1 className="text-start text-[10px] md:text-[30px] m-[20px]">
            สมัคร เป็นศิษย์ก้นกุฏิ อ.หาริ เพชรลานน์ (รับเหรียญ 12
            องค์เทพปีมังกรทอง 1 เหรียญ)
          </h1>
          <h1 className="text-start text-[10px] md:text-[30px] m-[20px]">
            ได้เรียนบริหารจัดการชีวิต 365 วัน(ในเฟสบุ๊คกลุ่มปิด) เรียนจบ
            จะได้ไปใช้ชีวิต "ดุจการเฉลิมฉลอง ความสำเร็จในทุกๆวัน"
          </h1>
          <h1 className="text-start text-[10px] md:text-[30px] m-[20px]">
            เจริญ เจริญ นะครับ
          </h1>
        </div>

        <div className="">
          <a
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-700 rounded "
            href="https://docs.google.com/forms/d/e/1FAIpQLSdhOOn-5nqKoNOgoC4eq8VsnWyTlrV-inXP5ee7s7u5SZDG5w/viewform"
          >
            คลิกที่ปุ่มข้างล่างนี้เลย
          </a>
        </div>
      </div>
      <Image
        src="https://lh3.googleusercontent.com/d/1VldW_vWWtMGOnBwO3uorV5FRcyJpyJpZ"
        width="1500"
        height="800"
        alt="reward"
      />
    </div>
  );
}
