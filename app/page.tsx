import WithWavePatternBG from "../components/WithWavePatternBG";
import Hero from "../components/Hero";
import Walktrough from "../components/Walktrough";

export default async function Home() {
  return (
    <main className="mt-[128px] overflow-x-hidden">
      <WithWavePatternBG>
        <Hero />
        <Walktrough />
      </WithWavePatternBG>
    </main>
  );
}
