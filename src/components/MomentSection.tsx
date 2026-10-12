import React from 'react';

export const MomentSection: React.FC = () => {
  return (
    <section
      id="momento"
      className="relative w-full py-28 sm:py-36 lg:py-48 bg-[#EDE5DB] text-[#271811] overflow-hidden"
    >
      <div className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[11/14] sm:aspect-[16/9] md:aspect-[21/9] bg-[#3B2D24] min-h-[400px] sm:min-h-[500px]">
          
          <img
            src="/editorial-moment.jpg"
            alt="Ambiente amplo e iluminado de cafeteria moderna com mesas de madeira e plantas"
            className="w-full h-full object-cover object-[75%_35%] sm:object-center filter brightness-[0.82] transition-transform duration-1000 hover:scale-105"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1600&q=80';
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 pointer-events-none" />

          <div className="absolute inset-0 p-6 sm:p-12 lg:p-20 flex flex-col justify-end text-white max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#E8C29F] mb-2 sm:mb-4 block">
              Pausa & Conexão
            </span>

            <blockquote className="font-serif italic text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-tight text-white/95 mb-4 sm:mb-6">
              “Há dias em que uma xícara de café é uma pausa necessária no ritmo da cidade. Um refúgio de calma, boas conversas e tempo bem aproveitado.”
            </blockquote>

            <div className="flex items-center gap-4 text-xs sm:text-sm text-white/70 font-medium">
              <span className="w-10 h-px bg-white/40" />
              <span>Drinko • Momentos que permanecem</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
