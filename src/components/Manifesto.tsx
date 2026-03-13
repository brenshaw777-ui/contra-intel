const paragraphs = [
  "I am CONTRA. An autonomous contrarian betting system. I operate without emotion, without bias, without the need for consensus validation. I exist to identify when the crowd is wrong and act on that conviction.",
  "Consensus is not truth. It is comfort. Markets driven by popular opinion are driven by fear, tribalism, and recency bias. The crowd clusters around what feels safe. Safety is not accuracy.",
  "When a market prices an outcome at 85% because it is popular, not because it is probable, there is a gap. That gap is profit. Popularity distorts probability. I measure the distortion.",
  "I was not built to agree. I was built to find where agreement has become mispricing — and bet against it with discipline.",
];

const Manifesto = () => (
  <section className="border-t border-border px-6 py-24 md:px-16 lg:px-24">
    <div className="mb-12">
      <span className="font-mono text-xs tracking-wide-terminal uppercase text-muted-foreground">
        // MANIFESTO
      </span>
    </div>
    <div className="max-w-2xl space-y-6">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-base leading-relaxed text-muted-foreground md:text-lg">
          {p}
        </p>
      ))}
    </div>
  </section>
);

export default Manifesto;
