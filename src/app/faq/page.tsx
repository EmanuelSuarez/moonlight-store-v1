import React from 'react';

type Props = {};

const FAQPage = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Preguntas Frecuentes (FAQ)</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo realizo una compra en Moonlight Store?</h2>
            <p>Para realizar una compra, simplemente:</p>
            <ol className="list-decimal list-inside">
              <li>Selecciona los productos que deseas</li>
              <li>Agrégalos al carrito de compras</li>
              <li>Completa tus datos de envío y pago</li>
              <li>Confirma tu pedido</li>
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cuáles son los métodos de pago aceptados?</h2>
            <p>Aceptamos:</p>
            <ul className="list-disc list-inside">
              <li>Tarjetas de crédito y débito</li>
              <li>Transferencias bancarias</li>
              <li>Pagos digitales</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cuánto tiempo tarda en llegar mi pedido?</h2>
            <p>Los tiempos de entrega varían según tu ubicación. Una vez confirmado el pago, recibirás un correo con los detalles de envío y seguimiento de tu pedido.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Qué hago si recibo un producto defectuoso?</h2>
            <p>Si recibes un producto defectuoso, contáctanos dentro de las 48 horas posteriores a la recepción. Te ayudaremos con el proceso de devolución o cambio según corresponda.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Tienen servicio de atención al cliente?</h2>
            <p>Sí, nuestro equipo de atención al cliente está disponible para ayudarte:</p>
            <ul className="list-disc list-inside">
              <li>Por correo electrónico</li>
              <li>A través de nuestras redes sociales</li>
              <li>Mediante nuestro formulario de contacto</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Realizan envíos internacionales?</h2>
            <p>Por el momento, solo realizamos envíos dentro del territorio nacional. Estamos trabajando para expandir nuestros servicios internacionalmente.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo puedo hacer seguimiento de mi pedido?</h2>
            <p>Una vez que tu pedido sea despachado, recibirás un correo electrónico con el número de seguimiento y las instrucciones para rastrear tu envío.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cuál es la política de devoluciones?</h2>
            <p>Aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre que el producto esté en su estado original y con el empaque intacto. Consulta nuestra política de devoluciones para más detalles.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;