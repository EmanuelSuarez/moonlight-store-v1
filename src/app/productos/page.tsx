'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Filter } from 'lucide-react';
import { useProducts } from '@/context/ProductsContext';
import ProductCard from '@/components/shared/product-card';

export default function ProductsPage() {
  const { products } = useProducts();

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 mx-auto">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Nuestros Productos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explora nuestra colección de productos diseñados para transformar tu espacio de trabajo en un ambiente funcional y estéticamente agradable.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Products Grid */}
            <div className="w-full mx-auto">

              <div className="flex justify-between items-center mb-8">
                <p className="text-muted-foreground">Mostrando {products.length} productos</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}