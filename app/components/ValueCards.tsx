type ValueCard = {
  title: string;
  body: string;
};

export function ValueCards({ cards }: { cards: ValueCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <div key={card.title} className="card">
          <p className="font-semibold text-lg text-text">{card.title}</p>
          <p className="mt-2 text-subtle text-sm leading-relaxed">{card.body}</p>
        </div>
      ))}
    </div>
  );
}
