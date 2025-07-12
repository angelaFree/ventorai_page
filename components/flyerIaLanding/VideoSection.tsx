"use client";

export default function VideoSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Ve FlyerAI en Acción</h2>
          <p className="text-xl text-purple-100 mb-12">Descubre cómo crear flyers virales en menos de 30 segundos</p>
          <div className="relative mx-auto max-w-sm">
            <div className="aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/GECrfns4fwQ?rel=0"
                title="Vídeo FlyerIA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 rounded-3xl opacity-30 blur-xl pointer-events-none -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
