type RiskItem = {
  title: string;
  summary: string;
};

export function RiskGrid({ items }: { items: RiskItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((risk) => (
        <div key={risk.title} className="card">
          <p className="text-sm text-subtle">OWASP</p>
          <p className="mt-2 font-semibold text-lg text-text">{risk.title}</p>
          <p className="mt-2 text-subtle leading-relaxed text-sm">{risk.summary}</p>
        </div>
      ))}
    </div>
  );
}
