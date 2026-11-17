import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "المساعدة" };

const questions = [
  ["كيف أثبّت FocusLock؟", "حمّل ملف APK من صفحة التحميل، ثم افتحه واتبع تعليمات Android. قد تحتاج إلى السماح لمصدر التحميل بتثبيت التطبيقات."],
  ["هل يحتاج التطبيق إلى Google Play؟", "لا. يتم توزيع FocusLock وتحديثه من خلال موقعه الرسمي وقناة الإصدارات على GitHub."],
  ["كيف تصلني التحديثات؟", "عندما يتوفر إصدار جديد، يستطيع التطبيق التحقق من قناة التحديث وإظهار إشعار لك. تنزيل التحديث وتثبيته يظل خاضعاً لتأكيد Android."],
  ["لماذا لا يثبت التحديث فوق النسخة الحالية؟", "يجب أن يكون التطبيق الجديد موقعاً بمفتاح التوقيع نفسه، وأن يحمل معرّف الحزمة نفسه ورقم إصدار أعلى. إذا اختلف مفتاح التوقيع، سيرفض Android التحديث."],
  ["هل التحديث صامت بالكامل؟", "لا. Android يعرض واجهة تثبيت النظام ويطلب تأكيد المستخدم في التثبيت العادي. FocusLock لا يتجاوز حماية النظام."]
];

export default function HelpPage() {
  return (
    <section className="inner-page section-wrap">
      <div className="eyebrow">مركز المساعدة</div>
      <h1 className="page-title">إجابات واضحة.<br /><span>بلا تعقيد.</span></h1>
      <p className="page-lead">معلومات تساعدك على تنزيل FocusLock وتثبيته وتحديثه بأمان.</p>
      <div className="faq-list">
        {questions.map(([question, answer], index) => (
          <details className="faq-item" key={question} open={index === 0}>
            <summary><span>{question}</span><b>＋</b></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
      <div className="help-cta"><div><h2>جاهز للبدء؟</h2><p>حمّل أحدث نسخة رسمية من FocusLock.</p></div><Link className="button button-primary" href="/download">صفحة التحميل ←</Link></div>
    </section>
  );
}
