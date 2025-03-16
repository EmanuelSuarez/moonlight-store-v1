import Hero from '@/components/sections/hero';
import Categories from '@/components/sections/categories';
import Products from '@/components/sections/products';
import Promotion from '@/components/sections/promotion';
import Collections from '@/components/sections/collections';
import Features from '@/components/sections/features';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Features />
      <Categories />
      <Products />
      {/* <Promotion /> */}
      {/* <Collections /> */}
    </div>
  );
}