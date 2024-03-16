import BentoGrid from "@/components/bento-grid";
import Hero from "@/components/hero";

export default function Dashboard() {
  return (
    <main className="flex flex-col min-h-screen pt-36 px-24">
      <Hero />
      <div className="flex justify-center">
        <BentoGrid />
      </div>
    </main>
  );
}
