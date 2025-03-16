import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Promotion() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Diseño y Funcionalidad para tu Espacio
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nuestros productos combinan estética minimalista con funcionalidad optimizada para crear espacios de trabajo que inspiran productividad y bienestar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/colecciones/nueva-coleccion">
                  Explorar Colección
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/nosotros">
                  Nuestra Historia
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-video md:aspect-square overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Espacio de trabajo moderno con productos Moonlight"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}