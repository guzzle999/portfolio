import { useState } from "react";
import { Toaster, toast } from "sonner";
import { Copy, CopyCheck, ArrowRight } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

const EMAIL_ADDRESS = "amonrat9298@gmail.com";


export default function ContactButtons({onEmailCopy}) {
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

        if (onEmailCopy)  {
          onEmailCopy();
        }
        // รีเซ็ตสถานะ copied หลังจาก 2 วินาที
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
        toast.error("Failed to copy email.");
      });
  };

  return (
    <div className="md:flex items-center space-x-2 hidden">
      {/* ปุ่ม Liquid Glass: Let's Connect */}
      <div
        className="group relative flex items-center justify-center
                    rounded-xl backdrop-blur-lg
                   shadow-slate-500/40 hover:scale-[1.02] transition
                   cursor-context-menu"
      >
        <AnimatedShinyText
          shimmerWidth={300}
          className="text-xl font-bold py-2 px-4
                     animate-shiny-text"
        >
          <span className="flex items-center gap-2 ml-2">
            Let's Connect
            <ArrowRight className="w-5 h-5 text-[#E2E8F0]" />
          </span>
        </AnimatedShinyText>
      </div>

      {/* ปุ่ม Copy Email */}
      <button
        onClick={handleCopyEmail}
        className={`
    p-3 transition duration-50 ease-in-out cursor-pointer rounded-full outline-none
    ${
      copied
        ? "text-zinc-400"
        : "text-slate-400 hover:text-zinc-400 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] border-white/10 border backdrop-blur-lg"
    }
    backdrop-blur-sm
  `}
        title="Copy Email Address"
      >
        {copied ? (
          <div className="flex gap-1">
            <CopyCheck className="w-7 h-7" />
          </div>
        ) : (
          <Copy className="w-6 h-6" />
        )}
      </button>

      {/* Toaster Container สำหรับแสดง Sonner Toast */}
      <Toaster richColors position="bottom-right" />
    </div>
  );
}


