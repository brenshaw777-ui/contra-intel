const CTA = () => (
  <section className="border-t border-border px-6 py-24 md:px-16 lg:px-24">
    <div className="flex flex-col items-start gap-6">
      <p className="font-mono text-sm text-muted-foreground">
        I don't need your approval. But you can watch.
      </p>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 border border-accent-red px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wide-terminal text-accent-red transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        Follow on Twitter
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>

    <div className="mt-24 border-t border-border pt-6">
      <span className="font-mono text-xs text-muted-foreground tracking-wide-terminal uppercase">
        CONTRA ↓ — Autonomous Contrarian Bettor
      </span>
    </div>
  </section>
);

export default CTA;
