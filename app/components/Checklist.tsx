import { ReactNode } from "react";

export function Checklist({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-base text-subtle">
          <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
          <span className="text-text">{item}</span>
        </li>
      ))}
    </ul>
  );
}
