import { useEffect, useMemo, useRef, useState } from "react";

export type QAItem = {
  q: string;
  a: string;
};

type QAAccordionProps = {
  items: QAItem[];
};

const Chevron = ({ open }: { open: boolean }) => {
  return (
    <svg
      className={[
        "h-5 w-5 shrink-0 transition-transform duration-200",
        open ? "rotate-180" : "rotate-0"
      ].join(" ")}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

function AnimatedPanel({
  isOpen,
  children
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [maxH, setMaxH] = useState<number>(0);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    if (isOpen) {
      // measure content height
      setMaxH(el.scrollHeight);
    } else {
      setMaxH(0);
    }
  }, [isOpen, children]);

  return (
    <div
      className={[
        "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
        isOpen ? "opacity-100" : "opacity-0"
      ].join(" ")}
      style={{ maxHeight: `${maxH}px` }}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  );
}

export default function QAAccordion({ items }: QAAccordionProps) {
  const allKeys = useMemo(() => items.map((_, i) => String(i)), [items]);
  const [openSet, setOpenSet] = useState<Set<string>>(() => new Set());

  // Reset open state when items change (ex: tab switch Basic -> Advanced)
  useEffect(() => {
    setOpenSet(new Set());
  }, [items]);

  const openAll = () => setOpenSet(new Set(allKeys));
  const closeAll = () => setOpenSet(new Set());

  const toggleOne = (key: string) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const allOpen = openSet.size === allKeys.length && allKeys.length > 0;

  return (
    <div className="rounded-2xl border border-border bg-surface">
      {/* Top actions */}
      <div className="flex flex-wrap items-center justify-end gap-3 border-b border-border px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={openAll}
          disabled={items.length === 0 || allOpen}
          className="rounded-xl border border-border bg-bg px-4 py-2 text-sm font-medium text-text transition hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
        >
          Show all answers
        </button>

        <button
          type="button"
          onClick={closeAll}
          disabled={items.length === 0 || openSet.size === 0}
          className="rounded-xl border border-border bg-bg px-4 py-2 text-sm font-medium text-text transition hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
        >
          Hide all
        </button>
      </div>

      {/* List */}
      <div className="divide-y divide-border">
        {items.length === 0 ? (
          <div className="px-4 py-6 text-sm text-muted sm:px-6">
            No questions added yet for this level.
          </div>
        ) : (
          items.map((item, index) => {
            const key = String(index);
            const isOpen = openSet.has(key);
            const btnId = `qa-btn-${key}`;
            const panelId = `qa-panel-${key}`;

            return (
              <div key={key} className="bg-surface">
                <button
                  id={btnId}
                  type="button"
                  onClick={() => toggleOne(key)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:px-6"
                >
                  <span className="text-base font-bold text-black">
                    {index + 1}. {item.q}
                  </span>

                  <span className="text-muted">
                    <Chevron open={isOpen} />
                  </span>
                </button>

                <div id={panelId} role="region" aria-labelledby={btnId}>
                  <AnimatedPanel isOpen={isOpen}>
                    <div className="px-4 pb-5 sm:px-6">
                      <div className="rounded-xl bg-bg p-4">
                        <p className="font-semi-bold text-[#062a64] ">{item.a}</p>
                      </div>
                    </div>
                  </AnimatedPanel>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
