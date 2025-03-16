import React from 'react';

type Props = {};

const TerminosPage = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Términos y Condiciones de Moonlight Store</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Aceptación de los Términos</h2>
            <p>Al realizar una compra en Moonlight Store, usted acepta automáticamente estos términos y condiciones en su totalidad.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">2. Productos y Servicios</h2>
            <p>2.1 Moonlight Store se reserva el derecho de modificar los precios de los productos sin previo aviso.</p>
            <p>2.2 Las imágenes de los productos son referenciales y pueden variar del producto final.</p>
            <p>2.3 La disponibilidad de los productos está sujeta al stock existente.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">3. Proceso de Compra</h2>
            <p>3.1 Los pedidos se confirman únicamente después de recibir el pago correspondiente.</p>
            <p>3.2 Una vez confirmado el pedido, no se aceptan cancelaciones.</p>
            <p>3.3 El cliente es responsable de proporcionar información correcta y actualizada para la entrega.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">4. Envíos y Entregas</h2>
            <p>4.1 Los tiempos de entrega son estimados y pueden variar según la ubicación y disponibilidad.</p>
            <p>4.2 No nos responsabilizamos por retrasos causados por terceros o situaciones fuera de nuestro control.</p>
            <p>4.3 El cliente debe verificar el producto al momento de la entrega.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">5. Política de Devoluciones</h2>
            <p>5.1 Se aceptan devoluciones dentro de las 48 horas posteriores a la recepción del producto.</p>
            <p>5.2 El producto debe estar sin usar y en su empaque original.</p>
            <p>5.3 Los costos de envío por devolución corren por cuenta del cliente.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">6. Garantía</h2>
            <p>6.1 Los productos tienen garantía contra defectos de fabricación por 30 días.</p>
            <p>6.2 La garantía no cubre daños por mal uso o modificaciones no autorizadas.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">7. Propiedad Intelectual</h2>
            <p>7.1 Todo el contenido de Moonlight Store está protegido por derechos de autor.</p>
            <p>7.2 Está prohibida la reproducción total o parcial sin autorización.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">8. Privacidad y Datos Personales</h2>
            <p>8.1 Los datos personales serán tratados según nuestra política de privacidad.</p>
            <p>8.2 No compartiremos información personal con terceros sin autorización.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">9. Modificaciones</h2>
            <p>9.1 Moonlight Store se reserva el derecho de modificar estos términos en cualquier momento.</p>
            <p>9.2 Los cambios serán efectivos inmediatamente después de su publicación.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">10. Legislación Aplicable</h2>
            <p>10.1 Estos términos se rigen por las leyes de la República Argentina.</p>
            <p>10.2 Cualquier disputa será resuelta en los tribunales correspondientes.</p>
          </div>
          <p className="mt-8">Última actualización: 9 de marzo de 2024</p>
        </div>
      </div>
    </section>
  );
};

export default TerminosPage;