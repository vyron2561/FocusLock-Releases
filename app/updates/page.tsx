import type { Metadata } from "next";
import Link from "next/link";
import { getFocusLockReleases, formatFileSize, formatReleaseDate } from "@/lib/releases";

export const metadata: Metadata = { title: "التحديثات" };

export default async function UpdatesPage() {
  const releases = await getFocusLockReleases();

  return (
    <section className="inner-page section-wrap">
      <div className="eyebrow">تطور FocusLock</div>
      <h1 className="page-title">كل تحديث،<br /><span>خطوة إلى الأمام.</span></h1>
      <p className="page-lead">هنا تجد الإصدارات الرسمية وملاحظات كل تحديث.</p>

      {releases.length ? (
        <div className="timeline">
          {releases.map((release, index) => (
            <article className="timeline-item" key={release.id}>
              <div className="timeline-marker">{index === 0 ? "●" : "○"}</div>
              <div className="timeline-content">
                <div className="timeline-meta"><span>{index === 0 ? "أحدث إصدار" : "إصدار سابق"}</span><i />{formatReleaseDate(release.publishedAt)}</div>
                <h2>FocusLock {release.version}</h2>
                <p className="release-size">{release.apk.name} · {formatFileSize(release.apk.sizeBytes)}</p>
                <div className="release-notes">{release.notes}</div>
                <a className="text-link" href={release.pageUrl} target="_blank" rel="noreferrer">تفاصيل الإصدار على GitHub ↗</a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state"><span className="empty-icon">◷</span><h2>لا توجد تحديثات منشورة بعد</h2><p>ستظهر هنا جميع الإصدارات فور نشرها في قناة FocusLock الرسمية.</p><Link className="button button-quiet" href="/download">صفحة التحميل</Link></div>
      )}
    </section>
  );
}
