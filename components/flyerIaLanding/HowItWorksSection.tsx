"use client";

export default function HowItWorksSection() {
  return (
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">¿Aún contratas personas?</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Un solo asistente con IA puede hacer el trabajo de un diseñador, un copywriter, un estratega de ventas y un analista digital. Imagina lo que puede hacer un equipo completo.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="text-center group">
        <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl font-black text-white">1</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Reemplaza diseñadores</h3>
        <p className="text-gray-600 leading-relaxed">
          Crea flyers impactantes en segundos con un asistente que aprende de miles de anuncios exitosos.
        </p>
      </div>
      <div className="text-center group">
        <div className="w-24 h-24 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl font-black text-white">2</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Escribe como un copywriter</h3>
        <p className="text-gray-600 leading-relaxed">
          Obtén mensajes optimizados para vender, con llamadas a la acción irresistibles y listas para WhatsApp, landing o redes.
        </p>
      </div>
      <div className="text-center group">
        <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl font-black text-white">3</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Piensa como un analista</h3>
        <p className="text-gray-600 leading-relaxed">
          Analiza tus campañas de Facebook Ads y recibe sugerencias para mejorar rendimiento y escalar tus ventas.
        </p>
      </div>
    </div>
  </div>
</section>

  );
}
