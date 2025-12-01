"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHistory, FaNewspaper, FaAward, FaGraduationCap,
  FaGem, FaStar, FaCompass, FaPray, FaUserPlus, FaEnvelope
} from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/history", label: "ประวัติ", icon: FaHistory },
    { href: "/news", label: "กิจกรรม", icon: FaNewspaper },
    { href: "/reward", label: "เกียรติรางวัล", icon: FaAward },
    { href: "/course", label: "คอร์สเรียน", icon: FaGraduationCap },
    { href: "/product", label: "วัตถุมงคล", icon: FaGem },
    { href: "/horoscope", label: "พิธีกรรม", icon: FaStar },
    { href: "/fengshui", label: "ฮวงจุ้ย", icon: FaCompass },
    { href: "/rite", label: "งานพิธี", icon: FaPray },
    { href: "/applyMembership", label: "สมัครศิษย์", icon: FaUserPlus },
    { href: "/contact", label: "ติดต่อ", icon: FaEnvelope },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-20 pt-4 pb-10 overflow-y-auto border-r border-gray-800 bg-black/50 backdrop-blur-sm ml-4 rounded-xl my-4">
      <div className="px-4 py-2">
        <h2 className="text-xl font-bold text-gold mb-6 px-2">เมนูหลัก</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg transition-all duration-200 group ${isActive
                      ? "bg-gold/20 text-gold shadow-lg shadow-gold/5"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }`}
                >
                  <item.icon className={`w-5 h-5 transition-colors ${isActive ? "text-gold" : "group-hover:text-gold"}`} />
                  <span className="ml-3 font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
