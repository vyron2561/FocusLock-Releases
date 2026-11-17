import Link from "next/link";
import { getLatestFocusLockRelease, formatFileSize, formatReleaseDate } from "@/lib/releases";

const features = [
  { number: "01", title: "جلسات تركيز واضحة", description: "حدّد وقتك وابدأ جلسة تساعدك على الالتزام بهدف واحد دون تشتيت." },
  { number: "02", title: "حجب التطبيقات", description: "اختر التطبيقات التي تسرق انتباهك واتركها خارج جلسة التركيز." },
  { number: "03", title: "قفل شامل اختياري", description: "فعّل وضع التركيز الكامل عندما تحتاج إلى التزام أقوى." },
  { number: "04", title: "تذكيرات الصلاة", description: "ابقَ على اتصال بمواقيت الصلاة أثناء تنظيم يومك." }
];

export default async function HomePage() {
  const latest = await getLatestFocusLockRelease();

  return (
    <>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> مساحة أكثر هدوءاً ليومك</div>
          <h1>استعد وقتك.<br /><span>ركّز على ما يهم.</span></h1>
          <p className="hero-description">
            FocusLock يمنحك أدوات بسيطة لتقليل المشتتات، حماية جلساتك، وبناء علاقة أفضل مع وقتك.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/download">اكتشف التحميل <span>←</span></Link>
            <Link className="button button-quiet" href="#features">اكتشف المميزات</Link>
          </div>
          <div className="hero-meta">
            <span><i className="tiny-check">✓</i> تحميل مباشر لنظام Android</span>
            <span><i className="tiny-check">✓</i> تحديثات من الموقع الرسمي</span>
          </div>
        </div>

        <div className="hero-art" aria-label="تصميم توضيحي لواجهة FocusLock">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="focus-card">
            <div className="focus-card-top"><span className="mini-brand"><span className="brand-mark small"><span /></span> FOCUSLOCK</span><span className="live-pill">FOCUS MODE</span></div>
            <div className="focus-ring"><div><strong>25:00</strong><small>وقت التركيز</small></div></div>
            <div className="focus-card-bottom"><span>جلسة عميقة</span><span className="pause-symbol">Ⅱ</span></div>
            <div className="focus-progress"><span /></div>
          </div>
          <div className="floating-note note-top"><span className="note-icon">✦</span><div><b>وقت محمي</b><small>أبعد المشتتات</small></div></div>
          <div className="floating-note note-bottom"><span className="note-icon note-icon-soft">✓</span><div><b>أنت تتحكم</b><small>خطوة واحدة في كل مرة</small></div></div>
          <div className="hero-glow" />
        </div>
      </section>

      <section className="trust-strip">
        <div className="trust-inner"><span>تركيز أكثر</span><i /> <span>مشتتات أقل</span><i /> <span>وقت له قيمة</span><i /> <span>قرارك بيدك</span></div>
      </section>

      <section className="section-wrap features-section" id="features">
        <div className="section-heading">
          <div><div className="eyebrow">مصمم ليومك الحقيقي</div><h2>أدوات صغيرة.<br /><span>فرق كبير.</span></h2></div>
          <p>لا نريد إضافة ضجيج جديد إلى هاتفك. نريد مساعدتك على تقليل الضجيج الموجود بالفعل.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <div className="feature-symbol">{feature.number === "01" ? "◷" : feature.number === "02" ? "⌑" : feature.number === "03" ? "⛨" : "☾"}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="feature-arrow">↙</span>
            </article>
          ))}
        </div>
      </section>

      <section className="download-band section-wrap">
        <div className="download-band-content">
          <div className="eyebrow">ابدأ بخطوة واحدة</div>
          <h2>{latest ? `FocusLock ${latest.version} متاح الآن` : "مساحتك للتركيز تبدأ هنا."}</h2>
          <p>{latest ? `آخر إصدار نُشر في ${formatReleaseDate(latest.publishedAt)} · ${formatFileSize(latest.apk.sizeBytes)}` : "نعمل على تجهيز أول إصدار عام. ستجد رابط التحميل هنا فور نشره."}</p>
          <Link className="button button-primary" href="/download">{latest ? "تحميل آخر إصدار" : "تفاصيل التحميل"} <span>←</span></Link>
        </div>
        <div className="band-decoration"><span>F</span><i /><i /><i /></div>
      </section>
    </>
  );
}
