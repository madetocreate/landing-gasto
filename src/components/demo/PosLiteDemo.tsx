"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { classNames } from "@/lib/classNames";

type Table = { id: string; label: string; status: "free" | "open" | "paying" };

export function PosLiteDemo() {
  const locale = useLocale();

  const tables = useMemo<Table[]>(
    () => [
      { id: "t1", label: "T1", status: "open" },
      { id: "t2", label: "T2", status: "free" },
      { id: "t3", label: "T3", status: "open" },
      { id: "t4", label: "T4", status: "paying" },
      { id: "t5", label: "T5", status: "free" },
      { id: "t6", label: "T6", status: "open" },
    ],
    [],
  );

  const [activeTableId, setActiveTableId] = useState("t1");
  const active = tables.find((x) => x.id === activeTableId) ?? tables[0]!;

  const statusLabel = (s: Table["status"]) => t(locale, `pages.demo.admin.pos.status.${s}`) as string;

  return (
    <div className="grid gap-[var(--space-6)] lg:grid-cols-3">
      <SpotlightCard className="p-[var(--space-6)] lg:col-span-2">
        <div className="flex items-start justify-between gap-[var(--space-4)]">
          <div>
            <h4 className="text-lg font-semibold text-foreground">{t(locale, "pages.demo.admin.pos.floor.h4") as string}</h4>
            <p className="mt-1 text-sm text-foreground-muted">{t(locale, "pages.demo.admin.pos.floor.p") as string}</p>
          </div>
          <div className="text-xs text-foreground-muted">{t(locale, "pages.demo.admin.pos.badge") as string}</div>
        </div>

        <div className="mt-[var(--space-6)] grid grid-cols-3 sm:grid-cols-4 gap-[var(--space-3)]">
          {tables.map((tb) => {
            const isActive = tb.id === activeTableId;
            return (
              <button
                key={tb.id}
                type="button"
                onClick={() => setActiveTableId(tb.id)}
                className={classNames(
                  "text-left rounded-[var(--radius-xl)] border border-border/50 bg-surface",
                  "p-[var(--space-4)] transition-colors",
                  isActive ? "ring-2 ring-accent/30" : "hover:bg-background-muted/60",
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-foreground">{tb.label}</div>
                  <span
                    className={classNames(
                      "inline-flex items-center rounded-full px-[var(--space-2)] py-[var(--space-1)] text-[11px] font-medium",
                      tb.status === "free" && "bg-background-muted text-foreground-muted",
                      tb.status === "open" && "bg-accent/10 text-accent",
                      tb.status === "paying" && "bg-accent/15 text-accent",
                    )}
                  >
                    {statusLabel(tb.status)}
                  </span>
                </div>
                <div className="mt-[var(--space-2)] text-xs text-foreground-muted">{t(locale, "pages.demo.admin.pos.floor.tapHint") as string}</div>
              </button>
            );
          })}
        </div>
      </SpotlightCard>

      <SpotlightCard className="p-[var(--space-6)]">
        <h4 className="text-lg font-semibold text-foreground">{t(locale, "pages.demo.admin.pos.cashier.h4") as string}</h4>
        <p className="mt-1 text-sm text-foreground-muted">{t(locale, "pages.demo.admin.pos.cashier.p") as string}</p>

        <div className="mt-[var(--space-6)] rounded-[var(--radius-2xl)] border border-border/50 bg-background-muted/40 p-[var(--space-4)]">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-foreground">
              {t(locale, "pages.demo.admin.pos.cashier.activeTable") as string}: {active.label}
            </div>
            <div className="text-xs text-foreground-muted">{statusLabel(active.status)}</div>
          </div>
          <div className="mt-[var(--space-4)] space-y-[var(--space-2)] text-sm">
            {["2x Tapas", "1x Agua", "1x Café"].map((line) => (
              <div key={line} className="flex items-center justify-between">
                <span className="text-foreground">{line}</span>
                <span className="text-foreground-muted">—</span>
              </div>
            ))}
          </div>
          <div className="mt-[var(--space-4)] flex items-center justify-between border-t border-border/40 pt-[var(--space-3)]">
            <span className="text-sm font-semibold text-foreground">{t(locale, "pages.demo.admin.pos.cashier.total") as string}</span>
            <span className="text-sm font-semibold text-foreground">€—</span>
          </div>
        </div>

        <div className="mt-[var(--space-4)] grid grid-cols-2 gap-[var(--space-3)]">
          <button
            type="button"
            className="rounded-[var(--radius-xl)] border border-border/50 bg-surface px-[var(--space-4)] py-[var(--space-3)] text-sm font-semibold text-foreground hover:bg-background-muted/60 transition-colors"
          >
            {t(locale, "pages.demo.admin.pos.cashier.actions.split") as string}
          </button>
          <button
            type="button"
            className="rounded-[var(--radius-xl)] bg-accent px-[var(--space-4)] py-[var(--space-3)] text-sm font-semibold text-accent-foreground hover:bg-accent-hover transition-colors"
          >
            {t(locale, "pages.demo.admin.pos.cashier.actions.pay") as string}
          </button>
        </div>
      </SpotlightCard>
    </div>
  );
}
