import CopyCodeButton from "./CopyCodeButton";

interface DiscountCodeCardProps {
  code: string;
  discount: string;
  title: string;
  description: string;
  period?: string;
  stayPeriod?: string;
  condition?: string;
  note?: string;
  image: string;
  badge?: string;
}

const DiscountCodeCard = ({
  code,
  discount,
  title,
  description,
  period,
  stayPeriod,
  condition,
  note,
  image,
  badge,
}: DiscountCodeCardProps) => {
  return (
    <article className="bg-card rounded-lg md:rounded-xl overflow-hidden card-shadow border border-border">
      <div className="relative">
        <img src={image} alt={`${code} ${discount} 할인코드`} className="w-full h-28 md:h-48 object-cover" loading="lazy" />
        {badge && (
          <span className="absolute top-1.5 left-1.5 md:top-3 md:left-3 discount-badge !text-[10px] md:!text-xs !px-1.5 !py-0.5 md:!px-3 md:!py-1">
            {badge}
          </span>
        )}
        <div className="absolute top-1.5 right-1.5 md:top-3 md:right-3 bg-card/90 backdrop-blur-sm px-2 py-0.5 md:px-3 md:py-1 rounded-full">
          <span className="text-sm md:text-lg font-black text-primary">{discount}</span>
        </div>
      </div>
      <div className="p-3 md:p-5">
        <h3 className="text-xs md:text-lg font-bold text-foreground mb-1 md:mb-2 line-clamp-2">{title}</h3>
        <p className="text-[10px] md:text-sm text-muted-foreground mb-2 md:mb-4 leading-relaxed line-clamp-3 md:line-clamp-none hidden md:block">{description}</p>

        {(period || stayPeriod || condition) && (
          <div className="space-y-1 md:space-y-1.5 mb-2 md:mb-4 text-[10px] md:text-xs hidden md:block">
            {period && (
              <div className="flex gap-1 md:gap-2">
                <span className="font-semibold text-foreground min-w-[44px] md:min-w-[60px]">예약 기간</span>
                <span className="text-muted-foreground">{period}</span>
              </div>
            )}
            {stayPeriod && (
              <div className="flex gap-1 md:gap-2">
                <span className="font-semibold text-foreground min-w-[44px] md:min-w-[60px]">투숙 기간</span>
                <span className="text-muted-foreground">{stayPeriod}</span>
              </div>
            )}
            {condition && (
              <div className="flex gap-1 md:gap-2">
                <span className="font-semibold text-foreground min-w-[44px] md:min-w-[60px]">조건</span>
                <span className="text-muted-foreground">{condition}</span>
              </div>
            )}
          </div>
        )}

        {note && (
          <p className="text-[10px] md:text-xs text-muted-foreground bg-secondary rounded-md md:rounded-lg p-2 md:p-3 mb-2 md:mb-4 italic hidden md:block">
            💡 {note}
          </p>
        )}

        <CopyCodeButton code={code} />
      </div>
    </article>
  );
};

export default DiscountCodeCard;
