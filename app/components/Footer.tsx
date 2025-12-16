export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-subtle text-sm">
        <div>
          <p className="text-text font-semibold">Jalwan. Independent Web Security Researcher</p>
          <p className="mt-1">Manual web-application penetration testing</p>
        </div>
        <div className="flex gap-4">
          <a href="mailto:hi@jalwan.app">hi@jalwan.app</a>
        </div>
      </div>
    </footer>
  );
}
