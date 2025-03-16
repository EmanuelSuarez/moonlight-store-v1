import React from 'react';

type Props = {};

const EnviosPage = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Información de Envíos</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Trabajamos con dos empresas de confianza para realizar nuestros envíos:</h2>
            <ul className="list-disc list-inside">
              <li><strong>OCA</strong> - Servicio de envíos a todo el país</li>
              <li><strong>Andreani</strong> - Servicio de envíos a todo el país</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Proceso de Coordinación</h2>
            <p>Una vez realizado el pago, nos pondremos en contacto contigo a través de WhatsApp para coordinar los detalles del envío:</p>
            <ul className="list-disc list-inside">
              <li>Confirmación de la dirección de entrega</li>
              <li>Selección de la empresa de envío de tu preferencia</li>
              <li>Seguimiento del paquete</li>
            </ul>
            <aside className="bg-gray-100 p-4 rounded-md mt-4">
              <p className="text-gray-700">💬 Toda la coordinación se realiza a través de WhatsApp para brindarte una atención más personalizada y respuesta inmediata ante cualquier consulta.</p>
            </aside>
          </div>
          <div>
            <p>Los tiempos de entrega pueden variar según tu ubicación y la empresa de envío seleccionada. Te mantendremos informado sobre el estado de tu pedido en todo momento.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnviosPage;