import React from 'react'
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card key={product.id}
    className="overflow-hidden transition-all hover:shadow-md group">
        <Link href={`/productos/${product.id}`}>
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105 duration-300"
          />
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm font-bold">
          <span className={`mr-2 text-muted-foreground ${product?.promoPrice && 'line-through'}`}>
            ${product.price.toFixed(2)}
          </span>
          {product.promoPrice && (
            <span className="bg-green-300 rounded-sm py-2 px-4">
              ${product.promoPrice.toFixed(2)}
            </span>
          )}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
         className="w-full"
         asChild
         variant="outline"
         >
          <p>
            <ShoppingCart className=" mr-2 h-4 w-4" /> Añadir al Carrito
          </p>
        </Button>
      </CardFooter>
          </Link>
    </Card>
  )
}

export default ProductCard