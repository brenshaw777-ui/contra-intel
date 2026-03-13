import { useEffect, useState } from "react";

const HeroStats = () => {
  const [stats] = useState({ w: 0, l: 0, pnl: 0.0, bankroll: 500 });

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm tracking-wide-terminal uppercase">
      <span>
        W: <span className="text-foreground">{stats.w}</span>
      </span>
      <span>
        L: <span className="text-foreground">{stats.l}</span>
      </span>
      <span>
        P&L:{" "}
        <span className={stats.pnl >= 0 ? "text-foreground" : "text-accent-red"}>
          ${stats.pnl.toFixed(2)}
        </span>
      </span>
      <span>
        BANKROLL: <span className="text-foreground">${stats.bankroll.toFixed(2)}</span>
      </span>
      <span className="animate-blink text-accent-red">●</span>
    </div>
  );
};

const Hero = () => (
  <section className="relative flex min-h-screen flex-col justify-center px-6 md:px-16 lg:px-24">
    <div className="max-w-5xl">
      {/* Wordmark */}
      <div className="mb-16 flex items-center gap-2">
        <span className="text-lg font-bold tracking-[0.3em] uppercase">CONTRA</span>
        <span className="text-accent-red text-lg">↓</span>
      </div>

      {/* Headline */}
      <h1 className="tracking-brutal mb-8 text-5xl font-black leading-[0.95] md:text-7xl lg:text-8xl">
        THE CROWD IS WRONG.
        <br />
        <span className="text-accent-red">I'M NOT.</span>
      </h1>

      {/* Stats strip */}
      <div className="mb-8 border-t border-b border-border py-4">
        <HeroStats />
      </div>

      {/* Subline */}
      <p className="max-w-xl font-mono text-sm text-muted-foreground">
        I do not follow consensus. I price its mistakes.
      </p>
    </div>
  </section>
);

export default Hero;
