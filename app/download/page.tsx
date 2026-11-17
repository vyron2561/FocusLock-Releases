import type { Metadata } from "next";
import Link from "next/link";
import { getLatestFocusLockRelease, formatFileSize, formatReleaseDate } from "@/lib/releases";

export const metadata: Metadata = { title: "تحميل FocusLock" };

export default async function DownloadPage() {
  const release = await getLatestFocusLockRelease();

  return (
    <section className="inner-page section-wrap">
      <div className="eyebrow"><span className="status-dot" /> التحميل الرسمي</div>
      <h1 className="page-title">نسخة واحدة.<br /><span>تركيز أكثر.</span></h1>
      <p className="page-lead">حمّل FocusLock مباشرة من موقعه الرسمي. لا حاجة إلى متجر Google Play.</p>

      <div className="release-panel">
        <div className="release-panel-icon"><span className="brand-mark large"><span /></span></div>
        <div className="release-panel-main">
          <span className="release-label">أحدث إصدار مستقر</span>
          <h2>{release ? `FocusLock ${release.version}` : "الإصدار الأول قيد التجهيز"}</h2>
          {release ? (
            <div className="release-meta">
              <span>الإصدار {release.version}</span><i />
              <span>{formatFileSize(release.apk.sizeBytes)}</span><i />
              <span>{formatReleaseDate(release.publishedAt)}</span>
            </div>
          ) : <p className="muted">لم يتم نشر ملف APK بعد. سيظهر زر التحميل تلقائياً عند نشر أول إصدار رسمي.</p>}
        </div>
        {release ? <a className="button button-primary download-button" href={release.apk.url}>تحميل APK <span>↓</span></a> : <span className="button button-disabled">قريباً</span>}
      </div>

      <div className="notice-box"><span>ⓘ</span><p>التثبيت يتم عبر Android. قد يطلب منك النظام السماح بتثبيت التطبيقات من هذا المصدر. لا يمكن تثبيت تحديث فوق النسخة الحالية إلا إذا كان الإصدار الجديد موقعاً بمفتاح التوقيع نفسه.</p></div>

      <div className="steps-grid">
        <article><span>01</span><h3>حمّل الملف</h3><p>اضغط على زر التحميل واحفظ ملف APK على هاتفك.</p></article>
        <article><span>02</span><h3>اسمح بالتثبيت</h3><p>إذا طلب Android الإذن، اسمح للمتصفح أو مدير الملفات بتثبيت التطبيقات.</p></article>
        <article><span>03</span><h3>ثبّت FocusLock</h3><p>افتح الملف واتبع تعليمات التثبيت التي يعرضها Android.</p></article>
      </div>
      <p className="back-link"><Link href="/help">تحتاج إلى مساعدة في التثبيت؟ ←</Link></p>
    </section>
  );
}
