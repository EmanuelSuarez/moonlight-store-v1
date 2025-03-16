'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useProducts } from '@/context/ProductsContext';
import ProductCard from '@/components/shared/product-card';


export default function Products() {
  const { products } = useProducts();

  return (
    <section className="w-full py-12 md:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-between items-center mb-10 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Productos Destacados</h2>
            <p className="text-muted-foreground">
              Nuestra selección de productos más populares
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/productos">
              Ver Todos
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}