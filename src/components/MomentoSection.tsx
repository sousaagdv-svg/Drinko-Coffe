import React from 'react';

export const MomentoSection: React.FC = () => {
  return (
    <section
      id="momento"
      className="relative w-full bg-[#F5EFE6] py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto flex flex-col items-center text-center">
        
        {/* Marcador Editorial Superior */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#A56A44]">
            04 / Atmosfera
          </span>
          <div className="h-px w-12 bg-[#A56A44]/30" />
        </div>

        {/* Citação Editorial em Destaque */}
        <h2 className="max-w-3xl text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#271811] tracking-tight leading-[1.25]">
          “O tempo passa mais devagar quando o café é bom{' '}
          <span className="font-serif italic font-normal text-[#A56A44]">
            e a atmosfera convida a ficar.”
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-[#6C5A4C] mt-4 max-w-lg leading-relaxed">
          Pensado como um refúgio para conversas despretensiosas, leitura tranquila e pausas intencionais na rotina.
        </p>

        {/* Fotografia Panorâmica Ampla */}
        <div className="w-full mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] shadow-[0_20px_45px_rgba(39,24,17,0.12)] border border-[#E8DFC0] relative">
          <img
            src="/editorial-panoramic.jpg"
            alt="Atmosfera acolhedora e luz natural em mesa de cafeteria contemporânea"
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
};
