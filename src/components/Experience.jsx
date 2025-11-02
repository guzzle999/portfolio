import React, { useState } from 'react'
import { experiences } from "../data/experiences";
import { Minus, Plus, ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem= ({item, isOpen, onToggle}) => {
  const {year, role, details} = item;

  return (
    <div className="mb-4 p-4 w-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-blue-500/20 transition">
      <div
        className="md:flex cursor-pointer md:items-center md:justify-between px-4 py-2 text-white"
        onClick={onToggle}
      >
        <h3 className="text-lg text-blue-200 font-semibold ">{role}</h3>
        <div className="md:flex md:items-center space-x-4 hidden">
          <span className="text-sm text-purple-100">{year}</span>
          {/* แสดงไอคอน + หรือ - ตามสถานะ isOpen */}
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
        <div className="md:hidden flex md:items-center space-x-4">
          <span className="text-sm text-purple-100">{year}</span>
          {/* แสดงไอคอน + หรือ - ตามสถานะ isOpen */}
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      <div
        className={`overflow-hidden  text-blue-100 transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="p-2">
          <div className="flex flex-col justify-between md:flex-row">
            {/* ส่วนของข้อความ */}
            <div className="flex px-4">
              <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed ">
                {details.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ExperienceAccordion = () => {

  const [openIndex, setOpenIndex] = useState(0);

  // ฟังก์ชันสำหรับสลับการเปิด-ปิด
  const handleToggle = (index) => {
    // ถ้าคลิกอันที่เปิดอยู่แล้ว ให้ปิด (set เป็น null)
    // ถ้าคลิกอันที่ปิดอยู่ ให้เปิดอันนั้น
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div
        id="experience"
        className="md:pt-25 md:pb-6 py-5 flex items-center justify-center font-bold md:text-5xl text-4xl text-gray-300"
      >
        Experience
      </div>
      <div className="w-full max-w-5xl mx-auto p-6">
        {experiences.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openIndex === index} // ส่งสถานะว่าเปิดหรือไม่
            onToggle={() => handleToggle(index)} // ส่งฟังก์ชันเมื่อคลิก
          />
        ))}
      </div>
    </>
  );
};

export default ExperienceAccordion;