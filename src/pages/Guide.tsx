import Layout from "@/components/Layout";
import CopyCodeButton from "@/components/CopyCodeButton";
import { ExternalLink, CheckCircle, AlertTriangle, HelpCircle, Phone, MessageSquare, FileText } from "lucide-react";

import guideSteps from "@/assets/guide-steps.jpg";
import troubleshoot from "@/assets/troubleshoot.jpg";
import mobileBooking from "@/assets/mobile-booking.jpg";
import customerService from "@/assets/customer-service.jpg";
import checklist from "@/assets/checklist.jpg";
import heroBanner from "@/assets/hero-banner.jpg";
import codeNpay10 from "@/assets/code-npay10.jpg";
import codeDt26 from "@/assets/code-dt26.jpg";
import oneKeyRewards from "@/assets/one-key-rewards.jpg";
import savingsStrategy from "@/assets/savings-strategy.jpg";
import comparison from "@/assets/comparison.jpg";

const AFFILIATE_LINK = "http://app.ac/utw0WqM33";

const Guide = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "호텔스닷컴 할인코드 적용 방법",
    description: "호텔스닷컴에서 할인코드를 적용하는 단계별 가이드. 코드 입력부터 결제까지 상세히 안내합니다.",
    step: [
      { "@type": "HowToStep", name: "프로모션 링크 접속", text: "전용 프로모션 링크를 통해 한국어 호텔스닷컴(kr.hotels.com)에 접속합니다." },
      { "@type": "HowToStep", name: "호텔 검색", text: "여행지와 날짜를 입력해 호텔을 검색하고 원하는 숙소를 선택합니다." },
      { "@type": "HowToStep", name: "결제 페이지 이동", text: "결제 페이지로 이동합니다 ('지금 예약' 클릭)." },
      { "@type": "HowToStep", name: "할인코드 입력", text: "'요금 세부 정보' 아래의 '쿠폰 사용' 영역에서 코드를 입력합니다." },
      { "@type": "HowToStep", name: "할인 확인", text: "코드 정상 적용 시 할인된 금액이 즉시 반영됩니다." },
      { "@type": "HowToStep", name: "최종 결제", text: "세금 및 수수료 포함 총액 기준으로 최종 할인 여부를 꼭 확인하고 결제를 완료합니다." },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "코드 입력란이 보이지 않아요",
        acceptedAnswer: { "@type": "Answer", text: "한국어 사이트 여부를 확인하고, 전용 프로모션 링크로 재접속하세요." },
      },
      {
        "@type": "Question",
        name: "코드가 유효하지 않다고 나와요",
        acceptedAnswer: { "@type": "Answer", text: "광고 링크를 통해 접속한 경우 발생할 수 있습니다. 직접 URL로 접속하거나 프로모션 링크를 통해 재접속하세요." },
      },
      {
        "@type": "Question",
        name: "체인 호텔에서 코드가 안 되나요?",
        acceptedAnswer: { "@type": "Answer", text: "메리어트, 힐튼, 하얏트 등 글로벌 체인 호텔에는 할인코드가 적용되지 않습니다. 다만 One Key Cash 적립은 가능합니다." },
      },
      {
        "@type": "Question",
        name: "현장 결제 숙소에는 코드가 적용되나요?",
        acceptedAnswer: { "@type": "Answer", text: "현장 결제 숙소에는 코드가 적용되지 않습니다. 온라인 선불 결제 가능한 숙소로 변경해서 예약하세요." },
      },
    ],
  };

  const steps = [
    {
      number: 1,
      title: "전용 프로모션 링크 접속",
      description: "전용 프로모션 링크를 통해 한국어 호텔스닷컴(kr.hotels.com)에 접속합니다. 일반 검색 링크로 접속하면 코드 입력란이 활성화되지 않을 수 있습니다.",
      tip: "포털 광고 링크가 아닌, 직접 URL 또는 프로모션 링크로 접속하세요.",
    },
    {
      number: 2,
      title: "호텔 검색 및 선택",
      description: "여행지와 날짜를 입력해 호텔을 검색하고 원하는 숙소를 선택합니다. 독립 호텔이나 소규모 체인 숙소에서 코드가 적용됩니다.",
      tip: "메리어트, 힐튼, 하얏트 등 글로벌 체인 호텔에는 코드 적용이 안 됩니다.",
    },
    {
      number: 3,
      title: "결제 페이지 이동",
      description: "'지금 예약' 버튼을 클릭하여 결제 페이지로 이동합니다. 이때 온라인 선불 결제 옵션을 선택해야 합니다.",
      tip: "현장 결제 숙소에는 코드가 적용되지 않으니 선불 결제 옵션을 선택하세요.",
    },
    {
      number: 4,
      title: "할인코드 입력",
      description: "'요금 세부 정보' 아래의 '쿠폰 사용' 영역에서 할인코드를 입력합니다. 코드를 정확히 입력해야 합니다.",
      tip: "아래 버튼으로 코드를 복사한 후 붙여넣기 하면 편리합니다.",
    },
    {
      number: 5,
      title: "할인 금액 확인",
      description: "코드가 정상 적용되면 할인된 금액이 즉시 반영됩니다. 할인 전후 금액을 비교 확인하세요.",
      tip: "세금 및 수수료 포함 총액 기준으로 할인 여부를 꼭 확인하세요.",
    },
    {
      number: 6,
      title: "결제 완료",
      description: "최종 금액을 확인하고 결제를 완료합니다. 예약 확인 바우처는 가입 이메일로 자동 발송됩니다.",
      tip: "'내 여행' 메뉴에서도 바우처를 다운로드할 수 있습니다.",
    },
  ];

  const errors = [
    {
      problem: "코드 입력란 자체가 없음",
      cause: "한국어 사이트가 아니거나, 일반 검색 링크로 접속한 경우",
      solution: "한국어 사이트(kr.hotels.com) 여부를 확인하고, 전용 프로모션 링크로 재접속하세요.",
    },
    {
      problem: "'코드가 유효하지 않음' 오류",
      cause: "포털 광고 링크를 통해 접속한 경우 발생",
      solution: "직접 URL로 접속하거나, 프로모션 전용 링크를 통해 재접속하세요.",
    },
    {
      problem: "체인 호텔에서 코드 미적용",
      cause: "메리어트, 힐튼, 하얏트 등 글로벌 체인 호텔은 코드 미지원",
      solution: "독립 호텔이나 소규모 체인 숙소를 선택하세요. 체인 호텔은 One Key Cash 적립만 가능합니다.",
    },
    {
      problem: "현장 결제 숙소에서 코드 미적용",
      cause: "코드는 온라인 선불 결제 숙소에서만 사용 가능",
      solution: "온라인 선불 결제 가능한 숙소로 변경해서 예약하세요.",
    },
    {
      problem: "무료 취소 상품에서 코드 안 됨",
      cause: "일부 숙소는 비환불 요금에서만 코드 허용",
      solution: "비환불 요금과 무료 취소 요금을 비교 후, 일정 변경 가능성을 고려하여 선택하세요.",
    },
  ];

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="호텔스닷컴 할인코드 사용 가이드" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 to-foreground/50" />
        </div>
        <div className="relative container-content section-padding !py-16 md:!py-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-4">
            호텔스닷컴 할인코드 사용 가이드
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            할인코드 적용 방법부터 자주 발생하는 오류 해결, 최대 절약 전략까지 완벽하게 안내합니다.
          </p>
        </div>
      </section>

      {/* Step-by-step Guide */}
      <section className="section-padding">
        <div className="container-content">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">
              📱 할인코드 적용 방법 (단계별)
            </h2>
            <p className="text-muted-foreground">아래 6단계를 따라하면 누구나 쉽게 할인코드를 적용할 수 있습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <img src={guideSteps} alt="호텔스닷컴 할인코드 적용 단계별 가이드" className="rounded-xl card-shadow w-full" loading="lazy" />
            <img src={mobileBooking} alt="모바일 호텔 예약 화면" className="rounded-xl card-shadow w-full" loading="lazy" />
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <article key={step.number} className="bg-card rounded-xl p-6 card-shadow border border-border">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-black text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{step.description}</p>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-secondary">
                      <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-xs text-muted-foreground">{step.tip}</p>
                    </div>
                    {step.number === 4 && (
                      <div className="mt-4">
                        <CopyCodeButton code="NPAY10" label="NPAY10 복사 & 적용" variant="large" />
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Code Selection */}
      <section className="section-padding bg-card">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8 text-center">
            🎟️ 바로 복사해서 사용하세요
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-5 rounded-xl bg-background card-shadow border border-border items-center">
              <img src={codeNpay10} alt="NPAY10 10% 할인" className="w-24 h-16 rounded-lg object-cover flex-shrink-0" loading="lazy" />
              <div className="flex-1">
                <p className="font-bold text-foreground text-sm">NPAY10 — 10% 할인</p>
                <p className="text-xs text-muted-foreground mb-2">네이버페이 전용, 9월 한정</p>
                <CopyCodeButton code="NPAY10" />
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl bg-background card-shadow border border-border items-center">
              <img src={codeDt26} alt="DT26 8% 할인" className="w-24 h-16 rounded-lg object-cover flex-shrink-0" loading="lazy" />
              <div className="flex-1">
                <p className="font-bold text-foreground text-sm">DT26 — 8% 할인</p>
                <p className="text-xs text-muted-foreground mb-2">전 세계, 2027년까지 투숙 가능</p>
                <CopyCodeButton code="DT26" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="section-padding">
        <div className="container-content">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">
              ⚠️ 자주 발생하는 오류 및 해결 방법
            </h2>
            <p className="text-muted-foreground">할인코드 적용 시 문제가 발생했나요? 아래에서 해결 방법을 확인하세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
            <img src={troubleshoot} alt="호텔스닷컴 할인코드 오류 해결" className="rounded-xl card-shadow w-full" loading="lazy" />
            <img src={checklist} alt="호텔스닷컴 체크리스트" className="rounded-xl card-shadow w-full" loading="lazy" />
          </div>

          <div className="space-y-4">
            {errors.map((error, i) => (
              <article key={i} className="bg-card rounded-xl p-6 card-shadow border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                  <h3 className="font-bold text-foreground">{error.problem}</h3>
                </div>
                <div className="ml-8 space-y-2">
                  <div className="flex gap-2 text-sm">
                    <HelpCircle className="text-muted-foreground flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="font-semibold text-foreground">원인: </span>
                      <span className="text-muted-foreground">{error.cause}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="font-semibold text-foreground">해결: </span>
                      <span className="text-muted-foreground">{error.solution}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Error Resolution Summary Table */}
      <section className="section-padding bg-card">
        <div className="container-content">
          <h2 className="text-xl md:text-2xl font-black text-foreground mb-6">
            📋 오류 해결 빠른 참조표
          </h2>
          <div className="table-responsive mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left p-3 font-bold text-foreground">오류 상황</th>
                  <th className="text-left p-3 font-bold text-foreground">원인</th>
                  <th className="text-left p-3 font-bold text-foreground">해결 방법</th>
                </tr>
              </thead>
              <tbody>
                {errors.map((error, i) => (
                  <tr key={i} className={`border-b border-border ${i % 2 === 0 ? "bg-secondary/30" : ""}`}>
                    <td className="p-3 font-semibold text-foreground">{error.problem}</td>
                    <td className="p-3 text-muted-foreground">{error.cause}</td>
                    <td className="p-3 text-muted-foreground">{error.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={comparison} alt="호텔스닷컴 플랫폼 비교" className="rounded-xl card-shadow w-full" loading="lazy" />
            <img src={savingsStrategy} alt="최대 절약 전략" className="rounded-xl card-shadow w-full" loading="lazy" />
          </div>
        </div>
      </section>

      {/* One Key + Customer Service */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* One Key */}
            <div>
              <h2 className="text-xl md:text-2xl font-black text-foreground mb-4">
                ⭐ One Key 리워드 활용법
              </h2>
              <img src={oneKeyRewards} alt="호텔스닷컴 One Key 리워드" className="rounded-xl card-shadow w-full mb-4" loading="lazy" />
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                호텔스닷컴의 One Key 멤버십 프로그램을 활용하면 숙박 예약 시 One Key Cash를 적립할 수 있습니다.
                적립된 캐시는 향후 예약 시 현금처럼 사용 가능합니다.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex gap-2 items-center">
                  <CheckCircle className="text-primary" size={16} />
                  <span className="text-muted-foreground">체인 호텔에서도 One Key Cash 적립 가능</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckCircle className="text-primary" size={16} />
                  <span className="text-muted-foreground">연 30박 달성 시 골드 등급 → 무료 식음료, 업그레이드</span>
                </div>
                <div className="flex gap-2 items-center">
                  <CheckCircle className="text-primary" size={16} />
                  <span className="text-muted-foreground">할인코드와 별개로 추가 적립 가능</span>
                </div>
              </div>
            </div>

            {/* Customer Service */}
            <div>
              <h2 className="text-xl md:text-2xl font-black text-foreground mb-4">
                📞 호텔스닷컴 고객센터
              </h2>
              <img src={customerService} alt="호텔스닷컴 고객센터 지원" className="rounded-xl card-shadow w-full mb-4" loading="lazy" />
              <div className="space-y-3">
                <div className="flex gap-3 p-3 rounded-lg bg-card card-shadow border border-border">
                  <MessageSquare className="text-primary flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-foreground text-sm">앱 챗봇</h3>
                    <p className="text-xs text-muted-foreground">24시간 연중무휴 이용 가능</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 rounded-lg bg-card card-shadow border border-border">
                  <Phone className="text-primary flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-foreground text-sm">예약 변경/취소</h3>
                    <p className="text-xs text-muted-foreground">앱 또는 웹 → '내 여행' 메뉴에서 직접 처리</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 rounded-lg bg-card card-shadow border border-border">
                  <FileText className="text-primary flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-foreground text-sm">바우처 수령</h3>
                    <p className="text-xs text-muted-foreground">예약 완료 후 이메일 자동 발송 / '내 여행' 메뉴에서도 다운로드</p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 rounded-lg bg-card card-shadow border border-border">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-foreground text-sm">가격 보장 프로그램</h3>
                    <p className="text-xs text-muted-foreground">예약 후 타 사이트에서 더 저렴한 요금 발견 시 차액 환불 가능</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels.com 소개 */}
      <section className="section-padding bg-card">
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-6">
            📌 호텔스닷컴이란?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="leading-relaxed text-muted-foreground space-y-4 text-sm">
              <p>
                호텔스닷컴은 익스피디아 그룹(Expedia Group)에 속한 글로벌 온라인 호텔 예약 플랫폼으로,
                전 세계 50만여 개 이상의 숙박 시설을 보유하고 있습니다. 국내에서는 익스피디아와 별도로 독립 운영 중이며,
                꾸준하게 높은 할인율의 코드를 제공하는 것으로 잘 알려져 있습니다.
              </p>
              <p>
                할인코드 사용 시 주의할 점은 메리어트, 힐튼, 하얏트, 어코르, IHG 등 글로벌 체인 호텔에는
                코드 적용이 안 된다는 것입니다. 반면 독립 호텔이나 소규모 체인 숙소는 대부분 적용 가능합니다.
              </p>
              <p>
                체인 호텔을 예약하더라도 스탬프 적립(현 One Key Cash 적립)은 정상 적용된다는 점은
                기억해 둘 만합니다. 장기적으로 할인코드 + 리워드 적립을 함께 활용하면 실질적인 절약 효과를 극대화할 수 있습니다.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background border border-border">
                <h3 className="font-bold text-foreground text-sm mb-2">핵심 정보</h3>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li>• 소속: 익스피디아 그룹 (Expedia Group)</li>
                  <li>• 숙박 시설: 전 세계 50만여 개+</li>
                  <li>• 리워드: One Key 멤버십 (Cash 적립)</li>
                  <li>• 가격 보장: 동일 호텔 최저가 보장</li>
                  <li>• 카드 제휴: 국내 8개+ 카드사</li>
                </ul>
              </div>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta px-6 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 w-full justify-center"
              >
                호텔스닷컴 바로가기 <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient section-padding">
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-4">
            가이드를 모두 확인하셨나요?
          </h2>
          <p className="text-primary-foreground/80 mb-8">지금 바로 할인코드를 복사하고 호텔스닷컴에서 예약하세요!</p>
          <CopyCodeButton code="NPAY10" label="NPAY10 복사 & 호텔스닷컴 바로가기" variant="large" />
        </div>
      </section>
    </Layout>
  );
};

export default Guide;
