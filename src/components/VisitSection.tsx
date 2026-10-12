import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Info } from 'lucide-react';

interface VisitSectionProps {
  /**
   * Endereço oficial (quando fornecido). Vazio por padrão para evitar dados fictícios.
   */
  officialAddress?: string;
  /**
   * URL do Google Maps embed (quando fornecido).
   */
  googleMapsEmbedUrl?: string;
  /**
   * Horário oficial (quando fornecido).
   */
  officialHours?: string;
}

export const VisitSection: React.FC<VisitSectionProps> = ({
  officialAddress = '',
  googleMapsEmbedUrl = '',
  officialHours = '',
}) => {
  const [routeNotice, setRouteNotice] = useState(false);

  const handleRouteClick = () => {
    if (officialAddress) {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officialAddress)}`,
        '_blank'
      );
    } else {
      setRouteNotice(true);
      setTimeout(() => setRouteNotice(false), 3500);
    }
  };

  return (
    <section
      id="visite"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#F4EDE5] text-[#271811] overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#A56A44]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#A56A44]">
              Localização & Contato
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#271811] tracking-tight uppercase leading-[1.08] mb-4">
            Visite a Drinko
          </h2>

          <p className="text-sm sm:text-base text-[#6E5545] font-medium leading-relaxed">
            Um ambiente contemporâneo projetado para apreciar cafés autorais com calma e conforto.
          </p>
        </div>

        {/* Grade de 2 Colunas: Informações e Mapa Arquitetônico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Coluna 1: Informações e Botão de Rota (5 colunas) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white/80 p-8 sm:p-10 rounded-3xl border border-[#E2D2C2] shadow-xs">
            <div className="space-y-8">
              
              {/* Item: Endereço */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F0E6DB] flex items-center justify-center text-[#A56A44] shrink-0 mt-0.5">
                  <MapPin size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#271811] mb-1">
                    Endereço Oficial
                  </h3>
                  {officialAddress ? (
                    <p className="text-sm text-[#5B4739] leading-relaxed">{officialAddress}</p>
                  ) : (
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-[#8B6E5A]">
                        Em fase final de confirmação de ponto
                      </p>
                      <p className="text-xs text-[#9B806E] leading-relaxed">
                        O endereço exato será atualizado assim que a inauguração for oficializada.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Item: Horário de Funcionamento */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F0E6DB] flex items-center justify-center text-[#A56A44] shrink-0 mt-0.5">
                  <Clock size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#271811] mb-1">
                    Horário de Atendimento
                  </h3>
                  {officialHours ? (
                    <p className="text-sm text-[#5B4739] leading-relaxed">{officialHours}</p>
                  ) : (
                    <p className="text-sm text-[#8B6E5A] font-semibold">
                      Horários serão divulgados na data de abertura
                    </p>
                  )}
                </div>
              </div>

              {/* Item: Contato */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F0E6DB] flex items-center justify-center text-[#A56A44] shrink-0 mt-0.5">
                  <Phone size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#271811] mb-1">
                    Atendimento & Dúvidas
                  </h3>
                  <p className="text-sm text-[#5B4739] leading-relaxed">
                    Canal oficial disponível via WhatsApp e Instagram
                  </p>
                </div>
              </div>

            </div>

            {/* Ação de Traçar Rota */}
            <div className="mt-8 pt-8 border-t border-[#E8DAD0]">
              <button
                type="button"
                onClick={handleRouteClick}
                className="w-full py-4 px-6 rounded-2xl bg-[#271811] hover:bg-[#A56A44] text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer active:scale-98 shadow-md"
              >
                <Navigation size={18} strokeWidth={2} />
                <span>Traçar Rota no Google Maps</span>
              </button>

              {routeNotice && (
                <div className="mt-3 p-3 rounded-xl bg-[#FAF0E6] border border-[#E0D0C0] text-xs text-[#8A5A38] flex items-center gap-2 animate-in fade-in duration-200">
                  <Info size={16} className="shrink-0" />
                  <span>O destino exato no mapa será ativado quando o endereço for oficializado.</span>
                </div>
              )}
            </div>

          </div>

          {/* Coluna 2: Mapa Arquitetônico Preparado (7 colunas) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E2D2C2] bg-[#E7DDD2] shadow-sm relative min-h-[380px] flex flex-col justify-between p-8 sm:p-12">
            
            {googleMapsEmbedUrl ? (
              <iframe
                title="Localização Drinko no Google Maps"
                src={googleMapsEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              /* Interface Arquitetônica de Mapa Elegante (Sem dados falsos) */
              <>
                {/* Linhas topográficas estilizadas de fundo */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 45% 55%, #A56A44 1.5px, transparent 1.5px),
                      linear-gradient(to right, rgba(165,106,68,0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(165,106,68,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '36px 36px, 72px 72px, 72px 72px',
                  }}
                />

                {/* Badge Superior */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0D2C2] text-xs font-bold text-[#271811] shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Google Maps Integration Ready</span>
                  </div>
                </div>

                {/* Marcador Central Elegante */}
                <div className="relative z-10 my-auto flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-[#DFD1C4] shadow-md max-w-sm mx-auto">
                  <div className="w-14 h-14 rounded-full bg-[#271811] text-white flex items-center justify-center shadow-md mb-3">
                    <MapPin size={26} className="text-[#D4A373]" />
                  </div>
                  <h4 className="text-lg font-black text-[#271811] tracking-tight uppercase">
                    Drinko Cafeteria
                  </h4>
                  <p className="text-xs text-[#7A5F4D] mt-1 leading-relaxed">
                    A área interativa do Google Maps será renderizada aqui assim que as coordenadas do ponto oficial forem vinculadas.
                  </p>
                </div>

                {/* Rodapé do Bloco de Mapa */}
                <div className="relative z-10 text-[11px] text-[#8C7463] text-center font-medium">
                  Integração nativa preparada para Google Maps API & Places
                </div>
              </>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
