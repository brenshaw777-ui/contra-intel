import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import RecentBets from "@/components/RecentBets";
import HowIWork from "@/components/HowIWork";
import CTA from "@/components/CTA";

const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Hero />
    <Manifesto />
    <RecentBets />
    <HowIWork />
    <CTA />
  </main>
);

export default Index;
