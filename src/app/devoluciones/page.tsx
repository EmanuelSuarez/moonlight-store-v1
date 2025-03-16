import React from 'react';

type Props = {};

const DevolucionesPage = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Política de Devoluciones</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Plazo de Devolución</h2>
            <p>Aceptamos devoluciones dentro de los 30 días posteriores a la fecha de compra. Esta política está diseñada para garantizar tu satisfacción con nuestros productos.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Condiciones</h2>
            <ul className="list-disc list-inside">
              <li>El producto debe estar en su estado original</li>
              <li>El empaque debe estar intacto</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Proceso de Devolución</h2>
            <ol className="list-decimal list-inside">
              <li>Contáctanos dentro de los 30 días posteriores a tu compra</li>
              <li>Proporciona el número de orden y motivo de la devolución</li>
              <li>Te enviaremos las instrucciones para el envío del producto</li>
              <li>Una vez recibido y verificado el producto, procesaremos el reembolso</li>
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Productos Defectuosos</h2>
            <p>Si recibes un producto defectuoso, debes contactarnos dentro de las 48 horas posteriores a la recepción. Nuestro equipo te asistirá con el proceso de devolución o cambio según corresponda.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Contacto para Devoluciones</h2>
            <p>Para iniciar una devolución, puedes contactarnos a través de:</p>
            <ul className="list-disc list-inside">
              <li>Correo electrónico</li>
              <li>Redes sociales</li>
              <li>Formulario de contacto en nuestra web</li>
            </ul>
            <p className="mt-4">Nota: Los gastos de envío para la devolución pueden aplicar según el caso. Consulta con nuestro equipo de atención al cliente para más detalles.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevolucionesPage;