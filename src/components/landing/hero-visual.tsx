export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
      {/* Main dashboard frame */}
      <div className="rounded-[12px] bg-white p-1 hairline border-neutral-200">
        <div className="rounded-[10px] bg-neutral-50 p-4">
          {/* Top bar mock */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-neutral-300" />
              <div className="h-2 w-2 rounded-full bg-neutral-300" />
              <div className="h-2 w-2 rounded-full bg-neutral-300" />
            </div>
            <div className="h-2 w-24 rounded bg-neutral-200" />
          </div>

          <div className="flex gap-3">
            {/* Sidebar hint */}
            <div className="hidden w-12 shrink-0 space-y-2 sm:block">
              <div className="h-6 rounded-[4px] bg-gold-50" />
              <div className="h-4 rounded-[4px] bg-neutral-200/60" />
              <div className="h-4 rounded-[4px] bg-neutral-200/60" />
              <div className="h-4 rounded-[4px] bg-neutral-200/60" />
              <div className="h-4 rounded-[4px] bg-neutral-200/60" />
            </div>

            {/* Main content */}
            <div className="min-w-0 flex-1 space-y-3">
              {/* Metric row */}
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-[6px] border-l-[3px] border-l-gold-400 bg-white p-2.5 hairline border-neutral-200">
                  <p className="text-[9px] text-neutral-400">Attendance</p>
                  <p className="mt-0.5 text-sm font-semibold tabular-nums text-neutral-900">
                    1,847
                  </p>
                </div>
                <div className="rounded-[6px] border-l-[3px] border-l-teal-400 bg-white p-2.5 hairline border-neutral-200">
                  <p className="text-[9px] text-neutral-400">First timers</p>
                  <p className="mt-0.5 text-sm font-semibold tabular-nums text-neutral-900">
                    34
                  </p>
                </div>
                <div className="rounded-[6px] border-l-[3px] border-l-neutral-300 bg-white p-2.5 hairline border-neutral-200">
                  <p className="text-[9px] text-neutral-400">Branches</p>
                  <p className="mt-0.5 text-sm font-semibold tabular-nums text-neutral-900">
                    12
                  </p>
                </div>
              </div>

              {/* Chart mock */}
              <div className="rounded-[6px] bg-white p-3 hairline border-neutral-200">
                <p className="text-[10px] font-medium text-neutral-700">
                  Sunday attendance — last 6 weeks
                </p>
                <div className="mt-3 flex items-end gap-1.5 h-16">
                  {[62, 71, 68, 74, 70, 89].map((h, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center gap-1">
                      <div
                        className={`w-full rounded-t-[2px] ${
                          i === 5 ? "bg-gold-400" : "bg-neutral-200"
                        }`}
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Table rows */}
              <div className="rounded-[6px] bg-white p-2 hairline border-neutral-200">
                {[
                  { branch: "Lekki", count: 420 },
                  { branch: "Ikeja", count: 318 },
                  { branch: "Abuja", count: 276 },
                ].map((row) => (
                  <div
                    key={row.branch}
                    className="flex items-center justify-between px-2 py-1.5 hairline-b border-neutral-100 last:border-0"
                  >
                    <span className="text-[10px] text-neutral-600">
                      {row.branch}
                    </span>
                    <span className="text-[10px] font-medium tabular-nums text-neutral-900">
                      {row.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating check-in card */}
      <div className="absolute -bottom-4 -left-4 w-[168px] rotate-[-3deg] rounded-[8px] bg-white p-3 hairline border-neutral-200 sm:-left-8">
        <p className="text-[10px] font-medium text-teal-700">Live check-ins</p>
        <p className="mt-1 text-xl font-semibold tabular-nums text-neutral-900">
          247
        </p>
        <p className="mt-0.5 text-[9px] text-neutral-400">
          First Service · Lekki branch
        </p>
        <div className="mt-2 flex items-center gap-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-400" />
          <span className="text-[9px] text-neutral-500">Updating live</span>
        </div>
      </div>

      {/* Floating QR hint */}
      <div className="absolute -right-2 top-8 w-[120px] rotate-[2deg] rounded-[8px] bg-gold-50 p-2.5 hairline border-gold-400/20 sm:-right-6">
        <div className="grid grid-cols-5 gap-0.5">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-[1px] ${
                [0, 1, 2, 4, 5, 6, 10, 12, 14, 18, 20, 22, 24].includes(i)
                  ? "bg-gold-500"
                  : "bg-gold-400/30"
              }`}
            />
          ))}
        </div>
        <p className="mt-1.5 text-center text-[8px] font-medium text-gold-700">
          Scan to check in
        </p>
      </div>
    </div>
  );
}
