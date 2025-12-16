import { ReactNode } from "react";
import clsx from "clsx";

export function Section({
  id,
  title,
  eyebrow,
  children,
  className
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx("section-shell", className)}>
      <div className="space-y-6 max-w-3xl">
        {eyebrow && <p className="badge w-fit" aria-label={eyebrow}>{eyebrow}</p>}
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}
