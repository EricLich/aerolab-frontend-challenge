import WithWavePatternBG from "../components/WithWavePatternBG";
import Hero from "../components/Hero";
import Walkthroug from "../components/Walkthroug";

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
