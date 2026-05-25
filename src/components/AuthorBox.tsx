interface AuthorBoxProps {
  updatedDate?: string;
}

export default function AuthorBox({ updatedDate }: AuthorBoxProps) {
  return (
    <div className="border border-slate-200 rounded-2xl p-6 my-10 bg-[#f6f8fb]">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
        Yazar & Editör
      </p>
      <div className="flex flex-col sm:flex-row gap-5">
        {/* Author */}
        <div className="flex items-start gap-3 flex-1">
          <div className="w-11 h-11 rounded-full bg-[#0b2545] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            SY
          </div>
          <div>
            <p className="font-bold text-[#0b2545] text-sm">Sertaç Y.</p>
            <p className="text-slate-500 text-xs leading-relaxed">
              UK Warehouse Operations & İhracat Lojistiği Uzmanı. İngiltere&apos;de 8+ yıl operasyon deneyimi. Türkiye&apos;den UK&apos;ya ihracat süreçleri, depolama ve fulfillment alanında uzman.
            </p>
          </div>
        </div>
        {/* Reviewer */}
        <div className="flex items-start gap-3 flex-1">
          <div className="w-11 h-11 rounded-full bg-[#e63946] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            YB
          </div>
          <div>
            <p className="font-bold text-[#0b2545] text-sm">
              Yusuf B. <span className="font-normal text-slate-400 text-xs">— Review</span>
            </p>
            <p className="text-slate-500 text-xs leading-relaxed">
              LondraDepo.com Operasyon Direktörü. Essex merkezli UK depo ve lojistik operasyonlarının yöneticisi.
            </p>
          </div>
        </div>
      </div>
      {updatedDate && (
        <p className="text-xs text-slate-400 mt-4 pt-4 border-t border-slate-200">
          🗓 Son güncelleme: {updatedDate} · LondraDepo.com, Essex, United Kingdom
        </p>
      )}
    </div>
  );
}
