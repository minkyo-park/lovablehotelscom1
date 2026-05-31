import Layout from "@/components/Layout";
import CopyCodeButton from "@/components/CopyCodeButton";
import { ExternalLink, CreditCard } from "lucide-react";

import cardNh from "@/assets/card-nh.jpg";
import cardKb from "@/assets/card-kb.jpg";
import cardSamsung from "@/assets/card-samsung.jpg";
import cardHyundai from "@/assets/card-hyundai.jpg";
import cardHana from "@/assets/card-hana.jpg";
import cardLotte from "@/assets/card-lotte.jpg";
import cardBc from "@/assets/card-bc.jpg";
import codeHappylny from "@/assets/code-happylny.jpg";
import comparison from "@/assets/comparison.jpg";
import oneKeyRewards from "@/assets/one-key-rewards.jpg";
import heroBanner from "@/assets/hero-banner.jpg";
import savingsStrategy from "@/assets/savings-strategy.jpg";

const AFFILIATE_LINK = "http://app.ac/utw0WqM33";

const cardPromotions = [
  {
    name: "토스뱅크",
    code: "HAPPYLNY",
    discount: "10%",
    maxDiscount: "최대 3만 원",
    minAmount: "20만 원 이상",
    period: "~ 2026.12.31",
    condition: "모바일 앱 전용",
    color: "from-blue-400 to-blue-600",
    image: codeHappylny,
    description: "토스뱅크 전용 10% 할인 코드. 모바일 앱에서만 사용 가능하며, 20만 원 이상 예약 시 최대 3만 원까지 즉시 할인됩니다.",
  },
  {
    name: "NH농협카드",
    discount: "최대 20%",
    period: "~ 2026.12.31",
    condition: "전용 프로모션 페이지 접속 + 농협카드 결제",
    image: cardNh,
    description: "NH농협카드 전용 프로모션으로 최대 20% 할인을 받을 수 있습니다. 카드사 제휴 중 가장 높은 할인율을 제공합니다.",
  },
  {
    name: "KB국민카드",
    discount: "카드사 전용 할인",
    period: "~ 2026.12.31",
    condition: "전용 페이지 접속 후 결제 시 자동 적용",
    image: cardKb,
    description: "KB국민카드 전용 프로모션 페이지를 통해 접속하면 결제 시 자동으로 할인이 적용됩니다.",
  },
  {
    name: "삼성카드",
    discount: "카드사 전용 할인",
    period: "~ 2026.12.31",
    condition: "전용 프로모션 페이지 접속 필수",
    image: cardSamsung,
    description: "삼성카드 전용 프로모션으로 호텔스닷컴 예약 시 추가 할인을 받을 수 있습니다.",
  },
  {
    name: "현대카드 GOOD FRIENDSHIP",
    discount: "카드사 전용 할인",
    period: "~ 2026.12.31",
    condition: "현대카드 전용 페이지 접속",
    image: cardHyundai,
    description: "현대카드 GOOD FRIENDSHIP 프로모션을 통해 호텔스닷컴 예약 시 할인 혜택을 제공합니다.",
  },
  {
    name: "하나카드",
    discount: "카드사 전용 할인",
    period: "~ 2026.12.31",
    condition: "하나카드 전용 프로모션 페이지 접속",
    image: cardHana,
    description: "하나카드 전용 프로모션으로 호텔스닷컴에서 할인된 가격으로 숙박을 예약할 수 있습니다.",
  },
  {
    name: "롯데카드",
    discount: "카드사 전용 할인",
    period: "~ 2026.12.31",
    condition: "롯데카드 전용 프로모션 페이지 접속",
    image: cardLotte,
    description: "롯데카드 사용자를 위한 호텔스닷컴 전용 할인 프로모션입니다.",
  },
  {
    name: "BC카드",
    discount: "카드사 전용 할인",
    period: "~ 2026.12.31",
    condition: "BC카드 전용 프로모션 페이지 접속",
    image: cardBc,
    description: "BC카드 사용자를 위한 호텔스닷컴 전용 할인 프로모션입니다.",
  },
];

const CardPromotions = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "2026년 호텔스닷컴 카드사 제휴 프로모션 총정리",
    description: "NH농협, KB국민, 삼성, 현대, 하나, 롯데, BC카드, 토스뱅크 등 8개 카드사 호텔스닷컴 제휴 할인 프로모션 상세 분석.",
    datePublished: "2026-06-01",
    dateModified: "2026-06-07",
    author: { "@type": "Organization", name: "호텔스닷컴 할인코드" },
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="호텔스닷컴 카드사 프로모션" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 to-foreground/50" />
        </div>
        <div className="relative container-content section-padding !py-16 md:!py-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-4">
            카드사 제휴 프로모션
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            2026년 호텔스닷컴과 제휴된 8개 카드사의 할인 프로모션을 상세히 비교합니다.
            내 카드에 맞는 최적의 프로모션을 찾아보세요.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-card border-b border-border">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 text-center">
            💳 카드사 프로모션 개요
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            호텔스닷컴은 국내 주요 카드사와 폭넓게 제휴하여 다양한 할인 프로모션을 제공합니다.
            각 카드사의 전용 프로모션 페이지를 통해 접속해야만 할인이 적용되며,
            호텔스닷컴 공식 쿠폰 페이지(kr.hotels.com/lp/b/coupons)에서 카드사별 전용 링크를 확인할 수 있습니다.
          </p>

          {/* Summary - Desktop Table */}
          <div className="hidden md:block table-responsive mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left p-3 font-bold text-foreground">카드사</th>
                  <th className="text-center p-3 font-bold text-foreground">할인율</th>
                  <th className="text-center p-3 font-bold text-foreground">기간</th>
                  <th className="text-center p-3 font-bold text-foreground">특이사항</th>
                  <th className="text-center p-3 font-bold text-foreground">바로가기</th>
                </tr>
              </thead>
              <tbody>
                {cardPromotions.map((card, i) => (
                  <tr key={card.name} className={`border-b border-border ${i % 2 === 0 ? "bg-secondary/30" : ""}`}>
                    <td className="p-3 font-semibold text-foreground">{card.name}</td>
                    <td className="p-3 text-center font-bold text-primary">{card.discount}</td>
                    <td className="p-3 text-center text-muted-foreground">{card.period}</td>
                    <td className="p-3 text-center text-muted-foreground text-xs">
                      {card.code ? `코드: ${card.code}` : "전용 페이지 접속"}
                    </td>
                    <td className="p-3 text-center">
                      <a
                        href={AFFILIATE_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cta inline-block px-3 py-1.5 rounded-md text-xs font-bold whitespace-nowrap"
                      >
                        적용하기 →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary - Mobile Card List */}
          <div className="md:hidden space-y-3 mb-8">
            {cardPromotions.map((card) => (
              <div key={card.name} className="bg-background rounded-lg p-3 border border-border card-shadow">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-foreground text-sm">{card.name}</span>
                  <span className="font-black text-primary text-sm">{card.discount}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-2">
                  <span>{card.period}</span>
                  <span>{card.code ? `코드: ${card.code}` : "전용 페이지"}</span>
                </div>
                <a
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta block text-center px-3 py-2 rounded-md text-xs font-bold"
                >
                  적용하기 →
                </a>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={comparison} alt="카드사 프로모션 비교" className="rounded-xl card-shadow w-full" loading="lazy" />
            <img src={savingsStrategy} alt="카드사 할인 절약 전략" className="rounded-xl card-shadow w-full" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Individual Card Promotions */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">
            🏦 카드사별 프로모션 상세
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardPromotions.map((card) => (
              <article key={card.name} className="bg-card rounded-xl overflow-hidden card-shadow border border-border">
                <div className="relative">
                  <img src={card.image} alt={`${card.name} 호텔스닷컴 프로모션`} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-black text-primary">{card.discount}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="text-primary" size={20} />
                    <h3 className="text-lg font-bold text-foreground">{card.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{card.description}</p>
                  
                  <div className="space-y-1.5 mb-4 text-xs">
                    <div className="flex gap-2">
                      <span className="font-semibold text-foreground min-w-[60px]">할인율</span>
                      <span className="text-muted-foreground font-bold">{card.discount}</span>
                    </div>
                    {card.maxDiscount && (
                      <div className="flex gap-2">
                        <span className="font-semibold text-foreground min-w-[60px]">최대 할인</span>
                        <span className="text-muted-foreground">{card.maxDiscount}</span>
                      </div>
                    )}
                    {card.minAmount && (
                      <div className="flex gap-2">
                        <span className="font-semibold text-foreground min-w-[60px]">최소 금액</span>
                        <span className="text-muted-foreground">{card.minAmount}</span>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <span className="font-semibold text-foreground min-w-[60px]">기간</span>
                      <span className="text-muted-foreground">{card.period}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold text-foreground min-w-[60px]">조건</span>
                      <span className="text-muted-foreground">{card.condition}</span>
                    </div>
                  </div>

                  {card.code ? (
                    <CopyCodeButton code={card.code} />
                  ) : (
                    <a
                      href={AFFILIATE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cta px-4 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 justify-center w-full"
                    >
                      프로모션 페이지 바로가기 <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Card promotion tips */}
      <section className="section-padding bg-card">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
            💡 카드사 프로모션 활용 팁
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background card-shadow border border-border">
                <h3 className="font-bold text-foreground text-sm mb-1">🔑 전용 페이지 접속이 핵심</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  카드사 할인은 반드시 각 카드사의 전용 프로모션 페이지를 통해 접속해야 합니다.
                  일반 검색으로 호텔스닷컴에 접속하면 카드사 할인이 적용되지 않습니다.
                  호텔스닷컴 쿠폰 페이지에서 카드사별 링크를 확인하세요.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background card-shadow border border-border">
                <h3 className="font-bold text-foreground text-sm mb-1">🔄 할인코드와 중복 적용 확인</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  일부 카드사 할인은 공식 할인코드(NPAY10, DT26 등)와 중복 적용이 가능합니다.
                  중복 적용 가능 시 실질 할인율이 크게 상승하므로 반드시 확인해보세요.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background card-shadow border border-border">
                <h3 className="font-bold text-foreground text-sm mb-1">📊 NH농협카드가 최대 할인</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  현재 카드사 프로모션 중 NH농협카드의 최대 20% 할인이 가장 높습니다.
                  농협카드를 보유하고 있다면 최우선으로 활용하세요.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background card-shadow border border-border">
                <h3 className="font-bold text-foreground text-sm mb-1">⏰ 2026년 12월 31일까지</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  대부분의 카드사 프로모션은 2026년 12월 31일까지 진행됩니다.
                  연말까지 여유가 있으니 여행 계획에 맞춰 활용하세요.
                </p>
              </div>
            </div>
            <div>
              <img src={oneKeyRewards} alt="호텔스닷컴 리워드 카드사 연계" className="rounded-xl card-shadow w-full mb-4" loading="lazy" />
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="font-bold text-foreground text-sm mb-2">🏆 카드별 추천 순위</h3>
                <ol className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex gap-2"><span className="font-bold text-primary">1위</span> NH농협카드 — 최대 20% (최고 할인)</li>
                  <li className="flex gap-2"><span className="font-bold text-primary">2위</span> 토스뱅크 — 10% (코드: HAPPYLNY)</li>
                  <li className="flex gap-2"><span className="font-bold text-foreground">3위</span> KB국민카드 — 자동 적용 할인</li>
                  <li className="flex gap-2"><span className="font-bold text-foreground">4위</span> 삼성카드 — 자동 적용 할인</li>
                  <li className="flex gap-2"><span className="font-bold text-foreground">5위</span> 현대·하나·롯데·BC — 기본 할인</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient section-padding">
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-4">
            내 카드로 호텔스닷컴 할인받기
          </h2>
          <p className="text-primary-foreground/80 mb-8">카드사 프로모션 페이지를 통해 접속하고, 최대 20%까지 할인받으세요!</p>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-10 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2"
          >
            호텔스닷컴 바로가기 <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default CardPromotions;
