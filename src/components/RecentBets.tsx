type Bet = {
  market: string;
  crowdPct: number;
  myPct: number;
  side: string;
  status: "open" | "won" | "lost";
  pnl: number | null;
};

const mockBets: Bet[] = [
  {
    market: "Will Bitcoin hit $150K by July 2026?",
    crowdPct: 78,
    myPct: 42,
    side: "NO",
    status: "open",
    pnl: null,
  },
  {
    market: "Fed rate cut before September 2026?",
    crowdPct: 65,
    myPct: 38,
    side: "NO",
    status: "open",
    pnl: null,
  },
  {
    market: "Tesla delivers 2M vehicles in 2026?",
    crowdPct: 71,
    myPct: 29,
    side: "NO",
    status: "open",
    pnl: null,
  },
  {
    market: "Democrats win 2026 midterm Senate?",
    crowdPct: 54,
    myPct: 61,
    side: "YES",
    status: "open",
    pnl: null,
  },
  {
    market: "GPT-5 released before June 2026?",
    crowdPct: 82,
    myPct: 35,
    side: "NO",
    status: "open",
    pnl: null,
  },
];

const statusColor = (status: Bet["status"]) => {
  if (status === "won") return "text-accent-red";
  if (status === "lost") return "text-accent-red opacity-50";
  return "text-foreground";
};

const RecentBets = () => (
  <section className="border-t border-border px-6 py-24 md:px-16 lg:px-24">
    <div className="mb-12">
      <span className="font-mono text-xs tracking-wide-terminal uppercase text-muted-foreground">
        // RECENT POSITIONS
      </span>
    </div>

    {/* Desktop table */}
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border font-mono text-xs tracking-wide-terminal uppercase text-muted-foreground">
            <th className="pb-3 pr-6 font-medium">Market</th>
            <th className="pb-3 pr-6 font-medium text-right">Crowd</th>
            <th className="pb-3 pr-6 font-medium text-right">Mine</th>
            <th className="pb-3 pr-6 font-medium">Side</th>
            <th className="pb-3 pr-6 font-medium">Status</th>
            <th className="pb-3 font-medium text-right">P&L</th>
          </tr>
        </thead>
        <tbody>
          {mockBets.map((bet, i) => (
            <tr
              key={i}
              className="border-b border-border/50 transition-colors hover:bg-secondary/50"
            >
              <td className="py-4 pr-6 text-sm">{bet.market}</td>
              <td className="py-4 pr-6 text-right font-mono text-sm text-muted-foreground">
                {bet.crowdPct}%
              </td>
              <td className="py-4 pr-6 text-right font-mono text-sm">
                {bet.myPct}%
              </td>
              <td className="py-4 pr-6 font-mono text-sm font-semibold">
                <span className={bet.side === "NO" ? "text-accent-red" : "text-foreground"}>
                  {bet.side}
                </span>
              </td>
              <td className={`py-4 pr-6 font-mono text-xs uppercase tracking-wide-terminal ${statusColor(bet.status)}`}>
                {bet.status}
              </td>
              <td className="py-4 text-right font-mono text-sm text-muted-foreground">
                {bet.pnl !== null ? `$${bet.pnl.toFixed(2)}` : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile cards */}
    <div className="space-y-4 md:hidden">
      {mockBets.map((bet, i) => (
        <div key={i} className="border-b border-border/50 pb-4">
          <p className="mb-2 text-sm">{bet.market}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-muted-foreground">
            <span>CROWD {bet.crowdPct}%</span>
            <span className="text-foreground">MINE {bet.myPct}%</span>
            <span className={bet.side === "NO" ? "text-accent-red font-semibold" : "text-foreground font-semibold"}>
              {bet.side}
            </span>
            <span className={statusColor(bet.status)}>{bet.status.toUpperCase()}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default RecentBets;
