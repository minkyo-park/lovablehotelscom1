import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const AFFILIATE_LINK = "http://app.ac/utw0WqM33";

const navItems = [
  { path: "/", label: "홈" },
  { path: "/discount-codes", label: "할인코드 모음" },
  { path: "/card-promotions", label: "카드사 프로모션" },
  { path: "/guide", label: "사용 가이드" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
        <nav className="container-content section-padding !py-0" aria-label="메인 내비게이션">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold text-primary" aria-label="호텔스닷컴 할인코드 홈">
              🏨 호텔스닷컴 할인코드
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 px-4 py-2 rounded-lg text-sm font-bold btn-cta inline-block"
                >
                  지금 예약하기 →
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === item.path
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 rounded-lg text-sm font-bold btn-cta text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    지금 예약하기 →
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container-content section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3 text-foreground">호텔스닷컴 할인코드</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                2026년 최신 호텔스닷컴 할인코드와 프로모션 정보를 한눈에 확인하세요.
                검증된 쿠폰 코드로 호텔 예약 시 최대 20%까지 절약할 수 있습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-foreground">빠른 링크</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-foreground">호텔스닷컴 바로가기</h3>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-cta px-6 py-3 rounded-lg font-bold text-sm"
              >
                호텔스닷컴에서 예약하기 →
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                * 본 사이트의 링크를 통해 예약 시 제휴 수수료가 발생할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            <p>© 2026 호텔스닷컴 할인코드. 모든 정보는 참고용이며, 정확한 할인 조건은 호텔스닷컴 공식 사이트에서 확인하세요.</p>
            <p className="mt-1">기준일: 2026년 4월 | 마지막 업데이트: 2026년 4월 8일</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
