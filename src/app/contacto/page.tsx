import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Contacto
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta, sugerencia o información sobre nuestros productos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Asunto de tu mensaje"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                <Button type="reset" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-4 text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Correo Electrónico</h3>
                        <p className="text-muted-foreground">info@moonlightworkspace.com</p>
                        <p className="text-muted-foreground">soporte@moonlightworkspace.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-4 text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Whatsapp</h3>
                        <p className="text-muted-foreground">+54 9 11 3908 8010</p>
                        <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-4 text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Dirección</h3>
                        <p className="text-muted-foreground">Calle Innovación, 123</p>
                        <p className="text-muted-foreground">28001 Madrid, España</p>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}
{/*                 
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-4 text-primary">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Horario de Atención</h3>
                        <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                        <p className="text-muted-foreground">Sábados: 10:00 - 14:00</p>
                        <p className="text-muted-foreground">Domingos: Cerrado</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-4 text-primary">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Chat en Vivo</h3>
                        <p className="text-muted-foreground">Disponible en nuestra web</p>
                        <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                        <Button className="mt-2" variant="outline">
                          Proximamente
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Encuéntranos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visita nuestra tienda física para ver nuestros productos en persona.
            </p>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-muted-foreground">Mapa de ubicación</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Preguntas Frecuentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Respuestas a las preguntas más comunes sobre nuestros productos y servicios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">¿Cuál es el tiempo de entrega?</h3>
                <p className="text-muted-foreground">
                  El tiempo de entrega estándar es de 3-5 días hábiles para envíos nacionales y 7-14 días para envíos internacionales.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">¿Ofrecen envío gratuito?</h3>
                <p className="text-muted-foreground">
                  Sí, ofrecemos envío gratuito en pedidos superiores a $100 para envíos nacionales.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">¿Cuál es su política de devoluciones?</h3>
                <p className="text-muted-foreground">
                  Aceptamos devoluciones dentro de los 30 días posteriores a la compra. Los productos deben estar en su estado original y con el embalaje completo.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">¿Cómo puedo contactar con soporte?</h3>
                <p className="text-muted-foreground">
                  Puedes contactarnos a través de nuestro correo electrónico, teléfono o chat en vivo durante nuestro horario de atención.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  );
}