import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full bg-background mt-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center py-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Transforma Tu Espacio de Trabajo
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Descubre productos de diseño que combinan estética y funcionalidad para crear un ambiente de trabajo inspirador y productivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/productos">
                  Comprar Ahora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative aspect-square md:aspect-auto rounded-xl overflow-hidden bg-muted/20">
            <Image
              src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Espacio de trabajo moderno y minimalista"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Featured Products Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-8">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Lámpara de escritorio"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
              alt="Organizador de escritorio"
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-2 md:col-span-1 relative aspect-[4/3] rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white p-4">
              <h3 className="text-xl font-semibold mb-2 text-center">Colecciones completas</h3>
              <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
                Explorar más
              </Button>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Colección completa"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}