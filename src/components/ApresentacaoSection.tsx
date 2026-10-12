import React from 'react';

export const ApresentacaoSection: React.FC = () => {
  return (
    <section
      id="apresentacao"
      className="relative w-full bg-[#FAF6F0] py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto">
        
        {/* Marcador Editorial Superior */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#A56A44]">
            01 / Apresentação
          </span>
          <div className="h-px w-12 bg-[#A56A44]/30" />
        </div>

        {/* Composição Assimétrica (Aveline style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Tipografia e Mensagem Institucional (5 colunas) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#271811] tracking-tight leading-[1.12]">
              Mais do que café. <br />
              <span className="font-serif italic font-normal text-3xl sm:text-4xl lg:text-5xl text-[#A56A44] block mt-1">
                Um momento seu.
              </span>
            </h2>

            <div className="mt-6 sm:mt-8 space-y-4 text-sm sm:text-base text-[#5E4E42] leading-relaxed font-normal">
              <p>
                A Drinko foi idealizada a partir do desejo de desacelerar o ritmo diário e transformar pequenas pausas em rituais marcantes de bem-estar.
              </p>
              <p>
                Cada bebida une frescor, cremosidade e aromas equilibrados em receitas contemporâneas. Um espaço acolhedor desenhado para inspirar encontros, conversas ou simplesmente o prazer de desfrutar um instante de silêncio e sabor.
              </p>
            </div>

            {/* Micro-detalhes Editoriais */}
            <div className="grid grid-cols-2 gap-6 pt-8 sm:pt-10 mt-8 border-t border-[#E8DFC0]/60">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#8A796C] block">
                  Ambiente
                </span>
                <span className="text-sm font-semibold text-[#271811] mt-1 block">
                  Calmo & Contemporâneo
                </span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#8A796C] block">
                  Criações
                </span>
                <span className="text-sm font-semibold text-[#271811] mt-1 block">
                  Bebidas com Identidade
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <a
                href="#destaques"
                className="inline-flex items-center text-xs sm:text-sm font-bold text-[#A56A44] hover:text-[#885230] transition-colors group"
              >
                <span>Conheça os três destaques</span>
                <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Lado Direito: Fotografia Editorial Ampla (7 colunas) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(39,24,17,0.12)] border border-[#EAE1D5]">
              <img
                src="/editorial-ambience.jpg"
                alt="Ambiente acolhedor e iluminação natural de cafeteria contemporânea"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
