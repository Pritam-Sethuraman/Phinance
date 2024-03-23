import BentoGrid from "@/components/bento-grid";
import Hero from "@/components/hero";

export default function Dashboard() {
  return (
    <main className="flex flex-col min-h-screen px-24">
      <Hero />

      <BentoGrid />
    </main>
  );
}
