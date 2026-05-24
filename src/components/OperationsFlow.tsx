interface Step {
  step: number;
  title: string;
  desc: string;
  icon: string;
}

interface OperationsFlowProps {
  steps: Step[];
}

export default function OperationsFlow({ steps }: OperationsFlowProps) {
  return (
    <div className="relative">
      {/* Vertical connector line */}
      <div className="absolute left-5 top-10 bottom-10 w-px bg-slate-200 hidden md:block" />
      <div className="space-y-6">
        {steps.map((s) => (
          <div key={s.step} className="flex gap-5 items-start relative">
            {/* Circle */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0b2545] text-white flex items-center justify-center font-bold text-sm z-10">
              {s.step}
            </div>
            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl" aria-hidden="true">{s.icon}</span>
                <h3 className="font-bold text-[#0b2545]">{s.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
