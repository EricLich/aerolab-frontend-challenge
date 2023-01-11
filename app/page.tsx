import Hero from "../components/Hero";
import Walkthroug from "../components/Walkthroug";
import WithWavePatternBG from "../components/WithWavePatternBG";

export default async function Home() {
  return (
    <main className="mt-[128px] overflow-x-hidden">
      <WithWavePatternBG>
        <Hero />
        <Walkthroug />
      </WithWavePatternBG>
    </main>
  );
}
