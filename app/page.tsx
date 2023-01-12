import Hero from "../components/Hero";
import ProductsSection from "../components/ProductsSection";
import ProductsProvider from "../contexts/productsContext";
import Walkthroug from "../components/Walkthroug";
import WithWavePatternBG from "../components/WithWavePatternBG";

export default async function Home() {
  return (
    <main className="mt-[128px] overflow-x-hidden">
      <WithWavePatternBG>
        <Hero />
        <Walkthroug />
      </WithWavePatternBG>
      <ProductsProvider>
        <ProductsSection />
      </ProductsProvider>
    </main>
  );
}
