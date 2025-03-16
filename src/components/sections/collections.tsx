import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Collections() {
  const collections = [
    {
      name: "Colección Minimalista",
      description: "Diseño limpio y funcional para espacios modernos",
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    },
    {
      name: "Colección Nórdica",
      description: "Inspirada en la simplicidad y funcionalidad escandinava",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80"
    },
    {
      name: "Colección Urbana",
      description: "Diseño contemporáneo para espacios compactos",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-between items-center mb-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Nuestras Colecciones</h2>
            <p className="text-muted-foreground">
              Líneas de productos diseñadas para diferentes estilos y necesidades
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/colecciones">
              Ver Todas
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {collections.map((collection, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative aspect-[4/3]">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                <p className="text-muted-foreground mb-4">{collection.description}</p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/colecciones/${collection.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    Explorar <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}