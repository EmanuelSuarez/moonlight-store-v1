import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShoppingBag } from 'lucide-react';

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <CheckCircle className="h-10 w-10 text-primary" />
      </div>
      
      <h1 className="text-3xl font-bold mb-4">¡Gracias por tu compra!</h1>
      
      <p className="text-muted-foreground mb-8 max-w-md">
        Tu pedido ha sido enviado correctamente. Un asesor se pondrá en contacto contigo a través de WhatsApp para coordinar el pago y la entrega.
      </p>
      
      <div className="bg-card p-6 rounded-lg shadow-sm mb-8 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">¿Qué sigue?</h2>
        
        <ol className="text-left space-y-4 mb-6">
          <li className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs mr-3 mt-0.5">1</span>
            <span>Recibirás un mensaje en WhatsApp para confirmar los detalles de tu pedido.</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs mr-3 mt-0.5">2</span>
            <span>Nuestro equipo te informará sobre las opciones de pago disponibles.</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs mr-3 mt-0.5">3</span>
            <span>Una vez confirmado el pago, coordinaremos la entrega de tu pedido.</span>
          </li>
        </ol>
        
        <p className="text-sm text-muted-foreground">
          Si tienes alguna pregunta, no dudes en contactarnos al +54 9 11 3908-8010.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/">
            Volver al Inicio
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/productos">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Seguir Comprando
          </Link>
        </Button>
      </div>
    </div>
  );
}