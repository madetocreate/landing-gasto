"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { classNames } from "@/lib/classNames";

type Ticket = {
  id: string;
  table: string;
  summary: string;
  status: "open" | "in_progress" | "done";
};

export function WaiterDemo() {
  const locale = useLocale();
  const [active, setActive] = useState<string>("w1");

  const tickets = useMemo<Ticket[]>(
    () => [
      { id: "w1", table: "T3", summary: "2x Tapas · 1x Agua", status: "open" },
      { id: "w2", table: "T1", summary: "Rechnung bitte", status: "in_progress" },
      { id: "w3", table: "T6", summary: "Allergene Frage", status: "open" },
      { id: "w4", table: "T4", summary: "Zahlung läuft", status: "done" },
    ],
    [],
  );

  const statusLabel = (s: Ticket["status"]) => t(locale, `pages.demo.admin.waiter.status.${s}`) as string;

  const statusBadge = (s: Ticket["status"]) =>
    classNames(
      "inline-flex items-center rounded-full px-[var(--space-2)] py-[var(--space-1)] text-[11px] font-medium",
      s === "open" && "bg-accent/10 text-accent",
      s === "in_progress" && "bg-background-muted text-foreground",
      s === "done" && "bg-background-muted/70 text-foreground-muted",
    );

  return (
    <div className="grid gap-[var(--space-6)] lg:grid-cols-3">
      <SpotlightCard className="p-[var(--space-6)] lg:col-span-2">
        <div className="flex items-start justify-between gap-[var(--space-4)]">
          <div>
            <h4 className="text-lg font-semibold text-foreground">{t(locale, "pages.demo.admin.waiter.h4")}</h4>
            <p className="mt-1 text-sm text-foreground-muted">{t(locale, "pages.demo.admin.waiter.p")}</p>
          </div>
          <div className="text-xs text-foreground-muted">{t(locale, "pages.demo.admin.waiter.badge")}</div>
        </div>

        <div className="mt-[var(--space-6)] grid gap-[var(--space-3)]">
          {tickets.map((tk) => {
            const isActive = tk.id === active;
            return (
              <button
                key={tk.id}
                type="button"
                onClick={() => setActive(tk.id)}
                className={classNames(
                  "w-full text-left rounded-[var(--radius-2xl)] border border-border/50 bg-surface",
                  "px-[var(--space-5)] py-[var(--space-4)] transition-colors",
                  isActive ? "ring-2 ring-accent/30" : "hover:bg-background-muted/60",
                )}
              >
                <div className="flex items-center justify-between gap-[var(--space-4)]">
                  <div className="min-w-0">
                    <div className="flex items-center gap-[var(--space-3)]">
                      <div className="text-sm font-semibold text-foreground">
                        {t(locale, "pages.demo.admin.waiter.tableLabel")} {tk.table}
                      </div>
                      <span className={statusBadge(tk.status)}>{statusLabel(tk.status)}</span>
                    </div>
                    <div className="mt-[var(--space-2)] text-sm text-foreground-muted truncate">{tk.summary}</div>
                  </div>
                  <div className="text-xs text-foreground-muted">{t(locale, "pages.demo.admin.waiter.tapHint")}</div>
                </div>
              </button>
            );
          })}
        </div>
      </SpotlightCard>

      <SpotlightCard className="p-[var(--space-6)]">
        <h4 className="text-lg font-semibold text-foreground">{t(locale, "pages.demo.admin.waiter.actions.h4")}</h4>
        <p className="mt-1 text-sm text-foreground-muted">{t(locale, "pages.demo.admin.waiter.actions.p")}</p>

        <div className="mt-[var(--space-6)] grid gap-[var(--space-3)]">
          {(["newOrder", "callWaiter", "requestBill", "takePayment"] as const).map((key) => (
            <button
              key={key}
              type="button"
              className={classNames(
                "rounded-[var(--radius-xl)] border border-border/50 bg-surface",
                "px-[var(--space-4)] py-[var(--space-3)] text-sm font-semibold text-foreground",
                "hover:bg-background-muted/60 transition-colors",
              )}
            >
              {t(locale, `pages.demo.admin.waiter.actions.buttons.${key}`)}
            </button>
          ))}
        </div>

        <div className="mt-[var(--space-5)] rounded-[var(--radius-2xl)] border border-border/40 bg-background-muted/40 p-[var(--space-4)]">
          <div className="text-xs font-semibold text-foreground-muted uppercase tracking-wider">
            {t(locale, "pages.demo.admin.waiter.comingSoon.title")}
          </div>
          <div className="mt-[var(--space-2)] text-sm text-foreground-muted">
            {t(locale, "pages.demo.admin.waiter.comingSoon.p")}
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
