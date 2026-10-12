import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';

export const AvaliacoesSection: React.FC = () => {
  return (
    <section
      id="avaliacoes"
      className="relative w-full bg-[#FAF6F0] py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-16"
    >
      <div className="max-w-[1100px] mx-auto text-center">
        
        {/* Marcador Editorial Superior */}
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#A56A44]">
            07 / Comunidade
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#271811] tracking-tight">
          Avaliações no{' '}
          <span className="font-serif italic font-normal text-[#A56A44]">
            Google.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-[#705E51] mt-3 max-w-md mx-auto leading-relaxed">
          A opinião autêntica dos nossos clientes é o que constrói a história da Drinko.
        </p>

        {/* Card Estrutural para Integração Google Reviews Oficial */}
        <div className="mt-12 sm:mt-16 bg-[#F4EFEA] border border-[#E8DFC0] rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto shadow-xs">
          
          <div className="w-14 h-14 rounded-2xl bg-[#A56A44]/15 text-[#A56A44] flex items-center justify-center mx-auto mb-5">
            <MessageSquareQuote size={28} strokeWidth={2} />
          </div>

          <div className="flex items-center justify-center gap-1 text-[#A56A44]/50 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-current opacity-40" />
            ))}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#271811]">
            Canal de Avaliações em Preparação
          </h3>

          <p className="text-xs sm:text-sm text-[#665447] mt-2.5 max-w-md mx-auto leading-relaxed">
            Assim que a primeira cafeteria física for inaugurada, as notas e depoimentos reais deixados no Google Maps serão sincronizados automaticamente nesta área.
          </p>

          <div className="mt-6 pt-6 border-t border-[#E8DFD3] flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-semibold text-[#8C7B6E]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              API Google Places pronta para conexão
            </span>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <span>Zero depoimentos fictícios</span>
          </div>

        </div>

      </div>
    </section>
  );
};
