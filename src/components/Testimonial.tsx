import { Star } from "lucide-react";


const Testimonial = () => {
  return (
    <section id="testimonial" className="py-16 md:py-20 bg-gradient-to-b from-card via-surface-elevated to-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-heading heading-display font-bold">
            Real results, real words
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative shadow-xl rounded-3xl border border-border bg-white/90 dark:bg-surface-elevated/90 p-8 md:p-14">
            {/* Quote marks */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl text-primary/10 font-serif leading-none select-none pointer-events-none">
              “
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary drop-shadow-sm" />
              ))}
            </div>

            <blockquote>
              <p className="text-xl md:text-2xl leading-relaxed text-heading text-center mb-4 heading-display italic">
                "Jalwan conducted a detailed security assessment of our platform and identified several important issues we needed to address. The report was clear, well documented and included practical recommendations. We appreciated the responsible approach and the time taken to test our application properly. Would definitely recommend working with Jalwan in the future."
              </p>

              <footer className="flex flex-col items-center mt-2">
                <a href="https://postiner.com/" target="_blank" rel="noopener noreferrer" className="mb-3 block group">
                  <img
                    src="/logos/postiner.svg"
                    alt="Postiner logo"
                    className="w-16 h-16 rounded-full object-contain bg-white p-1 border border-border group-hover:scale-105 transition-transform duration-200"
                    onError={(e) => { e.currentTarget.src = 'https://postiner.com/favicon.ico'; }}
                  />
                </a>
                <cite className="not-italic text-center">
                  <span className="block font-semibold text-heading text-lg">Hristijan</span>
                  <a href="https://postiner.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline">Postiner Team</a>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
