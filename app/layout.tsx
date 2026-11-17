import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FocusLock — استعد تركيزك",
    template: "%s | FocusLock"
  },
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

const navigation = [
  { href: "/", label: "الرئيسية" },
  { href: "/download", label: "تحميل التطبيق" },
  { href: "/updates", label: "التحديثات" },
  { href: "/help", label: "المساعدة" }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="header-inner">
              <Link className="brand" href="/" aria-label="FocusLock الرئيسية">
                <span className="brand-mark"><span /></span>
                <span className="brand-name">Focus<span>Lock</span></span>
              </Link>
              <nav className="main-nav" aria-label="القائمة الرئيسية">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.href}>{item.label}</Link>
                ))}
              </nav>
              <Link className="header-cta" href="/download">حمّل FocusLock <span>↗</span></Link>
            </div>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <div className="footer-inner">
              <Link className="brand footer-brand" href="/">
                <span className="brand-mark"><span /></span>
                <span className="brand-name">Focus<span>Lock</span></span>
              </Link>
              <p>صمّم وقتك حول ما يهم.</p>
              <div className="footer-links">
                <Link href="/updates">سجل التحديثات</Link>
                <Link href="/help">المساعدة</Link>
                <Link href="/privacy">الخصوصية</Link>
              </div>
              <small>© {new Date().getFullYear()} FocusLock. جميع الحقوق محفوظة.</small>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
