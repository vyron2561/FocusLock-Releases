import { getLatestFocusLockRelease, formatFileSize, formatReleaseDate } from "@/lib/releases";

const features = [
  { icon: "◷", number: "01", title: "جلسات تركيز", text: "ابدأ جلسة بوقت واضح، وامنح مهمة واحدة انتباهك الكامل." },
  { icon: "▦", number: "02", title: "حجب التطبيقات", text: "اختر التطبيقات المشتتة ودع FocusLock يساعدك على الابتعاد عنها أثناء الجلسة." },
  { icon: "⌑", number: "03", title: "قفل الهاتف", text: "فعّل القفل الشامل عندما تحتاج إلى مستوى أعلى من الالتزام." },
  { icon: "☾", number: "04", title: "مواقيت الصلاة", text: "نظّم وقتك مع متابعة مواقيت الصلاة ضمن يومك." }
];

const faqs = [
  ["ما هو FocusLock؟", "FocusLock تطبيق Android يساعدك على تنظيم جلسات التركيز وتقليل استخدام التطبيقات المشتتة."],
  ["هل أحتاج إلى Google Play؟", "لا. يمكنك تنزيل ملف APK من هذه الصفحة مباشرة، وستتوفر التحديثات من خلال الموقع الرسمي."],
  ["كيف يعمل التحديث التلقائي؟", "يتحقق التطبيق من وجود إصدار أحدث عبر واجهة التحديث الخاصة بالموقع. عند توفر تحديث، ينبهك ويساعدك على تنزيله؛ ويظل تثبيت APK خاضعاً لموافقة Android."],
  ["هل يمكنني اختيار التطبيقات التي أريد حجبها؟", "نعم، يمكنك تحديد التطبيقات التي تريد منعها أثناء جلسات التركيز من داخل التطبيق."]
];

export default async function HomePage() {
  const latest = await getLatestFocusLockRelease();
  const downloadHref = latest?.apk.url ?? "#download";

  return (
    <>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> وقتك يستحق انتباهك</div>
          <h1>ابتعد عن<br /><span>المشتتات.</span><br />واقترب مما يهم.</h1>
          <p className="hero-description">
            لا تدع هاتفك يقرر كيف تقضي يومك. FocusLock يساعدك على حماية وقتك، حجب التطبيقات المشتتة، والعودة إلى أهدافك.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={downloadHref}> {latest ? "حمّل FocusLock" : "قريباً — تحميل التطبيق"} <span>↓</span></a>
            <a className="button button-quiet" href="#features">اكتشف المميزات</a>
          </div>
          <div className="hero-meta">
            <span><i>✓</i> تنزيل مباشر بصيغة APK</span>
            <span><i>✓</i> تحديثات من الموقع الرسمي</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="تصميم توضيحي لواجهة تطبيق FocusLock">
          <div className="visual-glow" />
          <div className="visual-orbit orbit-a" />
          <div className="visual-orbit orbit-b" />
          <div className="phone">
            <div className="phone-top"><span>9:41</span><span className="phone-speaker" /><span>◖ ▰</span></div>
            <div className="phone-brand"><span className="brand-mark"><i /></span><b>Focus<span>Lock</span></b><small>FOCUS SESSION</small></div>
            <div className="timer-ring"><div><strong>25:00</strong><small>وقت التركيز</small></div></div>
            <div className="session-caption"><span className="session-dot" /> جلسة تركيز نشطة</div>
            <div className="phone-divider" />
            <div className="blocked-heading"><span>التطبيقات المحجوبة</span><small>03</small></div>
            <div className="app-pills"><span><i className="app-icon instagram">◎</i> Social</span><span><i className="app-icon video">▶</i> Video</span><span><i className="app-icon game">✦</i> Games</span></div>
            <div className="phone-bottom"><span>ابقَ في المسار</span><b>●</b></div>
          </div>
          <div className="floating-chip chip-top"><span>✦</span><div><b>تركيز أعمق</b><small>مشتتات أقل</small></div></div>
          <div className="floating-chip chip-bottom"><span>✓</span><div><b>وقتك بيدك</b><small>ابدأ من الآن</small></div></div>
          <div className="visual-caption">FOCUS ON WHAT MATTERS</div>
        </div>
      </section>

      <section className="intro-band">
        <div className="section-wrap intro-inner">
          <span>01 / الفكرة</span>
          <h2>كل دقيقة تمرّ،<br /><em>اختر أين تذهب.</em></h2>
          <p>التنبيهات، التصفح، والتطبيقات التي لا تنتهي تسرق انتباهك دون أن تشعر. FocusLock يمنحك مساحة لتتوقف، تختار، وتركّز من جديد.</p>
        </div>
      </section>

      <section className="section-wrap features-section" id="features">
        <div className="section-heading">
          <div><div className="eyebrow">مصمم ليساعدك على الالتزام</div><h2>أدوات بسيطة.<br /><span>تحكم أكبر.</span></h2></div>
          <p>كل ما تحتاجه لتقليل المشتتات وتنظيم وقتك، في تجربة واحدة واضحة.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-card-top"><span>{feature.number}</span><b>{feature.icon}</b></div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <span className="feature-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="section-wrap how-inner">
          <div className="how-heading">
            <div className="eyebrow">02 / ابدأ الآن</div>
            <h2>ثلاث خطوات.<br /><span>لحظة مختلفة.</span></h2>
            <p>لا تحتاج إلى تغيير يومك بالكامل. ابدأ بجلسة واحدة، ثم ابنِ عادتك خطوة بخطوة.</p>
          </div>
          <div className="steps">
            <article><span>01</span><div><h3>حدّد هدفك</h3><p>اختر مدة جلسة التركيز والتطبيقات التي تريد حجبها.</p></div><b>↙</b></article>
            <article><span>02</span><div><h3>ابدأ الجلسة</h3><p>فعّل FocusLock واترك هاتفك يساعدك على الالتزام.</p></div><b>↙</b></article>
            <article><span>03</span><div><h3>أنجز ما يهم</h3><p>استثمر وقتك في الدراسة أو العمل أو لحظاتك المهمة.</p></div><b>↙</b></article>
          </div>
        </div>
      </section>

      <section className="use-section section-wrap">
        <div className="use-heading"><div className="eyebrow">وقتك، بطريقتك</div><h2>للدراسة. للعمل.<br /><span>وللحياة خارج الشاشة.</span></h2></div>
        <div className="use-grid">
          <article className="use-card study"><span>01 — STUDY</span><div className="use-symbol">▤</div><h3>وقت الدراسة</h3><p>قلّل المقاطعات وامنح دروسك انتباهاً حقيقياً.</p></article>
          <article className="use-card work"><span>02 — WORK</span><div className="use-symbol">⌘</div><h3>وقت العمل</h3><p>أنهِ مهامك بتركيز، بعيداً عن التنقل المستمر بين التطبيقات.</p></article>
          <article className="use-card life"><span>03 — LIFE</span><div className="use-symbol">☼</div><h3>وقتك لنفسك</h3><p>اترك الهاتف جانباً وكن حاضراً مع من حولك.</p></article>
        </div>
      </section>

      <section className="download-section" id="download">
        <div className="section-wrap download-inner">
          <div className="download-copy">
            <div className="eyebrow"><span className="status-dot" /> ابدأ رحلتك مع FocusLock</div>
            <h2>{latest ? "نسختك الجديدة من التركيز جاهزة." : "امنح وقتك بداية جديدة."}</h2>
            <p>{latest ? `الإصدار ${latest.version} · ${formatFileSize(latest.apk.sizeBytes)} · نُشر في ${formatReleaseDate(latest.publishedAt)}` : "نعمل على تجهيز أول إصدار عام. سيظهر زر التحميل هنا بمجرد نشر ملف APK الرسمي."}</p>
            <a className={latest ? "button button-primary" : "button button-disabled"} href={downloadHref}>{latest ? "تحميل APK الآن" : "التحميل قريباً"} <span>↓</span></a>
            <small>Android · APK مباشر · بدون Google Play</small>
          </div>
          <div className="download-art"><div className="download-mark"><span className="brand-mark"><i /></span><b>Focus<span>Lock</span></b></div><div className="download-ring ring-one" /><div className="download-ring ring-two" /><span className="download-star">✳</span></div>
        </div>
      </section>

      <section className="faq-section section-wrap" id="faq">
        <div className="faq-heading"><div className="eyebrow">هل لديك سؤال؟</div><h2>إجابات<br /><span>بلا تعقيد.</span></h2><p>معلومات سريعة حول التطبيق والتنزيل والتحديثات.</p></div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details className="faq-item" key={question} open={index === 0}>
              <summary><span>{question}</span><b>＋</b></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
