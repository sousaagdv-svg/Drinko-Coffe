import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

interface VisiteConfig {
  endereco: string;
  bairroCidade: string;
  horarioSemana: string;
  horarioFimDeSemana: string;
  telefone: string;
  isEnderecoConfirmado: boolean;
  googleMapsUrl?: string;
}

// Configuração pronta para receber os dados oficiais assim que o local for definido
const VISITE_CONFIG: VisiteConfig = {
  endereco: 'Localização em definição',
  bairroCidade: 'São Paulo — SP',
  horarioSemana: 'Horários a confirmar na inauguração',
  horarioFimDeSemana: 'Horários a confirmar na inauguração',
  telefone: 'Canal de atendimento em ativação',
  isEnderecoConfirmado: false,
};

export const VisiteSection: React.FC = () => {
  return (
    <section
      id="visite"
      className="relative w-full bg-[#18110D] text-[#F5EDE3] py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto">
        
        {/* Marcador Editorial Superior */}
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D5C4A1]">
            06 / Localização & Visita
          </span>
          <div className="h-px w-12 bg-[#D5C4A1]/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Lado Esquerdo: Informações de Visita (5 colunas) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                Visite a <br />
                <span className="font-serif italic font-normal text-3xl sm:text-4xl lg:text-5xl text-[#D5C4A1]">
                  Drinko.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-[#C8B7A5] mt-4 leading-relaxed font-normal">
                Um ponto de encontro para quem valoriza boa conversa e café de alta qualidade. Estamos preparando cada espaço para recebê-lo com conforto.
              </p>

              {/* Blocos de Informação Estruturada */}
              <div className="mt-8 space-y-5">
                {/* Endereço */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#A56A44]/20 flex items-center justify-center text-[#D5C4A1] shrink-0 mt-0.5">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#A56A44] block">
                      Endereço
                    </span>
                    <span className="text-sm font-semibold text-white block mt-0.5">
                      {VISITE_CONFIG.endereco}
                    </span>
                    <span className="text-xs text-[#9B897A] block mt-0.5">
                      {VISITE_CONFIG.bairroCidade}
                    </span>
                  </div>
                </div>

                {/* Horários */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#A56A44]/20 flex items-center justify-center text-[#D5C4A1] shrink-0 mt-0.5">
                    <Clock size={17} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#A56A44] block">
                      Funcionamento
                    </span>
                    <span className="text-xs sm:text-sm text-[#D4C3B2] block mt-0.5">
                      Segunda a Sexta: {VISITE_CONFIG.horarioSemana}
                    </span>
                    <span className="text-xs sm:text-sm text-[#D4C3B2] block mt-0.5">
                      Sábados e Domingos: {VISITE_CONFIG.horarioFimDeSemana}
                    </span>
                  </div>
                </div>

                {/* Contato */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#A56A44]/20 flex items-center justify-center text-[#D5C4A1] shrink-0 mt-0.5">
                    <Phone size={17} />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#A56A44] block">
                      Contato Direto
                    </span>
                    <span className="text-xs sm:text-sm text-[#D4C3B2] block mt-0.5">
                      {VISITE_CONFIG.telefone}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão de Rota (Estado Consciente enquanto endereço não for publicado) */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                type="button"
                disabled={!VISITE_CONFIG.isEnderecoConfirmado}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                  VISITE_CONFIG.isEnderecoConfirmado
                    ? 'bg-[#A56A44] hover:bg-[#8F5936] text-white cursor-pointer'
                    : 'bg-white/10 text-[#C2B1A0] cursor-not-allowed opacity-90'
                }`}
              >
                <Navigation size={16} />
                <span>
                  {VISITE_CONFIG.isEnderecoConfirmado
                    ? 'Traçar rota no Google Maps'
                    : 'Rotas disponíveis na inauguração'}
                </span>
              </button>
              <span className="text-[11px] text-[#8C7B6E] block mt-2 text-center">
                O link para navegação será ativado assim que o local for aberto ao público.
              </span>
            </div>
          </div>

          {/* Lado Direito: Espaço Reservado para o Google Maps (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="w-full h-full min-h-[380px] lg:min-h-[480px] rounded-2xl sm:rounded-3xl bg-[#231A14] border border-white/10 overflow-hidden relative flex flex-col items-center justify-center p-8 text-center shadow-[0_20px_45px_rgba(0,0,0,0.4)]">
              
              {/* Estética Cartográfica Estilizada de Fundo */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1px),
                    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '32px 32px, 64px 64px, 64px 64px',
                }}
              />

              {/* Pin Arquitetônico Central Drinko */}
              <div className="relative z-10 flex flex-col items-center max-w-sm">
                <div className="w-14 h-14 rounded-2xl bg-[#A56A44] text-white flex items-center justify-center shadow-2xl mb-4 border border-white/20">
                  <MapPin size={26} strokeWidth={2} />
                </div>

                <h3 className="font-bold text-lg text-white">
                  Integração Google Maps
                </h3>

                <p className="text-xs text-[#A89685] mt-2 leading-relaxed">
                  Esta área está estruturada para receber a incorporação oficial do Google Maps assim que as coordenadas da primeira loja física forem homologadas.
                </p>

                <div className="mt-5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-[11px] font-semibold text-[#D5C4A1]">
                  Aguardando coordenadas oficiais da unidade
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
