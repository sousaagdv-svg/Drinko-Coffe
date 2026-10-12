import React from 'react';

export const ExperienciaSection: React.FC = () => {
  return (
    <section
      id="experiencia"
      className="relative w-full bg-[#18110D] text-[#F5EDE3] py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-16 overflow-hidden"
    >
      {/* Luz ambiente suave de estúdio sobre o fundo escuro */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#A56A44]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* Marcador Editorial Superior */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D5C4A1]">
            02 / Cuidado & Processo
          </span>
          <div className="h-px w-12 bg-[#D5C4A1]/30" />
        </div>

        {/* Grid Editorial com Fotografia Cinematográfica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Fotografia Cinematográfica de Preparo (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.5)] border border-white/10">
              <img
                src="/editorial-barista.jpg"
                alt="Extração precisa de café artesanal sob iluminação cinematográfica de estúdio"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18110D]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Lado Direito: Texto Editorial Refinado (5 colunas) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Cada detalhe faz parte <br />
              <span className="font-serif italic font-normal text-3xl sm:text-4xl lg:text-5xl text-[#D5C4A1] block mt-1">
                da experiência.
              </span>
            </h2>

            <div className="mt-6 sm:mt-8 space-y-4 text-sm sm:text-base text-[#D4C3B2] leading-relaxed font-normal">
              <p>
                Acreditamos que a verdadeira sofisticação reside na precisão silenciosa. Da escolha da temperatura correta à textura aveludada do leite, cada xícara é elaborada para respeitar o tempo natural dos sabores.
              </p>
              <p>
                Criamos bebidas para serem contempladas com calma, sentidas nos sentidos e apreciadas gole a gole, sem pressa.
              </p>
            </div>

            {/* Destaques de Precisão */}
            <div className="grid grid-cols-2 gap-6 pt-8 mt-8 border-t border-white/15">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-[#A56A44] block">
                  Harmonia
                </span>
                <span className="text-sm font-semibold text-white mt-1 block">
                  Textura & Frescor
                </span>
              </div>
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-[#A56A44] block">
                  Apresentação
                </span>
                <span className="text-sm font-semibold text-white mt-1 block">
                  Design & Estética
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
