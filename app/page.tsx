import WithWavePatternBG from "../components/WithWavePatternBG";
import Hero from "../components/Hero";

export default async function Home() {
  return (
    <main className="mt-[128px]">
      <WithWavePatternBG>
        <Hero />
      </WithWavePatternBG>
    </main>
  );
}
