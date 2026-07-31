import Layout from "@/components/Layout";
import DiscountCodeCard from "@/components/DiscountCodeCard";
import CopyCodeButton from "@/components/CopyCodeButton";
import { ExternalLink, Star, Shield, Clock, CreditCard, Tag, TrendingUp, Award } from "lucide-react";

import heroBanner from "@/assets/hero-banner.jpg";
import codeNpay10 from "@/assets/code-npay10.jpg";
import codeDt26 from "@/assets/code-dt26.jpg";
import code5percent from "@/assets/code-5percent.jpg";
import codeHappylny from "@/assets/code-happylny.jpg";
import oneKeyRewards from "@/assets/one-key-rewards.jpg";
import savingsStrategy from "@/assets/savings-strategy.jpg";
import comparison from "@/assets/comparison.jpg";
import osakaKyoto from "@/assets/osaka-kyoto.jpg";
import shillaStay from "@/assets/shilla-stay.jpg";
import chinaHotels from "@/assets/china-hotels.jpg";
import mobileBooking from "@/assets/mobile-booking.jpg";

const AFFILIATE_LINK = "http://app.ac/utw0WqM33";
const EXCLUSIVE_LINK = "http://app.ac/wApxc0573";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "호텔스닷컴 할인코드 및 쿠폰 8월",
    url: "https://lvhts.agd-offer.co.kr",
    description: "2026년 8월 최신 호텔스닷컴 할인코드 및 쿠폰 총정리. 네이버페이 10% 할인, 카드사 프로모션, 최대 20% 할인 쿠폰 코드를 확인하세요.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://lvhts.agd-offer.co.kr/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "호텔스닷컴 할인코드는 어떻게 사용하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "전용 프로모션 링크를 통해 한국어 호텔스닷컴에 접속한 후, 결제 페이지의 '쿠폰 사용' 영역에 코드를 입력하면 즉시 할인이 적용됩니다.",
        },
      },
      {
        "@type": "Question",
        name: "2026년 8월 호텔스닷컴 최대 할인율은?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "네이버페이 전용 코드 NPAY10으로 10% 할인이 가능하며, NH농협카드 프로모션을 통해 최대 20%까지 할인받을 수 있습니다.",
        },
      },
      {
        "@type": "Question",
        name: "체인 호텔에도 할인코드가 적용되나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "메리어트, 힐튼, 하얏트 등 글로벌 체인 호텔에는 할인코드가 적용되지 않습니다. 다만 One Key Cash 적립은 정상 적용됩니다.",
        },
      },
    ],
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="럭셔리 호텔 로비" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="relative container-content section-padding !py-20 md:!py-32">
          <div className="max-w-2xl">
            <span className="discount-badge mb-4 inline-block !bg-primary/20 !text-primary-foreground border border-primary-foreground/20">
              2026년 8월 최신
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-6">
              호텔스닷컴 할인코드
              <br />
              <span className="text-accent">최대 20% 절약</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              검증된 호텔스닷컴 공식 할인코드와 카드사 프로모션을 한눈에 확인하세요.
              전 세계 50만여 호텔을 최저가로 예약할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                할인코드 적용하기 <ExternalLink size={20} />
              </a>
              <CopyCodeButton code="NPAY10" label="최고 할인코드 복사" variant="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-card border-b border-border">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Tag, label: "최대 할인율", value: "20%", desc: "NH농협카드" },
              { icon: Star, label: "추천 코드", value: "NPAY10", desc: "10% 할인" },
              { icon: Clock, label: "투숙 가능", value: "2027.06", desc: "DT26 코드" },
              { icon: Shield, label: "검증 코드", value: "4개+", desc: "2026년 8월" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-secondary/50">
                <stat.icon className="mx-auto mb-2 text-primary" size={28} />
                <div className="text-2xl font-black text-foreground">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Discount Codes */}
      <section className="section-padding" id="codes">
        <div className="container-content">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">
              🎟️ 2026년 8월 사용 가능한 할인코드
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              아래 할인코드들은 모두 검증된 공식 코드입니다. 코드를 복사하고 바로 호텔스닷컴에서 적용해보세요.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <DiscountCodeCard
              code="AUGUST15"
              discount="15%"
              title="전 지역 숙소 15% — 역대 최대 할인율!"
              description="전 지역 숙소 15% 즉시 할인. 호텔스닷컴 역대 최대 할인율로, 최대 7만 원까지 할인받을 수 있습니다. 8월 한 달간만 발급되는 한정 코드이니 서둘러 예약하세요."
              period="2026.08.01 ~ 2026.08.31"
              stayPeriod="~ 2026.12.31"
              condition="전용 프로모션 링크 접속 필수, 최대 7만 원 할인"
              note="호텔스닷컴 역대 최대 할인율(15%)! 최대 7만 원 할인, 12월 말까지 투숙 가능."
              image={codeNpay10}
              badge="👑 역대 최대 15%"
              href={EXCLUSIVE_LINK}
            />
            <DiscountCodeCard
              code="VRLP10"
              discount="10%"
              title="가족 여행 숙소 10% 할인"
              description="가족 여행 숙소 10% 즉시 할인. 가족 여행 숙소 특가와 함께 제공되지만 해당 페이지 외 숙소에도 모두 적용 가능합니다(일부 적용 불가 숙소 제외)."
              period="2026.07.18 ~ 2026.08.17"
              stayPeriod="~ 2026.09.30"
              condition="전용 프로모션 링크 접속 필수, 일부 숙소 제외"
              note="가족 여행 특가와 별도로 일반 숙소에도 폭넓게 적용되는 10% 코드."
              image={codeHappylny}
              badge="👨‍👩‍👧 가족 여행"
              href={EXCLUSIVE_LINK}
            />
            <DiscountCodeCard
              code="NPAY10"
              discount="10%"
              title="네이버페이 전용 — 최고 할인율"
              description="전 세계 호텔 10% 즉시 할인. 8월에 발급된 네이버페이 전용 코드로 여름휴가나 추석 연휴 여행을 미리 예약하기에 최적입니다."
              period="2026.08.01 ~ 2026.08.31"
              stayPeriod="2026.08.01 ~ 2026.12.31"
              condition="전용 프로모션 링크 접속 필수"
              note="현재 제공되는 코드 중 가장 높은 할인율(10%). 여름·추석 시즌까지 투숙 가능!"
              image={codeNpay10}
              badge="🔥 최고 할인"
            />
            <DiscountCodeCard
              code="DT26"
              discount="8%"
              title="전 세계 호텔 기본 할인코드"
              description="전 세계 호텔 8% 즉시 할인. 네이버페이 조건이 맞지 않는 경우 이 코드를 사용하세요. 투숙 기간이 2027년까지 열려 있어 장거리 선예약에 유리합니다."
              period="2026.08.01 ~ 2026.08.31"
              stayPeriod="2026.08.01 ~ 2027.08.31"
              condition="전용 프로모션 링크 접속 필수"
              note="2027년 8월까지 투숙 가능! 내년 여행도 미리 예약 가능한 장기 코드."
              image={codeDt26}
              badge="📅 장기 유효"
            />
            <DiscountCodeCard
              code="HAPPYLNY"
              discount="10%"
              title="토스뱅크 전용 — 최대 3만 원"
              description="토스뱅크 제휴 10% 즉시 할인. 모바일 앱 전용이며, 20만 원 이상 예약 시 최대 3만 원까지 할인됩니다."
              period="~ 2026.12.31"
              condition="모바일 앱 전용, 20만 원 이상 예약"
              note="토스뱅크 앱에서만 작동합니다. 최대 3만 원 할인 한도에 유의하세요."
              image={codeHappylny}
              badge="📱 모바일 전용"
            />
            <DiscountCodeCard
              code="HOTELS5"
              discount="5%"
              title="전 세계 호텔 기본 할인코드"
              description="8% 코드가 적용되지 않을 때 대안으로 사용할 수 있는 5% 할인 코드입니다. 전 세계 독립 호텔에 적용 가능합니다."
              condition="전용 프로모션 링크 경유 필수"
              note="8% 코드(DT26) 미적용 시 대안으로 활용 가능한 기본 코드."
              image={code5percent}
            />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-card">
        <div className="container-content">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">
              📊 할인코드 한눈에 비교
            </h2>
            <p className="text-muted-foreground">어떤 코드가 나에게 맞을까? 한눈에 비교해보세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <img src={comparison} alt="호텔스닷컴 할인코드 비교 분석" className="rounded-xl card-shadow w-full" loading="lazy" />
            <div>
              <div className="table-responsive">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary">
                      <th className="text-left p-3 font-bold text-foreground">코드</th>
                      <th className="text-center p-3 font-bold text-foreground">할인율</th>
                      <th className="text-center p-3 font-bold text-foreground">투숙 기한</th>
                      <th className="text-center p-3 font-bold text-foreground">조건</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border bg-primary/5">
                      <td className="p-3 font-mono font-bold text-primary">NPAY10</td>
                      <td className="p-3 text-center font-bold">10%</td>
                      <td className="p-3 text-center text-muted-foreground">2026.12</td>
                      <td className="p-3 text-center text-muted-foreground">네이버페이</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-mono font-bold">DT26</td>
                      <td className="p-3 text-center font-bold">8%</td>
                      <td className="p-3 text-center text-muted-foreground">2027.08</td>
                      <td className="p-3 text-center text-muted-foreground">없음</td>
                    </tr>
                    <tr className="border-b border-border bg-primary/5">
                      <td className="p-3 font-mono font-bold">HAPPYLNY</td>
                      <td className="p-3 text-center font-bold">10%</td>
                      <td className="p-3 text-center text-muted-foreground">2026.12</td>
                      <td className="p-3 text-center text-muted-foreground">토스뱅크 앱</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-mono font-bold">HOTELS5</td>
                      <td className="p-3 text-center font-bold">5%</td>
                      <td className="p-3 text-center text-muted-foreground">상시</td>
                      <td className="p-3 text-center text-muted-foreground">없음</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-secondary rounded-lg">
                <p className="text-sm text-foreground font-semibold mb-1">💡 추천 전략</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  네이버페이 결제가 가능하다면 <strong>NPAY10</strong>(10%)이 최선. 장기 선예약이라면 <strong>DT26</strong>(8%, 2027년까지 유효)이 유리합니다.
                  20만 원 이상 예약 시 토스뱅크 <strong>HAPPYLNY</strong>도 10% 할인으로 경쟁력 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Strategy */}
      <section className="section-padding">
        <div className="container-content">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">
              💰 최대 절약 전략 조합
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={savingsStrategy} alt="호텔스닷컴 최대 절약 전략" className="rounded-xl card-shadow w-full" loading="lazy" />
            <div className="space-y-4">
              {[
                { icon: TrendingUp, title: "8월 내 해외 호텔 예약", desc: "NPAY10(10%) → 현재 최고 할인율. 네이버페이 결제 시 즉시 적용." },
                { icon: Clock, title: "여름/추석 시즌 선예약", desc: "NPAY10은 12월까지 투숙 가능 → 시즌 특가를 미리 확보하세요." },
                { icon: Award, title: "장거리 선예약 (내년)", desc: "DT26(8%)은 2027년 8월까지 투숙 가능 → 내년 여행 미리 예약." },
                { icon: CreditCard, title: "카드 할인 중복 활용", desc: "코드 적용 후 NH농협카드(최대 20%) 등 카드사 할인 중복 가능 여부 확인!" },
                { icon: Star, title: "골드 회원 혜택 활용", desc: "연 30박 달성 시 무료 식음료, 객실 업그레이드 등 추가 혜택." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-card card-shadow border border-border">
                  <item.icon className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Promotions */}
      <section className="section-padding bg-card">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8 text-center">
            🎯 지역별 특가 프로모션
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="rounded-xl overflow-hidden card-shadow border border-border bg-background">
              <img src={shillaStay} alt="신라스테이 호텔 최대 61% 할인" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">신라스테이 — 최대 61%</h3>
                <p className="text-sm text-muted-foreground mb-3">2026년 12월 31일까지. 특정 기간 5% 추가 할인 제공.</p>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer"
                  className="btn-cta px-4 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-1">
                  예약하기 <ExternalLink size={14} />
                </a>
              </div>
            </article>
            <article className="rounded-xl overflow-hidden card-shadow border border-border bg-background">
              <img src={osakaKyoto} alt="오사카 교토 호텔 특가" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">오사카·교토 호텔 특가</h3>
                <p className="text-sm text-muted-foreground mb-3">오사카 및 교토 인기 호텔 상시 특가. 벚꽃 시즌 예약 추천!</p>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer"
                  className="btn-cta px-4 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-1">
                  특가 보기 <ExternalLink size={14} />
                </a>
              </div>
            </article>
            <article className="rounded-xl overflow-hidden card-shadow border border-border bg-background">
              <img src={chinaHotels} alt="중국 호텔 특가 상하이 베이징" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">중국 주요 도시 특가</h3>
                <p className="text-sm text-muted-foreground mb-3">상하이, 베이징, 청두 등 주요 도시 호텔 상시 특가.</p>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer"
                  className="btn-cta px-4 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-1">
                  특가 보기 <ExternalLink size={14} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* One Key Rewards */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                ⭐ One Key 리워드 프로그램
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                호텔스닷컴의 One Key 멤버십으로 숙박 예약 시 One Key Cash를 적립하고,
                향후 예약 시 현금처럼 사용할 수 있습니다. 체인 호텔에도 적립이 됩니다!
              </p>
              <div className="table-responsive">
                <table className="w-full text-sm border-collapse mb-4">
                  <thead>
                    <tr className="border-b-2 border-accent">
                      <th className="text-left p-3 font-bold text-foreground">등급</th>
                      <th className="text-left p-3 font-bold text-foreground">혜택</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 font-bold">실버</td>
                      <td className="p-3 text-muted-foreground">예약마다 One Key Cash 적립</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-bold">골드</td>
                      <td className="p-3 text-muted-foreground">연 30박 이상 시 무료 식음료, 객실 업그레이드, 무료 와인 등</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-gold px-6 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2">
                One Key 가입하기 <ExternalLink size={16} />
              </a>
            </div>
            <img src={oneKeyRewards} alt="호텔스닷컴 One Key 리워드 프로그램" className="rounded-xl card-shadow w-full" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Mobile Booking CTA */}
      <section className="section-padding bg-card">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src={mobileBooking} alt="모바일 호텔 예약 화면" className="rounded-xl card-shadow w-full" loading="lazy" />
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                📱 모바일에서도 간편하게
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                호텔스닷컴 앱에서도 할인코드를 적용할 수 있습니다. 특히 토스뱅크 코드(HAPPYLNY)는
                모바일 앱 전용이니, 앱에서 바로 예약하세요.
              </p>
              <CopyCodeButton code="NPAY10" label="최고 할인코드 복사 & 적용" variant="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient section-padding">
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-4">
            지금 바로 할인받고 호텔을 예약하세요!
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            검증된 할인코드로 전 세계 50만여 호텔을 최저가로 예약하세요.
          </p>
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

export default Index;
