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
        <div className="flex flex-row">
          <Image
            className="w-1/2 m-1 animate-fade animate-once animate-ease-in-out"
            src="https://lh3.googleusercontent.com/d/1vcaLlNHe1kW8qPGiqgWYCWFtaPSImVRh"
            alt="https://lh3.googleusercontent.com/d/1vcaLlNHe1kW8qPGiqgWYCWFtaPSImVRh"
            width="1500"
            height="800"
          />
          <Image
            className="w-1/2 m-1 animate-fade animate-once animate-ease-in-out"
            src="https://lh3.googleusercontent.com/d/17wj6U5Hn0uEYh0urfd0Jcn4xdTmoTq0K"
            alt="https://lh3.googleusercontent.com/d/17wj6U5Hn0uEYh0urfd0Jcn4xdTmoTq0K"
            width="1500"
            height="800"
          />
        </div>

        <h1 className="text-[15px] my-[10px] w-full md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          ตำหนักเซียน 12 องค์เทพ สถานที่ศักดิ์สิทธิ์..
        </h1>

        <h1 className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          ศิษได้ร่วมทำบุญกันสร้างได้ด้วยจิตศรัทธา 13 กรกฎาคม 2568 เวลา 09.59 น.
          เวียนมาบรรจบ เป็นวันครบรอบ 7 ปี ตำหนักเซียน 12 องค์เทพ พิษณุโลก
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
        <section className="text-[15px] my-[10px] md:text-[30px] md:my-[20px] text-start animate-fade-right animate-once animate-ease-in-out animate-normal animate-fill-forwards">
          <p className="mb-4">
            สืบเนื่องจาก อาจารย์หาริ เพชรลานน์ ได้ออกแสวงบุญ ที่
            ตำหนักพระแม่กวนอิมพันมือ อำเภอนาทวี จังหวัดสงขลา
          </p>
          <p className="mb-4">
            พบว่า ที่ตำหนักพระแม่กวนอิมพันมือ มีศรัทธาบุญถวาย
            พระพุทธรูปมามอบให้ที่ตำหนักฯ จำนวนมาก แต่สถานที่ ประดิษฐาน
            ยังไม่เรียบร้อย (ยังเป็นโรงเรือนชั่วคราว) ไม่สะดวก ไม่สวยงาม
            ต่อนักแสวงบุญ ที่มากราบขอพร
          </p>
          <p className="mb-4">
            อาจารย์หาริ และศิษยานุศิษย์ จึงมีความประสงค์ ร่วมสร้างบุญใหญ่
            ร่วมกับศิษย์และกัลยาณมิตรของศิษย์ทุกท่าน เพื่อเติมให้โอ่งบุญ รับยุค
            9 ให้ทุกท่านได้ถึงพร้อม สามารถมีชีวิตที่รุ่งโรจน์ดุจปาฏิหาริย์
            ยาวนานสืบไป ยิ่งมีคนมากราบไหว้ยิ่งได้อานิสงฆ์
          </p>
          <p className="mb-4">
            จึงเชิญชวนศิษย์และกัลยาณมิตรร่วมเป็นสะพานบุญ สร้าง
            ”หอพุทธชินราชปาฏิหาริย์“เพื่อประดิษฐาน องค์พระพุทธชินราช
            หลวงพ่อทันใจ พระศรีอริยเมตไตรย หลวงปู่ทวด หลวงพ่อโต ฯ ในครั้งนี้ครับ
          </p>
          <p className="mb-4">
            บัญชี ร่วมจัดสร้าง “หอพระพุทธชินราชปาฏิหาริย์” 50 กอง(กองละ 9,999.99
            บาท)
          </p>
          <p className="mb-4">
            1. ผู้ดูแลตำหนักพระแม่กวนอิมพันมือ (นาทวี)
            <br />
            ธนาคารไทยพาณิชย์ สาขานาทวี (สงขลา)
          </p>
          <p className="mb-4">
            ชื่อบัญชี: คุณแม่ปิยะดา แซ่ลิ่ม
            <br />
            เลขบัญชี: 413-193630-6
          </p>

          <p className="mb-4">
            2.ธนาคารไทยพาณิชย์ ชื่อบัญชี อ.หาริ เพชรลานน์ เลขบัญชี 405-3-15871-7
          </p>

          <h3 className="font-bold mb-4 text-[18px] md:text-[30px]">
            รายนามผู้ร่วมบุญ
          </h3>

          {/* กองบุญที่ 1 */}
          <section>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              กองบุญที่ 1
            </h4>
            <p>
              1. คุณแม่ปิยะดา แซ่ลิ่ม 50 ร่วมบุญเปิดบัญชี
              <br />
              2. อาจารย์หาริ เพชรลานน์ 999
              <br />
              3. อาจารย์อรญา นวลสุวรรณ (ร่างทรงเจ้าพ่อคอหงส์) 50
              ร่วมบุญเปิดบัญชี
              <br />
              4. อาจารย์จีรนันท์ จงศรีวัฒนาพล 200 (ใส่ซอง)
              <br />
              5. เจ้าหน้าที่ธนาคารไทยพาณิชย์ 956
              <br />
              6. อาจารย์ชลาลัย แก้วพาก 599
              <br />
              7. อาจารย์อมรพันธ์ แสนวงษ์ไชยา 500
              <br />
              8. อาจารย์ปทิดา เวอร์ซาเช่ 999
              <br />
              9. กลุ่มห้องแสกนตรวจรักษาโรค 111
              <br />
              10. อาจารย์คงกฤช รุ่งนาค 999
              <br />
              11. อาจารย์ณิชาดา กีรติบวรเดช 299
              <br />
              12. อาจารย์สาธิต สพานรัตน์ 200
              <br />
              13. คุณไข่มุกด์ แจวสกุล 319
              <br />
              14. อาจารย์บรรยวัสถ์ เต็กสงวน 499.35
              <br />
              15. คุณวรารินทร์ บุญรักษา 199
              <br />
              16. อาจารย์อนัญญา โสภาวรรณ 966
              <br />
              17. อาจารย์สมภพ สุมาสา 108
              <br />
              18. อาจารย์ชยุตภ์ พันนิทา 108
              <br />
              19. อาจารย์คัทรียา อัตถากร 100
              <br />
              20. คุณทวาย โรจนนิล 300
              <br />
              21. อาจารย์ชนิดา คงสุวรรณ 299
              <br />
              22. ผอ.พีรวัฒน์ สิโรตม์พิพัฒ 1,000
            </p>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              ยอดศรัทธาบุญรวม 9,999.99 บาท
            </h4>
          </section>

          <section>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              กองบุญที่ 2(สะพานบุญ ร่วม อ.จุ้ย อ.จีรนันท์ อ.ส้มปาณิศรา)
            </h4>
            <p>
              1. อาจารย์วีระพงษ์ บริสุทธิ์สุขกมล 999.99
              <br />
              2. คุณชมพูขนิษฐ์ สูตะบุตร 999
              <br />
              3. คุณปณชัย กิตติดนัย 500
              <br />
              4. อาจารย์เขตโสภณ ค่อมสิงห์ 99
              <br />
              5. คุณปิติ เต็มคำพร 99
              <br />
              6. อาจารย์ภูมิพัฒน์ กีรติชำนาญวัฒน์ 200
              <br />
              7. อาจารย์รมณี ลายลิขิต 199
              <br />
              8. คุณชนะ พัฒนะผล 199
              <br />
              9. คุณ Taniya S 100
              <br />
              10. คุณปฏิญญา 108
              <br />
              11. คุณณัฐวรรณ 100
              <br />
              12. คุณชัยกฤต สุวรรณมาลี 160
              <br />
              13. คุณธีรพัฒน์ เอื้ออารักษ์ 300
              <br />
              14. คุณพีรพล พรมมา และครอบครัว 200
              <br />
              15. ผอ.จีรชัย วงศ์ชารี, น.ส.สัญชญาภัทร์ จงศรีวัฒนพร,
              ด.ช.พรหมพิริยะ วงศ์ชารี (น้องโพธิ์) 500
              <br />
              16. วิภาดา เดโชสุทธิธนา 199
              <br />
              17. ศิษย์พิมประภัสสร ไสยวิจีณ และ Mr.Cheon Kang Yee 500
              <br />
              18. อาจารย์ปาณิศรา ว่องไว 2,000
              <br />
              19. คุณยุวนารถ สินบวรเศรษฐ์ 1,000
              <br />
              20. คุณมุกดา กลิ่นหอม 300
              <br />
              21. น.ส.ปภาดา บริสุทธิ์สุขกมล 789
              <br />
              22. คุณแม่จริยา ลี้สัมพันธ์ 999
            </p>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              ยอดศรัทธาบุญรวม 10,344.99 บาท (7 พฤษภาคม 2567)
            </h4>
          </section>

          <section>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              กองบุญ ที่ 3 (สะพานบุญ อ.จุ้ย)
            </h4>
            <p>
              คุณธนศักดิ์ วหาวิศาล ประธานเจ้าหน้าที่บริหาร
              บริษัทน้ำมันอพอลโล(ไทย) จำกัด และครอบครัว 9,999.99 บาท
            </p>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              ยอดศรัทธาบุญ 9,999.99 บาท
            </h4>
          </section>

          <section>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              กองบุญ ที่ 4 (สะพานบุญ ร่วม อ.เหลิม ตำหนักเซียน)
            </h4>
            <p>
              1. อาจารย์เฉลิมพล สุขชัย 519.99
              <br />
              2. อาจารย์อภิญญา จันทร์แก้ว 199
              <br />
              3. คุณจริยา บุญรักษ์ 100
            </p>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              ยอดศรัทธาบุญ 818.99 บาท (7 พฤษภาคม 2567)
            </h4>
          </section>

          <section>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              กองบุญ ที่ 5 (สะพานบุญ ร่วม อ.ปทิดา และ อาจารย์ท็อป ตำหนักเซียน)
            </h4>
            <p>
              1. คุณสุพัตรา เจษฎาอารีวงศ์ 999.99
              <br />
              2. อาจารย์รณกร จิตพฤกษา 499
              <br />
              3. คุณสาธิต จิตต์จงรัก 1,000
              <br />
              4. คุณอรอุมา ผลสมบูรณ์ 89
              <br />
              5. คุณชุติกาญจน์ เกื้อนุ้ย 19
              <br />
              6. คุณไวยกร จิตพฤกษา 99
            </p>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              ยอดศรัทธาบุญ 1,705.99 บาท (7 พฤษภาคม 2567)
            </h4>
          </section>

          <section>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              กองบุญที่ 6
            </h4>
            <p>
              อาจารย์อนัญญา โสภาวรรณ และครอบครัว ตำหนักเซียนมาเลเซีย 9,999.99
              บาท
            </p>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              ยอดศรัทธาบุญ 9,999.99 บาท
            </h4>
          </section>

          <section>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              กองบุญ ที่ 7(ศรัทธาบุญร่วมอาจารย์อนัญญา โสภาวรรณ)
            </h4>
            <p>
              เถ้าแก่ Vya Farming และ Goh Family ศรัทธาบุญ ประเทศ Malaysia
              9,999.99 บาท
            </p>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              ยอดศรัทธาบุญ 9,999.99 บาท
            </h4>
          </section>

          <section>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              กองบุญ ที่ 8 ศรัทธาบุญร่วมอาจารย์ยอด
              ตำหนักเซียน(อาจารย์กัญจน์ธีรัตน์ จันจัด)
            </h4>
            <p>
              ศรัทธาบุญร่วมอาจารย์ยอด ตำหนักเซียน (อาจารย์กัญจน์ธีรัตน์ จันจัด)
            </p>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              ยอดศรัทธาบุญ 9,999.99 บาท
            </h4>
          </section>

          <section>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              จองกองบุญ ที่ 9 ศรัทธาบุญร่วมอาจารย์ยอด
              ตำหนักเซียน(อาจารย์กัญจน์ธีรัตน์ จันจัด)
            </h4>
          </section>

          <section>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              กองบุญ ที่ 10 (ศรัทธาบุญร่วม อ.หาริ ตำหนักเซียน)
            </h4>
            <p>
              1. หัวหน้าวีรศักดิ์ เสียงหวาน 599
              <br />
              2. ศิษย์เยาวลักษณ์ จันทร์สอน 1,999
              <br />
              3. ศิษย์มิ่งขวัญ สุวรรณลาภา 200
            </p>
            <h4 className="font-semibold mt-8 mb-4 text-[16px] md:text-[24px]">
              ยอดศรัทธาบุญ 2,798 บาท
            </h4>
          </section>

          <p className="mt-8">
            ศรัทธาบุญสร้างหอพุทธชินราชปาฏิหาริย์ศิษยานุศิษย์ตำหนักเซียน 12
            องค์เทพ..
          </p>
          <p className="mt-8">
            ขอจงเจริญศรี สวัสดี มีชัย ทุกท่าน ทุกคน นะครับ สาธุ
          </p>
        </section>
      </div>
    </div>
  );
}
