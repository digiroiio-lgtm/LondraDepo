import FaqJsonLd, { type Faq } from "./FaqJsonLd";

export default function PageFaq({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="py-12 px-4 bg-white">
      <FaqJsonLd faqs={faqs} />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-extrabold text-[#0b2545] mb-6">Sık Sorulan Sorular</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-[#0b2545] mb-2">{q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
