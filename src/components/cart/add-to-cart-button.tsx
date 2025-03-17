"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  className?: string;
  showIcon?: boolean;
}

export default function AddToCartButton({ 
  product, 
  quantity = 1, 
  className = '',
  showIcon = true
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      addToCart(product, quantity);
      
      toast({
        title: "Producto añadido",
        description: `${product.name} ha sido añadido a tu carrito.`,
        duration: 3000,
      });
      
      setIsAdding(false);
    }, 300);
  };

  return (
    <Button 
      className={className} 
      onClick={handleAddToCart}
      disabled={isAdding}
      variant="outline"
    >
      {showIcon && <ShoppingCart className="mr-2 h-4 w-4" />}
      {isAdding ? 'Añadiendo...' : 'Añadir al Carrito'}
    </Button>
  );
}