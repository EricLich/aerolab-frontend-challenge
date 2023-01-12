import Hero from "../components/Hero";
import Products from "../components/Products";
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
        <Products />
      </ProductsProvider>
      <div className="h-[1000px]"></div>
    </main>
  );
}
