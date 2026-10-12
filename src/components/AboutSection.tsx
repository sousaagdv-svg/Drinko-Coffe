import React from 'react';
import { Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="apresentacao"
      className="relative w-full min-h-[620px] sm:min-h-[700px] lg:min-h-[780px] xl:min-h-[840px] flex items-center overflow-hidden select-none"
    >
      {/* 1. Fotografia Panorâmica de Cafeteria Ocupando Todo o Fundo */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://i.imgur.com/jJFRbgv.jpeg"
          alt="Ambiente sofisticado de cafeteria contemporânea Drinko com mesas de madeira e iluminação natural"
          className="w-full h-full object-cover object-center filter brightness-[0.88] transition-transform duration-1000 scale-100 hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/apresentacao-bg.jpeg';
          }}
        />

        {/* Degradê Suave Cinematográfico para Máxima Legibilidade Sem Esconder a Foto */}
        {/* Desktop: escurecimento lateral esquerdo gradual que se abre para a foto à direita */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#120D0A]/95 via-[#120D0A]/70 to-[#120D0A]/20 pointer-events-none" />
        
        {/* Mobile / Tablet: escurecimento vertical suave equilibrado */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#120D0A]/95 via-[#120D0A]/75 to-[#120D0A]/35 pointer-events-none" />
      </div>

      {/* 2. Conteúdo Editorial Integrado Diretamente Sobre a Imagem (Sem Cards ou Caixas) */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28 lg:py-32 flex flex-col justify-between min-h-full">
        
        {/* Bloco Superior: Badge & Título de Grande Impacto Editorial */}
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge Editorial Discreto */}
          <div className="inline-flex items-center gap-2.5 mb-5 sm:mb-6">
            <span className="w-7 h-px bg-[#D4A373]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#E5BA97]">
              Apresentação Drinko
            </span>
          </div>

          {/* Título Sobreposto em Dois Níveis com Tipografia de Marca */}
          <div className="mb-6 sm:mb-8">
            <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E5BA97] leading-tight block drop-shadow-sm">
              Mais do que café.
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-white tracking-[-0.03em] uppercase leading-[0.98] mt-2 drop-shadow-md">
              UM MOMENTO SEU.
            </h2>
          </div>

          {/* Texto Institucional Compacto e Concreto */}
          <div className="space-y-4 text-sm sm:text-base md:text-lg text-[#E0D2C5] font-normal leading-relaxed max-w-xl drop-shadow-xs">
            <p>
              A Drinko desenvolve cada bebida a partir da proporção exata entre café e bases frescas. Do espresso encorpado aos lattes gelados montados em camadas com gelo puro e compotas da casa, servimos cada receita no ponto ideal de consumo.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-[#C2B2A4]">
              Ajustamos moagem, tempo de fluxo e a temperatura do leite para equilibrar doçura natural e intensidade. Uma pausa sem pressa para quem aprecia o café bem executado.
            </p>
          </div>
        </div>

        {/* Bloco Inferior: Filosofia Drinko Discreta */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/15 max-w-xl flex items-center gap-3 text-xs sm:text-sm text-white/85">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#D4A373] shrink-0">
            <Sparkles size={14} />
          </div>
          <p className="font-serif italic text-sm sm:text-base text-[#EDE3D8] leading-snug">
            “O café perfeito não é apenas bebida; é a atmosfera que se constrói ao redor dele.”
          </p>
        </div>

      </div>
    </section>
  );
};
