export function AttendanceMiniVisual() {
  return (
    <div className="mt-4 space-y-3">
      <div className="flex items-center gap-3">
        <div className="grid grid-cols-4 gap-0.5 rounded-[4px] bg-white p-2 hairline border-neutral-200">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-[1px] ${
                [0, 1, 3, 4, 6, 9, 10, 12, 15].includes(i)
                  ? "bg-neutral-800"
                  : "bg-neutral-200"
              }`}
            />
          ))}
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-neutral-700">
            Sunday First Service
          </p>
          <p className="text-[11px] text-neutral-400">
            graceassembly.churchos.app/attend/sunday-lekki
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Checked in", value: "247" },
          { label: "First timers", value: "18" },
          { label: "Avg. wait", value: "12s" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-[6px] bg-white px-2.5 py-2 hairline border-neutral-200"
          >
            <p className="text-[10px] text-neutral-400">{stat.label}</p>
            <p className="text-sm font-semibold tabular-nums text-neutral-900">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
