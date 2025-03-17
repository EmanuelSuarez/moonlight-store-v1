"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Share2, Star, Truck, RotateCcw, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { formatPrice } from '@/lib/utils';
import AddToCartButton from '@/components/cart/add-to-cart-button';
import { Product } from '@/lib/types';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>(product?.image || '');
  const [selectedColor, setSelectedColor] = useState<string>('');

  useEffect(() => {
    async function fetchParams() {
      try {
        const resolvedParams = await params;
        const response = await fetch(`/api/products/${resolvedParams.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setSelectedImage(data.image);
        setProduct(data);
        setSelectedColor(data.colors[0]); // Set the initial selected color
      } catch (error) {
        console.error((error as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchParams();
  }, [params]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToFavorites = () => {
    toast({
      title: "Añadido a favoritos",
      description: `${product?.name} ha sido añadido a tus favoritos.`,
      duration: 3000,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          {/* Breadcrumbs */}
          {/* <div className="text-sm text-muted-foreground mb-8">
            <span>Inicio</span> / <span>Productos</span> / <span>{product?.category}</span> / <span className="text-foreground">{product?.name}</span>
          </div> */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <Image
                  src={selectedImage || ''}
                  alt={product?.name || 'Producto'}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product?.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer border-2 ${selectedImage === image ? 'border-primary' : 'border-transparent'}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`${product?.name} - Vista ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm bg-muted px-2 py-1 rounded-full mr-2">{product?.category}</span>
                  <span className="text-sm bg-muted px-2 py-1 rounded-full">Colección {product?.collection}</span>
                </div>
                <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
                {/* <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product?.rating ?? 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product?.rating} ({product?.reviewCount} reseñas)
                  </span>
                </div> */}
                <p className="text-2xl font-bold mb-4 line-through">{formatPrice(product?.price ?? 0)}</p>
                <p className="text-2xl font-bold mb-4">{formatPrice(product?.promoPrice ?? 0)}</p>
                
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center border rounded-md">
                    <button 
                      className="px-4 py-2 border-r" 
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-2">{quantity}</span>
                    <button 
                      className="px-4 py-2 border-l" 
                      onClick={incrementQuantity}
                    >
                      +
                    </button>
                  </div>
                  <div className="ml-4 text-sm text-muted-foreground">
                    {product?.inStock ? (
                      <span className="text-green-600">En stock</span>
                    ) : (
                      <span className="text-red-600">Agotado</span>
                    )}
                  </div>
                </div>

                {/* color */}
                <div className="mb-6">
                  <label htmlFor="color" className="block text-sm font-medium text-black">
                    Color:
                  </label>
                  <select
                    id="color"
                    name="color"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-black border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    {product.colors.map((color, index) => (
                      <option key={index} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  {product && (
                    <AddToCartButton 
                      product={product} 
                      quantity={quantity}
                      className="flex-1"
                    />
                  )}
                  {/* <Button variant="outline" size="lg" onClick={handleAddToFavorites}>
                    <Heart className="mr-2 h-4 w-4" /> Favorito
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button> */}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Envío Gratuito</p>
                    <p className="text-xs text-muted-foreground">En pedidos superiores a $50.000</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <RotateCcw className="h-5 w-5 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Te devolvemos tu dinero</p>
                    <p className="text-xs text-muted-foreground">Hasta 10 días después de la compra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="features">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="features">Características</TabsTrigger>
                <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="p-6 border rounded-b-lg mt-2">
                <h3 className="text-xl font-semibold mb-4">Características Principales</h3>
                <ul className="space-y-2">
                  {product?.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="specifications" className="p-6 border rounded-b-lg mt-2">
                <h3 className="text-xl font-semibold mb-4">Especificaciones Técnicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product?.specifications ?? {}).map(([key, value], index) => (
                    <div key={index} className="flex justify-between py-2 border-b">
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}