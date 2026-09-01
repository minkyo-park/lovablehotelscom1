import Layout from "@/components/Layout";
import DiscountCodeCard from "@/components/DiscountCodeCard";
import CopyCodeButton from "@/components/CopyCodeButton";
import { ExternalLink, AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react";

import codeNpay10 from "@/assets/code-npay10.jpg";
import codeDt26 from "@/assets/code-dt26.jpg";
import code5percent from "@/assets/code-5percent.jpg";
import codeHappylny from "@/assets/code-happylny.jpg";
import comparison from "@/assets/comparison.jpg";
import savingsStrategy from "@/assets/savings-strategy.jpg";
import checklist from "@/assets/checklist.jpg";
import heroBanner from "@/assets/hero-banner.jpg";
import oneKeyRewards from "@/assets/one-key-rewards.jpg";
import mobileBooking from "@/assets/mobile-booking.jpg";
import shillaStay from "@/assets/shilla-stay.jpg";

const AFFILIATE_LINK = "http://app.ac/utw0WqM33";
const EXCLUSIVE_LINK = "http://app.ac/wApxc0573";

const DiscountCodes = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "2026년 9월 호텔스닷컴 할인코드 전체 모음",
    description: "호텔스닷컴에서 사용 가능한 모든 할인코드를 상세히 분석합니다. NPAY10, DT26, HAPPYLNY 등 검증된 코드 총정리.",
    datePublished: "2026-06-01",
    dateModified: "2026-09-01",
    author: { "@type": "Organization", name: "호텔스닷컴 할인코드" },
  };

  const offerJsonLd = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    name: "호텔스닷컴 할인코드 모음",
    lowPrice: "0",
    priceCurrency: "KRW",
    offerCount: "4",
    offers: [
      { "@type": "Offer", name: "NPAY10 - 10% 할인", description: "네이버페이 전용 10% 할인", validThrough: "2026-06-30" },
      { "@type": "Offer", name: "DT26 - 8% 할인", description: "전 세계 호텔 8% 할인", validThrough: "2026-06-30" },
      { "@type": "Offer", name: "HAPPYLNY - 10% 할인", description: "토스뱅크 전용 10% 할인", validThrough: "2026-12-31" },
      { "@type": "Offer", name: "5% 기본 할인", description: "전 세계 호텔 5% 할인" },
    ],
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }} />

      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="호텔스닷컴 할인코드 모음" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 to-foreground/50" />
        </div>
        <div className="relative container-content section-padding !py-16 md:!py-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-4">
            호텔스닷컴 할인코드 전체 모음
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            2026년 9월 기준, 검증된 모든 호텔스닷컴 할인코드를 상세히 분석하고 비교합니다.
            각 코드의 할인율, 유효 기간, 적용 조건을 꼼꼼히 확인하세요.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-padding bg-card border-b border-border">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="text-accent" size={24} />
                할인코드 적용 전 필수 체크
              </h2>
              <ul className="space-y-3">
                {[
                  { icon: CheckCircle, text: "한국어 사이트(kr.hotels.com) 접속 필수 — 언어를 한국어로, 통화를 KRW로 설정", ok: true },
                  { icon: CheckCircle, text: "전용 프로모션 링크를 통해 접속해야 코드 입력란이 활성화됨", ok: true },
                  { icon: Info, text: "코드 입력 위치: 결제 단계 → '요금 세부 정보' → '쿠폰 사용' 영역", ok: true },
                  { icon: XCircle, text: "메리어트, 힐튼, 하얏트, 어코르, IHG 등 글로벌 체인 호텔에는 코드 적용 불가", ok: false },
                  { icon: XCircle, text: "현장 결제 숙소에는 코드 미적용 — 온라인 선불 결제만 가능", ok: false },
                  { icon: Info, text: "쿠키 설정 팝업에서 반드시 동의해야 정상 적용", ok: true },
                  { icon: XCircle, text: "포털 광고 링크 접속 시 코드 미적용 가능 — 직접 URL 접속 권장", ok: false },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <item.icon className={`flex-shrink-0 mt-0.5 ${item.ok ? "text-primary" : "text-destructive"}`} size={18} />
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img src={checklist} alt="호텔스닷컴 할인코드 체크리스트" className="rounded-xl card-shadow w-full" loading="lazy" />
          </div>
        </div>
      </section>

      {/* All Discount Codes */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">
            🎟️ 공식 할인코드 상세 분석
          </h2>

          {/* NPAY10 Detail */}
          <article className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <img src={codeNpay10} alt="NPAY10 할인코드 10% 할인" className="rounded-xl card-shadow w-full" loading="lazy" />
              <div>
                <span className="discount-badge mb-3">🔥 최고 할인율</span>
                <h3 className="text-xl md:text-2xl font-black text-foreground mb-3">
                  ① NPAY10 — 네이버페이 전용 10% 할인
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  9월에 발급된 네이버페이 전용 코드는 올해 12월 31일까지 투숙이 가능해,
                  여름휴가나 추석 연휴 여행을 미리 예약하기에 가장 적합한 코드입니다.
                  할인율 10%는 호텔스닷컴에서 현재 제공하는 코드 중 가장 높은 편에 속합니다.
                </p>
                <div className="table-responsive mb-4">
                  <table className="w-full text-sm border-collapse">
                    <tbody>
                      <tr className="border-b border-border"><td className="p-2 font-semibold text-foreground">할인코드</td><td className="p-2 font-mono font-bold text-primary">NPAY10</td></tr>
                      <tr className="border-b border-border"><td className="p-2 font-semibold text-foreground">할인율</td><td className="p-2 text-muted-foreground">전 세계 호텔 10% 즉시 할인</td></tr>
                      <tr className="border-b border-border"><td className="p-2 font-semibold text-foreground">예약 기간</td><td className="p-2 text-muted-foreground">2026년 9월 1일 ~ 9월 30일</td></tr>
                      <tr className="border-b border-border"><td className="p-2 font-semibold text-foreground">투숙 기간</td><td className="p-2 text-muted-foreground">2026년 8월 1일 ~ 12월 31일</td></tr>
                      <tr className="border-b border-border"><td className="p-2 font-semibold text-foreground">결제 조건</td><td className="p-2 text-muted-foreground">전용 프로모션 링크 접속 필수</td></tr>
                    </tbody>
                  </table>
                </div>
                <CopyCodeButton code="NPAY10" label="NPAY10 복사 & 적용" variant="large" />
              </div>
            </div>
          </article>

          {/* DT26 Detail */}
          <article className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="md:order-2">
                <img src={codeDt26} alt="DT26 할인코드 8% 할인" className="rounded-xl card-shadow w-full" loading="lazy" />
              </div>
              <div className="md:order-1">
                <span className="discount-badge mb-3">📅 장기 유효</span>
                <h3 className="text-xl md:text-2xl font-black text-foreground mb-3">
                  ② DT26 — 전 세계 호텔 8% 할인
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  DT26는 2026년 9월 기준으로 확인된 전 세계 적용 기본 코드입니다.
                  네이버페이 코드(NPAY10, 10%)가 있다면 그쪽이 더 높은 할인율이지만,
                  네이버페이 조건이 맞지 않는 경우 이 코드를 사용하면 됩니다.
                  투숙 기간이 2027년 8월까지여서 장거리 선예약에도 유용합니다.
                </p>
                <div className="table-responsive mb-4">
                  <table className="w-full text-sm border-collapse">
                    <tbody>
                      <tr className="border-b border-border"><td className="p-2 font-semibold text-foreground">할인코드</td><td className="p-2 font-mono font-bold text-primary">DT26</td></tr>
                      <tr className="border-b border-border"><td className="p-2 font-semibold text-foreground">할인율</td><td className="p-2 text-muted-foreground">전 세계 호텔 8% 즉시 할인</td></tr>
                      <tr className="border-b border-border"><td className="p-2 font-semibold text-foreground">예약 기간</td><td className="p-2 text-muted-foreground">2026년 9월 1일 ~ 9월 30일</td></tr>
                      <tr className="border-b border-border"><td className="p-2 font-semibold text-foreground">투숙 기간</td><td className="p-2 text-muted-foreground">2026년 8월 1일 ~ 2027년 8월 31일</td></tr>
                    </tbody>
                  </table>
                </div>
                <CopyCodeButton code="DT26" label="DT26 복사 & 적용" variant="large" />
              </div>
            </div>
          </article>

          {/* VRLP10 + HAPPYLNY + 5% in cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-12">
            <DiscountCodeCard
              code="VRLP10"
              discount="10%"
              title="가족 여행 숙소 10% 할인"
              description="가족 여행 숙소 10% 즉시 할인. 가족 여행 숙소 특가와 함께 제공되지만 해당 페이지 외 숙소에도 모두 적용됩니다(일부 적용 불가 숙소 제외)."
              period="2026.07.18 ~ 2026.08.17"
              stayPeriod="~ 2026.09.30"
              condition="전용 프로모션 링크 접속 필수, 일부 숙소 제외"
              note="가족 여행 특가와 별도로 일반 숙소에도 폭넓게 적용 가능한 10% 코드."
              image={codeHappylny}
              badge="👨‍👩‍👧 가족 여행"
              href={EXCLUSIVE_LINK}
            />
            <DiscountCodeCard
              code="HAPPYLNY"
              discount="10%"
              title="토스뱅크 전용 — 최대 3만 원 할인"
              description="토스뱅크 제휴 10% 즉시 할인. 모바일 앱 전용이며 20만 원 이상 예약 시 최대 3만 원까지 할인됩니다. 2026년 12월 31일까지 사용 가능합니다."
              period="~ 2026.12.31"
              condition="모바일 앱 전용, 20만 원 이상"
              note="토스뱅크 앱에서만 작동. 최대 3만 원 한도 유의."
              image={codeHappylny}
              badge="📱 모바일 전용"
            />
            <DiscountCodeCard
              code="HOTELS5"
              discount="5%"
              title="기본 할인코드 — 조건 없음"
              description="8% 코드(DT26)가 적용되지 않을 때 대안으로 사용 가능한 5% 할인 코드. 별도 조건 없이 전 세계 독립 호텔에 적용됩니다."
              condition="전용 프로모션 링크 경유 필수"
              note="DT26 미적용 시 대안 코드. 체인 호텔에는 여전히 적용 불가."
              image={code5percent}
            />
          </div>
        </div>
      </section>

      {/* Deep Comparison */}
      <section className="section-padding bg-card">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8 text-center">
            📊 할인코드 심층 비교 분석
          </h2>
          <img src={comparison} alt="호텔스닷컴 할인코드 비교 분석" className="rounded-xl card-shadow w-full max-w-2xl mx-auto mb-8" loading="lazy" />

          <div className="table-responsive mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left p-3 font-bold text-foreground">비교 항목</th>
                  <th className="text-center p-3 font-bold text-primary">NPAY10</th>
                  <th className="text-center p-3 font-bold text-foreground">DT26</th>
                  <th className="text-center p-3 font-bold text-foreground">HAPPYLNY</th>
                  <th className="text-center p-3 font-bold text-foreground">5% 코드</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["할인율", "10%", "8%", "10%", "5%"],
                  ["예약 마감", "9/30", "9/30", "12/31", "상시"],
                  ["투숙 기한", "12/31", "2027.08", "12/31", "상시"],
                  ["결제 조건", "네이버페이", "없음", "토스뱅크 앱", "없음"],
                  ["최소 금액", "없음", "없음", "20만 원", "없음"],
                  ["할인 한도", "없음", "없음", "3만 원", "없음"],
                  ["체인 호텔", "❌", "❌", "❌", "❌"],
                  ["장기 선예약", "⚠️ 12월까지", "✅ 2027년", "⚠️ 12월까지", "✅"],
                  ["추천 상황", "9월 예약 최적", "장기 선예약", "소액 예약", "대안 코드"],
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-border ${i % 2 === 0 ? "bg-secondary/30" : ""}`}>
                    {row.map((cell, j) => (
                      <td key={j} className={`p-3 ${j === 0 ? "font-semibold text-foreground" : "text-center text-muted-foreground"} ${j === 1 ? "!text-primary font-bold" : ""}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Scenario-based recommendations */}
          <h3 className="text-xl font-black text-foreground mb-4">🎯 상황별 추천 코드</h3>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              { scenario: "9월 내 해외 호텔 예약", code: "NPAY10", reason: "가장 높은 10% 할인율. 네이버페이 필수." },
              { scenario: "여름/추석 시즌 선예약", code: "NPAY10", reason: "12월까지 투숙 가능. 시즌 특가 미리 확보." },
              { scenario: "내년(2027) 여행 예약", code: "DT26", reason: "2027년 8월까지 투숙 가능한 유일한 코드." },
              { scenario: "소액 예약 (20만 원 이상)", code: "HAPPYLNY", reason: "토스뱅크 앱으로 10% 할인, 최대 3만 원." },
              { scenario: "네이버페이 불가 시", code: "DT26", reason: "조건 없는 8% 할인. 범용성 최고." },
              { scenario: "다른 코드 미적용 시", code: "HOTELS5", reason: "5% 기본 할인. 최후의 대안." },
            ].map((item) => (
              <div key={item.scenario} className="p-4 rounded-xl bg-background card-shadow border border-border">
                <p className="text-sm font-bold text-foreground mb-1">📌 {item.scenario}</p>
                <p className="text-xs text-muted-foreground mb-2">{item.reason}</p>
                <CopyCodeButton code={item.code} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Tips */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-foreground mb-4">
                💡 할인코드 활용 꿀팁
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-card card-shadow border border-border">
                  <h3 className="font-bold text-foreground text-sm mb-1">비환불 vs 무료 취소</h3>
                  <p className="text-xs text-muted-foreground">일부 숙소는 비환불 요금에서만 코드를 허용합니다. 일정 변경 가능성이 있다면 무료 취소 옵션과 비교 후 선택하세요.</p>
                </div>
                <div className="p-4 rounded-xl bg-card card-shadow border border-border">
                  <h3 className="font-bold text-foreground text-sm mb-1">세금·수수료 확인</h3>
                  <p className="text-xs text-muted-foreground">할인은 숙박 요금에만 적용됩니다. 세금 및 수수료 포함 총액을 반드시 확인하고 결제하세요.</p>
                </div>
                <div className="p-4 rounded-xl bg-card card-shadow border border-border">
                  <h3 className="font-bold text-foreground text-sm mb-1">가격 보장 프로그램</h3>
                  <p className="text-xs text-muted-foreground">예약 후 다른 사이트에서 같은 호텔을 더 저렴하게 발견하면 차액 환불이 가능합니다.</p>
                </div>
                <div className="p-4 rounded-xl bg-card card-shadow border border-border">
                  <h3 className="font-bold text-foreground text-sm mb-1">카드사 할인 중복</h3>
                  <p className="text-xs text-muted-foreground">할인코드와 카드사 프로모션을 중복 적용할 수 있는지 확인하세요. 중복 가능 시 실질 할인율이 크게 올라갑니다.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <img src={savingsStrategy} alt="호텔스닷컴 절약 전략" className="rounded-xl card-shadow w-full" loading="lazy" />
              <img src={mobileBooking} alt="모바일 호텔 예약" className="rounded-xl card-shadow w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Analysis */}
      <section className="section-padding bg-card">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6 text-center">
            🔍 호텔스닷컴 vs 타 플랫폼 비교
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            호텔스닷컴과 주요 호텔 예약 플랫폼을 비교하여 어떤 점이 유리한지 분석합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <img src={oneKeyRewards} alt="호텔스닷컴 리워드 비교" className="rounded-xl card-shadow w-full" loading="lazy" />
            <div className="table-responsive">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left p-3 font-bold text-foreground">항목</th>
                    <th className="text-center p-3 font-bold text-primary">호텔스닷컴</th>
                    <th className="text-center p-3 font-bold text-foreground">부킹닷컴</th>
                    <th className="text-center p-3 font-bold text-foreground">아고다</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["할인코드 지원", "✅ 활발", "⚠️ 제한적", "✅ 활발"],
                    ["최대 공식 할인", "10~20%", "10%", "15%"],
                    ["리워드 프로그램", "One Key Cash", "Genius 등급", "AgodaCash"],
                    ["무료 1박 제도", "✅ (구 스탬프)", "❌", "❌"],
                    ["체인 호텔 코드", "❌ 미적용", "❌ 미적용", "⚠️ 일부"],
                    ["카드사 제휴", "✅ 8개+", "⚠️ 제한적", "✅ 다수"],
                    ["모바일 전용 혜택", "✅", "✅", "✅"],
                    ["가격 보장", "✅", "✅", "⚠️"],
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-border ${i % 2 === 0 ? "bg-secondary/30" : ""}`}>
                      {row.map((cell, j) => (
                        <td key={j} className={`p-3 ${j === 0 ? "font-semibold text-foreground" : "text-center text-muted-foreground"}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground mt-3 italic">
                * 호텔스닷컴은 카드사 제휴 프로모션이 가장 다양하며, One Key 리워드를 통한 실질적인 추가 절약이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient section-padding">
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-4">
            마음에 드는 할인코드를 찾으셨나요?
          </h2>
          <p className="text-primary-foreground/80 mb-8">지금 바로 호텔스닷컴에서 할인코드를 적용하고 예약하세요!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CopyCodeButton code="NPAY10" label="NPAY10 복사 & 적용" variant="large" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DiscountCodes;
