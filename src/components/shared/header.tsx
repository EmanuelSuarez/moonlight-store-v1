"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/shared/mode-toggle';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';
import CartDrawer from '@/components/cart/cart-drawer';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    { name: "Iluminación", href: "/productos/" },
    { name: "Organización", href: "/productos/" },
    { name: "Decoración", href: "/productos/" },
    // { name: "Novedades", href: "/novedades" },
    // { name: "Ofertas", href: "/ofertas" },
    // { name: "Colecciones", href: "/colecciones" },
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            MOONLIGHT
          </Link>
          
          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-8">
            <Link href="/nosotros" className="text-sm font-medium hover:text-primary">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav> */}
          
          {/* Right Icons */}
          <div className="flex items-center gap-2">
            {/* <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </Button> */}
            {/* <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button> */}
            <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="h-5 w-5" />
              {mounted && cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 min-w-[1.25rem] h-5 flex items-center justify-center">
                  {cartCount}
                </Badge>
              )}
            </Button>
            {/* <ModeToggle /> */}
          </div>
        </div>
        
        {/* Search Bar */}
        {/* {isSearchOpen && (
          <div className="py-3 border-t">
            <div className="flex items-center">
              <Search className="h-4 w-4 mr-2 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Buscar productos..." 
                className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                autoFocus
              />
              <Button variant="ghost" size="sm" className="ml-2">
                Buscar
              </Button>
            </div>
          </div>
        )} */}
        
        {/* Categories Navigation */}
        <div className="hidden md:block py-3 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {categories.map((category, index) => (
                <Link 
                  key={index} 
                  href={category.href} 
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <Link href="/productos" className="text-sm font-medium hover:text-primary transition-colors">
              Ver Todo
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/nosotros" className="text-sm font-medium hover:text-primary">
                Nosotros
              </Link>
              <Link href="/contacto" className="text-sm font-medium hover:text-primary">
                Contacto
              </Link>
              <div className="h-px bg-border my-2"></div>
              {categories.map((category, index) => (
                <Link 
                  key={index} 
                  href={category.href} 
                  className="text-sm font-medium hover:text-primary"
                >
                  {category.name}
                </Link>
              ))}
              <Link href="/productos" className="text-sm font-medium hover:text-primary">
                Ver Todo
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}