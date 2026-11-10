"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { trackCtaClick, trackFormStart, trackWhatsappClick } from "@/lib/gtag";

/**
 * Container arrival planner. Produces a suggested planning timeline from the ETA.
 * Uses only published facts: road distances from SS6 7FY, the import steps in the UK
 * importing guide, the unloading process and the £3.50 + VAT pallet storage rate.
 * Planning dates are suggestions, not operational commitments.
 */

type Port = "gateway" | "tilbury" | "felixstowe" | "other";
type Box = "20" | "40" | "40hc" | "lcl";
type Load = "pallets" | "loose";
type Customs = "arca" | "own" | "unsure";
type Next = "store" | "crossdock" | "both";

const ROUTE: Record<Exclude<Port, "other">, { miles: number; km: number; mins: { en: string; tr: string } }> = {
  gateway: { miles: 13, km: 21, mins: { en: "~20 minutes", tr: "~20 dakika" } },
  tilbury: { miles: 16, km: 26, mins: { en: "~20 minutes", tr: "~20 dakika" } },
  felixstowe: { miles: 62, km: 99, mins: { en: "~1¼ hours", tr: "~1 saat 15 dakika" } },
};

/** Floor positions for standard UK pallets (1200 × 1000 mm), single-stacked: a common rule of thumb. */
const DEFAULT_PALLETS: Record<Box, number> = { "20": 10, "40": 20, "40hc": 20, lcl: 4 };
const RATE = 3.5;

const T = {
  en: {
    port: "Arrival port", ports: { gateway: "DP World London Gateway", tilbury: "Port of Tilbury", felixstowe: "Port of Felixstowe", other: "Other / not sure" },
    box: "Container", boxes: { "20": "20ft FCL", "40": "40ft FCL", "40hc": "40ft high-cube FCL", lcl: "LCL / part load" },
    load: "How is it loaded?", loads: { pallets: "Palletised", loose: "Loose-loaded (floor-loaded cartons)" },
    eta: "Estimated arrival at port (ETA)",
    customs: "Who handles UK customs?", customsOpts: { arca: "Arca Trade Group (our parent company)", own: "My own forwarder or customs agent", unsure: "Not sure yet" },
    next: "After unloading", nexts: { store: "Store in the warehouse", crossdock: "Send straight on (cross-dock)", both: "Store part, send part on" },
    pallets: "Expected pallets",
    palletsHint: "Rule of thumb: about 10 standard UK pallets fit on the floor of a 20ft container and about 20 in a 40ft. Change it to your real number.",
    plan: "Your container arrival plan",
    route: (p: string, mi: number, km: number, t: string) => `${p} → Rayleigh, Essex: ${mi} miles / ${km} km, ${t} by road (free-flow).`,
    routeOther: "Tell us the arrival port and we will plan the haulage to Rayleigh, Essex.",
    by: "By", onArrival: "On arrival", afterRelease: "After customs release",
    steps: {
      importer: "Confirm the importer of record has a GB EORI number and the commodity code for every product.",
      docsArca: "Send the commercial invoice, packing list and transport document to Arca Trade Group's customs team.",
      docsOwn: "Confirm your forwarder or customs agent will lodge the import declaration in CDS, and share the documents with them.",
      docsUnsure: "Decide who lodges the import declaration in CDS. Arca Trade Group can do this for you.",
      preadvice: "Send pre-advice to LondraDepo: container number, ETA, packing list and carton counts per SKU.",
      preadviceLoose: "Flag that the cartons are loose-loaded so palletising and labelling can be planned and quoted before arrival.",
      slot: "Confirm haulage from the port (Arca Trade Group or your forwarder) and agree the delivery slot at Rayleigh.",
      arrive: "Declaration lodged before or on arrival. Customs duty is paid on release; import VAT is paid or accounted for (postponed VAT accounting if VAT-registered).",
      haul: "Container hauled to Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY.",
      unload: "Unloaded, counted against the packing list, visible damage photographed and discrepancies reported.",
      palletise: "Loose cartons palletised, labelled and sorted by SKU.",
      wms: "Stock booked into Mintsoft WMS.",
      store: "Stored and released as orders arrive.",
      crossdock: "Sent on to your UK customers or to Amazon.",
      both: "Part stored, part sent straight on to customers or Amazon.",
    },
    storage: (n: number, w: string) => `Storage for ${n} pallets starts from ${w} + VAT per week (£3.50 + VAT per pallet per week).`,
    note: "Suggested planning dates, not guaranteed timings. Port release, customs checks and haulage availability can change them.",
    quote: "Get an unloading quote with this plan", wa: "Send this plan on WhatsApp", print: "Print or save as PDF",
    locale: "en-GB",
  },
  tr: {
    port: "Varış limanı", ports: { gateway: "DP World London Gateway", tilbury: "Tilbury Limanı", felixstowe: "Felixstowe Limanı", other: "Diğer / emin değilim" },
    box: "Konteyner", boxes: { "20": "20ft FCL", "40": "40ft FCL", "40hc": "40ft high-cube FCL", lcl: "LCL / parsiyel yük" },
    load: "Yükleme şekli", loads: { pallets: "Paletli", loose: "Dökme (paletsiz koliler)" },
    eta: "Limana tahmini varış (ETA)",
    customs: "UK gümrüklemesini kim yapacak?", customsOpts: { arca: "Arca Trade Group (bağlı olduğumuz şirket)", own: "Kendi nakliyecim veya gümrük müşavirim", unsure: "Henüz belli değil" },
    next: "Boşaltmadan sonra", nexts: { store: "Depoda stoklansın", crossdock: "Doğrudan sevk edilsin (cross-dock)", both: "Bir kısmı stok, bir kısmı sevk" },
    pallets: "Tahmini palet sayısı",
    palletsHint: "Genel kural: 20ft konteynerin tabanına yaklaşık 10, 40ft konteynere yaklaşık 20 standart UK paleti sığar. Gerçek sayınızı girin.",
    plan: "Konteyner varış planınız",
    route: (p: string, mi: number, km: number, t: string) => `${p} → Rayleigh, Essex: ${mi} mil / ${km} km, karayoluyla ${t} (trafiksiz).`,
    routeOther: "Varış limanını yazın, Rayleigh, Essex'e taşımayı birlikte planlayalım.",
    by: "En geç", onArrival: "Varışta", afterRelease: "Gümrükten çekildikten sonra",
    steps: {
      importer: "İthalatçının GB EORI numarası olduğunu ve her ürünün UK gümrük tarife kodunu (commodity code) teyit edin.",
      docsArca: "Ticari fatura, ambalaj listesi ve taşıma belgesini Arca Trade Group gümrük ekibine gönderin.",
      docsOwn: "Nakliyecinizin veya gümrük müşavirinizin ithalat beyannamesini CDS'te vereceğini teyit edin ve belgeleri paylaşın.",
      docsUnsure: "İthalat beyannamesini CDS'te kimin vereceğine karar verin. Arca Trade Group bunu sizin için yapabilir.",
      preadvice: "LondraDepo'ya ön bildirim gönderin: konteyner numarası, ETA, ambalaj listesi ve SKU başına koli sayısı.",
      preadviceLoose: "Kolilerin dökme yüklendiğini belirtin; paletleme ve etiketleme varıştan önce planlansın ve fiyatlansın.",
      slot: "Limandan taşımayı (Arca Trade Group veya nakliyeciniz) teyit edin ve Rayleigh'deki teslim saatini netleştirin.",
      arrive: "Beyanname varıştan önce veya varışta verilir. Gümrük vergisi tahliyede ödenir; ithalat KDV'si ödenir veya beyan edilir (KDV kayıtlıysanız ertelenmiş KDV muhasebesi).",
      haul: "Konteyner Unit 19 Arterial Park, Rayleigh, Essex SS6 7FY adresine taşınır.",
      unload: "Boşaltılır, ambalaj listesiyle karşılaştırılarak sayılır, görünür hasar fotoğraflanır ve farklar bildirilir.",
      palletise: "Dökme koliler paletlenir, etiketlenir ve SKU'ya göre ayrılır.",
      wms: "Stok Mintsoft WMS'e kaydedilir.",
      store: "Depolanır ve siparişler geldikçe sevk edilir.",
      crossdock: "UK müşterilerinize veya Amazon'a sevk edilir.",
      both: "Bir kısmı depolanır, bir kısmı doğrudan müşterilere veya Amazon'a sevk edilir.",
    },
    storage: (n: number, w: string) => `${n} palet için depolama haftalık ${w} + KDV'den başlar (palet başına haftalık £3,50 + KDV).`,
    note: "Önerilen planlama tarihleridir, garanti edilen süreler değildir. Liman tahliyesi, gümrük kontrolleri ve taşıma müsaitliği bunları değiştirebilir.",
    quote: "Bu planla boşaltma teklifi iste", wa: "Planı WhatsApp'tan gönder", print: "Yazdır veya PDF olarak kaydet",
    locale: "tr-TR",
  },
} as const;

function addDays(iso: string, d: number) {
  const dt = new Date(`${iso}T12:00:00Z`);
  dt.setUTCDate(dt.getUTCDate() + d);
  return dt;
}

export default function ContainerPlanner({ lang = "en" }: { lang?: "en" | "tr" }) {
  const t = T[lang];
  const [port, setPort] = useState<Port>("tilbury");
  const [box, setBox] = useState<Box>("40hc");
  const [load, setLoad] = useState<Load>("pallets");
  const [eta, setEta] = useState("");
  const [customs, setCustoms] = useState<Customs>("arca");
  const [next, setNext] = useState<Next>("store");
  const [pallets, setPallets] = useState(DEFAULT_PALLETS["40hc"]);
  const used = useRef(false);

  // Default ETA three weeks out, set on the client to keep the page static.
  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + 21);
    setEta(d.toISOString().slice(0, 10));
  }, []);

  const touch = () => {
    if (!used.current) {
      used.current = true;
      trackFormStart(`container_planner_${lang}`);
    }
  };

  const fmt = useMemo(() => new Intl.DateTimeFormat(t.locale, lang === "en" ? { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" } : { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" }), [t.locale, lang]);
  const gbp = useMemo(() => new Intl.NumberFormat(t.locale, { style: "currency", currency: "GBP" }), [t.locale]);
  // Deadlines before arrival move back to the previous working day (Friday) if they fall on a weekend.
  const date = (d: number) => {
    if (!eta) return "";
    const dt = addDays(eta, d);
    if (d < 0) while (dt.getUTCDay() === 0 || dt.getUTCDay() === 6) dt.setUTCDate(dt.getUTCDate() - 1);
    return fmt.format(dt);
  };

  const docs = customs === "arca" ? t.steps.docsArca : customs === "own" ? t.steps.docsOwn : t.steps.docsUnsure;
  const before: [string, string[]][] = [
    [`${t.by} ${date(-21)}`, [t.steps.importer, docs]],
    [`${t.by} ${date(-7)}`, load === "loose" ? [t.steps.preadvice, t.steps.preadviceLoose] : [t.steps.preadvice]],
    [`${t.by} ${date(-3)}`, [t.steps.slot]],
    [`${t.onArrival} · ${date(0)}`, [t.steps.arrive]],
  ];
  const after = [t.steps.haul, t.steps.unload, ...(load === "loose" ? [t.steps.palletise] : []), t.steps.wms, t.steps[next]];
  const route = port === "other" ? t.routeOther : t.route(t.ports[port], ROUTE[port].miles, ROUTE[port].km, ROUTE[port].mins[lang]);
  const storeNote = next !== "crossdock" && load === "pallets" ? t.storage(pallets, gbp.format(pallets * RATE)) : "";

  const summary = [
    `${t.boxes[box]}, ${t.loads[load]}, ${t.ports[port]}, ETA ${eta}`,
    `${t.customs} ${t.customsOpts[customs]}`,
    `${t.next}: ${t.nexts[next]}${load === "pallets" ? `, ~${pallets} ${lang === "en" ? "pallets" : "palet"}` : ""}`,
  ].join(". ");
  const quoteHref =
    lang === "en"
      ? `/en/request-a-quote?service=container-unloading${load === "pallets" ? `&pallets=${pallets}` : ""}&note=${encodeURIComponent(`Container planner: ${summary}.`)}&from=%2Fen%2Fcontainer-arrival-planner`
      : "#teklif";
  const waHref = `https://wa.me/447554195190?text=${encodeURIComponent(
    (lang === "en" ? "Hello, I'd like to plan a container delivery: " : "Merhaba, konteyner teslimatı planlamak istiyorum: ") + summary + ".",
  )}`;

  const print = () => {
    trackCtaClick("planner_print", `container_planner_${lang}`);
    document.body.classList.add("print-planner");
    window.print();
    document.body.classList.remove("print-planner");
  };

  const field = "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0b2545]";
  const label = "block text-sm font-semibold text-slate-700 mb-1.5";
  const id = (k: string) => `planner-${k}-${lang}`;

  return (
    <div className="grid gap-6 lg:grid-cols-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <div className="space-y-4 lg:col-span-2">
        <div>
          <label htmlFor={id("port")} className={label}>{t.port}</label>
          <select id={id("port")} className={field} value={port} onChange={(e) => { touch(); setPort(e.target.value as Port); }}>
            {(Object.keys(t.ports) as Port[]).map((k) => <option key={k} value={k}>{t.ports[k]}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor={id("box")} className={label}>{t.box}</label>
          <select id={id("box")} className={field} value={box} onChange={(e) => { touch(); const b = e.target.value as Box; setBox(b); setPallets(DEFAULT_PALLETS[b]); }}>
            {(Object.keys(t.boxes) as Box[]).map((k) => <option key={k} value={k}>{t.boxes[k]}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor={id("load")} className={label}>{t.load}</label>
          <select id={id("load")} className={field} value={load} onChange={(e) => { touch(); setLoad(e.target.value as Load); }}>
            {(Object.keys(t.loads) as Load[]).map((k) => <option key={k} value={k}>{t.loads[k]}</option>)}
          </select>
        </div>
        {load === "pallets" && (
          <div>
            <label htmlFor={id("pallets")} className={label}>{t.pallets}</label>
            <input id={id("pallets")} type="number" inputMode="numeric" min={1} max={60} className={field} value={pallets}
              onChange={(e) => { touch(); const n = Math.round(Number(e.target.value)); setPallets(Number.isFinite(n) ? Math.min(60, Math.max(1, n)) : 1); }} />
            <p className="mt-1 text-xs text-slate-500">{t.palletsHint}</p>
          </div>
        )}
        <div>
          <label htmlFor={id("eta")} className={label}>{t.eta}</label>
          <input id={id("eta")} type="date" className={field} value={eta} onChange={(e) => { touch(); if (e.target.value) setEta(e.target.value); }} />
        </div>
        <div>
          <label htmlFor={id("customs")} className={label}>{t.customs}</label>
          <select id={id("customs")} className={field} value={customs} onChange={(e) => { touch(); setCustoms(e.target.value as Customs); }}>
            {(Object.keys(t.customsOpts) as Customs[]).map((k) => <option key={k} value={k}>{t.customsOpts[k]}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor={id("next")} className={label}>{t.next}</label>
          <select id={id("next")} className={field} value={next} onChange={(e) => { touch(); setNext(e.target.value as Next); }}>
            {(Object.keys(t.nexts) as Next[]).map((k) => <option key={k} value={k}>{t.nexts[k]}</option>)}
          </select>
        </div>
      </div>

      <div id="planner-print" className="lg:col-span-3 rounded-xl bg-slate-50 border border-slate-200 p-6" aria-live="polite">
        <div className="text-xl font-bold text-[#0b2545] mb-1">{t.plan}</div>
        <div className="text-sm text-slate-600 mb-4">{t.boxes[box]} · {t.loads[load]} · {t.ports[port]}</div>
        <div className="rounded-lg bg-white border border-slate-200 p-3 text-sm text-slate-700 mb-5">🚚 {route}</div>
        {eta && <ol className="space-y-4">
          {before.map(([when, items], i) => (
            <li key={i}>
              <div className="text-sm font-bold text-[#d62839]">{when}</div>
              {items.map((s, j) => <div key={j} className="flex gap-2 text-sm text-slate-700 mt-1"><span aria-hidden="true">☐</span><span>{s}</span></div>)}
            </li>
          ))}
          <li>
            <div className="text-sm font-bold text-[#d62839]">{t.afterRelease}</div>
            {after.map((s, j) => <div key={j} className="flex gap-2 text-sm text-slate-700 mt-1"><span aria-hidden="true">☐</span><span>{s}</span></div>)}
          </li>
        </ol>}
        {storeNote && <div className="mt-5 text-sm font-semibold text-[#0b2545]">{storeNote}</div>}
        <div className="mt-3 text-xs text-slate-500">{t.note}</div>
        <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 print:hidden">
          <Link href={quoteHref} data-tracked="1" onClick={() => trackCtaClick(quoteHref, `container_planner_${lang}`)} className="text-center bg-[#d62839] hover:bg-[#c1121f] text-white font-semibold px-6 py-3 rounded-full transition">
            {t.quote}
          </Link>
          <a href={waHref} target="_blank" rel="noopener noreferrer" data-tracked="1" onClick={() => trackWhatsappClick(`container_planner_${lang}`)} className="text-center bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full transition">
            {t.wa}
          </a>
          <button type="button" onClick={print} className="text-center border border-slate-300 hover:bg-white text-slate-700 font-semibold px-6 py-3 rounded-full transition">
            {t.print}
          </button>
        </div>
      </div>
    </div>
  );
}
