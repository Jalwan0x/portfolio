type TimelineItem = {
  title: string;
  duration: string;
  detail: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => (
        <li key={item.title} className="card relative">
          <div className="absolute left-0 top-0 h-1 w-16 bg-accent" aria-hidden />
          <p className="text-sm text-subtle">{item.duration}</p>
          <p className="mt-2 font-semibold text-lg text-text">{idx + 1}. {item.title}</p>
          <p className="mt-2 text-subtle text-sm leading-relaxed">{item.detail}</p>
        </li>
      ))}
    </ol>
  );
}
