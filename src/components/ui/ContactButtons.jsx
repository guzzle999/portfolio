import { useState } from "react";
import { Toaster, toast } from "sonner";
import { Copy, CopyCheck, ArrowRight } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

const EMAIL_ADDRESS = "amonrat9298@gmail.com";


// const LiquidButton = ({ children, className = "", ...props }) => {
//   return (
//     <button
//       className={`
//         relative overflow-hidden group 
//         px-6 py-3 rounded-full 
//         font-medium text-white 
//         bg-purple-300/20 backdrop-blur-sm 
//         border border-purple-400/50 
//         shadow-lg transition duration-300 ease-in-out
//         ${className}
//       `}
//       {...props}
//     >
//       <span className="relative z-10 flex items-center gap-1">{children}</span>
//       {/* เอฟเฟกต์ "Liquid" (แสงวิ่งจากซ้ายไปขวา) */}
//       <span
//         className="absolute inset-0 bg-white opacity-10 
//                    transform -skew-x-12 translate-x-[-150%] 
//                    group-hover:translate-x-[150%] transition-transform 
//                    duration-700 ease-out z-0"
//         aria-hidden="true"
//       ></span>
//     </button>
//   );
// };

// คอมโพเนนต์หลักที่รวมปุ่มและ Toast
export default function ContactButtons() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(EMAIL_ADDRESS)
      .then(() => {
        setCopied(true);
        // แสดง Sonner Toast
        toast("Email copied!", {
          description: `${EMAIL_ADDRESS} copied to clipboard.`,
          position: "bottom-right",
          duration: 3000,
          icon: <CopyCheck className="w-4 h-4" />,
          action: {
            label: "Send Email",
            onClick: () => {
              window.open(`mailto:${EMAIL_ADDRESS}`);
            },
          },
        });

        // รีเซ็ตสถานะ copied หลังจาก 2 วินาที
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
        toast.error("Failed to copy email.");
      });
  };

  return (
    <div className="flex items-center space-x-2">
      {/* ปุ่ม Liquid Glass: Let's Connect */}
      <div className="group relative">
        <AnimatedShinyText
          shimmerWidth={300}
          className="text-xl font-bold py-2
      bg-slate-800/50  backdrop-blur-sm
      shadow-slate-500/40 hover:scale-[1.02] transition
      group-hover:animate-shiny-text"
        >
          <span className="flex items-center gap-2 cursor-context-menu">
            Let's Connect
            <ArrowRight className="w-5 h-5 text-slate-200" />
          </span>
        </AnimatedShinyText>
      </div>

      {/* ปุ่ม Copy Email */}
      <button
        onClick={handleCopyEmail}
        className={`
    p-3 transition duration-50 ease-in-out cursor-pointer
    ${copied ? "text-zinc-500" : "text-zinc-400 hover:text-white"}
    backdrop-blur-sm shadow-md
  `}
        title="Copy Email Address"
      >
        {copied ? (
          <div className="flex gap-1">
            <CopyCheck className="w-5 h-5" />
          </div>
        ) : (
          <Copy className="w-5 h-5" />
        )}
      </button>

      {/* Toaster Container สำหรับแสดง Sonner Toast */}
      <Toaster richColors position="bottom-right" />
    </div>
  );
}


