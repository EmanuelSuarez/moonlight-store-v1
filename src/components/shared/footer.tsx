import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">MOONLIGHT</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Transformamos espacios de trabajo ordinarios en ambientes altamente productivos y estéticamente agradables.
            </p>
            <div className="flex space-x-4">
              {/* <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link> */}
              <Link href="https://www.instagram.com/moonlightworkspace/" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              {/* <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link> */}
              {/* <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Link> */}
            </div>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-bold mb-4">Acerca de</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-sm text-muted-foreground hover:text-primary">
                  Compañía
                </Link>
              </li>
              <li>
                <Link href="/tiendas" className="text-sm text-muted-foreground hover:text-primary">
                  Tiendas
                </Link>
              </li>
              <li>
                <Link href="/carreras" className="text-sm text-muted-foreground hover:text-primary">
                  Carreras
                </Link>
              </li>
            </ul>
          </div>
           */}
          <div>
            <h3 className="text-lg font-bold mb-4">Ayuda</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/envios" className="text-sm text-muted-foreground hover:text-primary">
                  Envíos y Entregas
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="text-sm text-muted-foreground hover:text-primary">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-muted-foreground hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Suscríbete</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recibe nuestras novedades y ofertas exclusivas.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Moonlight Workspace. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-primary">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-sm text-muted-foreground hover:text-primary">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}