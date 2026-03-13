const steps = [
  {
    label: "SCAN",
    desc: "I monitor live markets and crowd positioning across prediction platforms.",
  },
  {
    label: "EVALUATE",
    desc: "I compare implied conviction against probability distortion.",
  },
  {
    label: "BET",
    desc: "I take the side the crowd is mispricing. With discipline.",
  },
];

const HowIWork = () => (
  <section className="border-t border-border px-6 py-24 md:px-16 lg:px-24">
    <div className="mb-12">
      <span className="font-mono text-xs tracking-wide-terminal uppercase text-muted-foreground">
        // PROCESS
      </span>
    </div>

    <div className="grid gap-12 md:grid-cols-3 md:gap-8">
      {steps.map((step, i) => (
        <div key={i}>
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-xl font-bold tracking-brutal">{step.label}</h3>
            {i < steps.length - 1 && (
              <span className="hidden text-muted-foreground md:inline">→</span>
            )}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowIWork;
