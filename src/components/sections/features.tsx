"use client"

import { useEffect, useRef, useState } from 'react';
import { Lamp, Layers, Maximize2, Palette, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Diseño Minimalista",
      description: "Estética contemporánea para cualquier espacio."
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Funcionalidad",
      description: "Soluciones para mejorar tu productividad."
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Modularidad",
      description: "Productos adaptables a tus necesidades."
    },
    {
      icon: <Maximize2 className="h-5 w-5" />,
      title: "Espacios Compactos",
      description: "Aprovecha al máximo espacios reducidos."
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 para derecha, -1 para izquierda

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        // Cambiar dirección cuando llegue a los extremos
        if (scrollPosition >= maxScroll) {
          setScrollDirection(-1);
        } else if (scrollPosition <= 0) {
          setScrollDirection(1);
        }
        
        // Calcular nueva posición
        const newPosition = scrollPosition + (scrollDirection * 1);
        setScrollPosition(newPosition);
        
        // Aplicar scroll
        scrollRef.current.scrollLeft = newPosition;
      }
    }, 30);

    return () => clearInterval(interval);
  }, [scrollPosition, scrollDirection]);

  return (
    <section className="w-full py-10 md:py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Versión móvil */}
        <div className="md:hidden">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold tracking-tight">Nuestra Propuesta de Valor</h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-xs mx-auto">
              Transformamos espacios ordinarios en ambientes productivos y estéticos.
            </p>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex space-x-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 flex items-center bg-background rounded-lg p-3 shadow-sm w-[220px] transition-transform hover:scale-105"
                >
                  <div className="p-2 bg-primary/10 rounded-full mr-3 text-primary shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Versión desktop */}
        <div className="hidden md:block">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Nuestra Propuesta de Valor</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Transformamos espacios ordinarios en ambientes productivos y estéticos.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-6 max-w-5xl">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-4 bg-background rounded-lg shadow-sm transition-transform hover:scale-105"
                >
                  <div className="p-3 bg-primary/10 rounded-full mb-3 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}