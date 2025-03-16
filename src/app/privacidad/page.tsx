import React from 'react';

type Props = {};

const PrivacidadPage = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Política de Privacidad de Moonlight Store</h1>
        <p className="mb-8">Última actualización: 9 de marzo de 2025</p>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Información que Recopilamos</h2>
            <p>En Moonlight Store, nos comprometemos a proteger su privacidad. Recopilamos la siguiente información:</p>
            <ul className="list-disc list-inside">
              <li>Información personal (nombre, dirección, email, teléfono)</li>
              <li>Información de pago</li>
              <li>Historial de compras</li>
              <li>Datos de navegación en nuestra tienda</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">2. Uso de la Información</h2>
            <p>Utilizamos su información para:</p>
            <ul className="list-disc list-inside">
              <li>Procesar sus pedidos y envíos</li>
              <li>Mejorar nuestros productos y servicios</li>
              <li>Comunicarnos con usted sobre su pedido</li>
              <li>Enviar actualizaciones y ofertas (con su consentimiento)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">3. Protección de Datos</h2>
            <p>Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">4. Compartir Información</h2>
            <p>No vendemos ni compartimos su información personal con terceros, excepto cuando sea necesario para:</p>
            <ul className="list-disc list-inside">
              <li>Procesar pagos</li>
              <li>Realizar envíos</li>
              <li>Cumplir con requisitos legales</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">5. Sus Derechos</h2>
            <p>Usted tiene derecho a:</p>
            <ul className="list-disc list-inside">
              <li>Acceder a su información personal</li>
              <li>Corregir datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Optar por no recibir comunicaciones comerciales</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">6. Cookies</h2>
            <p>Utilizamos cookies para mejorar su experiencia de navegación. Puede configurar su navegador para rechazar cookies, aunque esto podría limitar algunas funcionalidades de nuestra tienda.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">7. Cambios en la Política</h2>
            <p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en nuestra tienda.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">8. Contacto</h2>
            <p>Si tiene preguntas sobre nuestra política de privacidad, contáctenos a través de nuestros canales oficiales.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacidadPage;