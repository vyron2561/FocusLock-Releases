import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FocusLock — استعد تركيزك",
  description: "FocusLock يساعدك على حماية وقتك، حجب التطبيقات المشتتة، وبناء جلسات تركيز أكثر هدوءاً.",
  applicationName: "FocusLock",
  icons: { icon: "/focuslock-mark.svg" },
  openGraph: {
    title: "FocusLock — استعد تركيزك",
    description: "وقتك يستحق انتباهك.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#090a0c",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="header-inner">
              <a className="brand" href="#home" aria-label="FocusLock الرئيسية">
                <span className="brand-mark"><i /></span>
                <span className="brand-name">Focus<span>Lock</span></span>
              </a>
              <nav className="main-nav" aria-label="التنقل الرئيسي">
                <a href="#features">المميزات</a>
                <a href="#how">كيف يعمل</a>
                <a href="#faq">الأسئلة الشائعة</a>
              </nav>
              <a className="header-cta" href="#download">تحميل التطبيق <span>↓</span></a>
            </div>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <div className="footer-inner">
              <a className="brand" href="#home">
                <span className="brand-mark"><i /></span>
                <span className="brand-name">Focus<span>Lock</span></span>
              </a>
              <p>وقتك يستحق انتباهك.</p>
              <a className="footer-download" href="#download">تحميل FocusLock ↑</a>
              <small>© {new Date().getFullYear()} FocusLock. جميع الحقوق محفوظة.</small>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
