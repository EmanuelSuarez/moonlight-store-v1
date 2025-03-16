import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CollectionsPage() {
  const collections = [
    {
      name: "Colección Minimalista",
      description: "Diseño limpio y funcional para espacios modernos. Nuestra colección minimalista se centra en la simplicidad, con líneas limpias y colores neutros que crean un ambiente sereno y ordenado.",
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      products: 24
    },
    {
      name: "Colección Nórdica",
      description: "Inspirada en la simplicidad y funcionalidad escandinava. Esta colección combina materiales naturales, tonos claros y diseños funcionales que aportan calidez y confort a cualquier espacio de trabajo.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80",
      products: 18
    },
    {
      name: "Colección Urbana",
      description: "Diseño contemporáneo para espacios compactos. Perfecta para apartamentos y oficinas pequeñas, esta colección ofrece soluciones inteligentes que maximizan el espacio sin sacrificar el estilo.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      products: 16
    },
    {
      name: "Colección Industrial",
      description: "Robusta y con carácter, inspirada en espacios de trabajo industriales. Combina materiales como metal y madera con acabados en tonos oscuros para crear un ambiente con personalidad.",
      image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      products: 12
    },
    {
      name: "Colección Eco-Friendly",
      description: "Productos sostenibles fabricados con materiales reciclados y procesos respetuosos con el medio ambiente. Diseño consciente para profesionales que valoran la sostenibilidad.",
      image: "https://images.unsplash.com/photo-1545165375-1b744b9ed444?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      products: 14
    },
    {
      name: "Colección Tech",
      description: "Diseñada para entusiastas de la tecnología, con soluciones integradas para dispositivos electrónicos y gestión de cables. Funcionalidad avanzada para espacios de trabajo digitales.",
      image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      products: 20
    }
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Nuestras Colecciones
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestras líneas de productos cuidadosamente diseñadas para diferentes estilos y necesidades. Cada colección tiene su propia personalidad y enfoque.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative aspect-square md:aspect-auto">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                      <p className="text-muted-foreground mb-2">{collection.description}</p>
                      <p className="text-sm font-medium">{collection.products} productos</p>
                    </div>
                    <Button className="mt-4" asChild>
                      <Link href={`/colecciones/${collection.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        Ver Colección <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Colección Destacada: Minimalista
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nuestra colección más popular, diseñada para crear espacios de trabajo limpios, ordenados y funcionales. Cada pieza ha sido cuidadosamente diseñada para combinar estética y utilidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/colecciones/minimalista">
                    Explorar Colección
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/productos">
                    Ver Todos los Productos
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Colección Minimalista"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}