"use client";

export default function HowItWorksSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">Cómo Funciona la Magia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnología de IA avanzada que analiza millones de anuncios exitosos para crear tus diseños perfectos
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-black text-white">1</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Conexión Automática</h3>
            <p className="text-gray-600 leading-relaxed">
              Nos conectamos a Facebook Ads Library, Google Trends y TikTok Ads Library, basándonos en indicadores.{' '}
            </p>
          </div>
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-black text-white">2</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Extracción de Patrones</h3>
            <p className="text-gray-600 leading-relaxed">
              Nuestra IA identifica los elementos visuales, colores, tipografías y layouts que generan más conversiones.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-black text-white">3</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Generación Instantánea</h3>
            <p className="text-gray-600 leading-relaxed">
              Describes tu producto o servicio y obtienes flyers personalizados basados en los patrones más exitosos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
