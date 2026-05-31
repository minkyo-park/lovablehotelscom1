import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const AFFILIATE_LINK = "http://app.ac/utw0WqM33";

interface CopyCodeButtonProps {
  code: string;
  label?: string;
  variant?: "default" | "large";
  href?: string;
}

const CopyCodeButton = ({ code, label = "코드 복사 & 적용하기", variant = "default", href }: CopyCodeButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      toast.success(`할인코드 "${code}" 가 복사되었습니다!`, {
        description: "호텔스닷컴 결제 페이지에서 붙여넣기 하세요.",
      });
      setTimeout(() => setCopied(false), 2000);
    });
    window.open(href ?? AFFILIATE_LINK, "_blank", "noopener,noreferrer");
  };

  if (variant === "large") {
    return (
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-secondary border-2 border-dashed border-border font-mono text-base sm:text-lg font-bold text-foreground">
          <span>{code}</span>
        </div>
        <button
          onClick={handleClick}
          className="btn-cta px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-center"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "복사 완료!" : label}
          <ExternalLink size={12} />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="btn-cta px-2.5 py-2 md:px-4 md:py-2.5 rounded-md md:rounded-lg font-bold text-[10px] md:text-sm flex items-center gap-1 md:gap-2 w-full justify-center"
    >
      {copied ? <Check size={12} className="md:hidden" /> : <Copy size={12} className="md:hidden" />}
      {copied ? <Check size={16} className="hidden md:block" /> : <Copy size={16} className="hidden md:block" />}
      <span className="font-mono">{code}</span>
      <span className="hidden md:inline">{copied ? "복사 완료!" : "복사 & 적용"}</span>
      <span className="md:hidden">{copied ? "완료!" : "적용"}</span>
    </button>
  );
};

export default CopyCodeButton;
