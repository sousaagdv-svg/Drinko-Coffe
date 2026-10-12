import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

export interface GoogleReview {
  id: string;
  authorName: string;
  rating: number;
  text: string;
  relativeTimeDescription?: string;
  profilePhotoUrl?: string;
}

interface ReviewsSectionProps {
  /**
   * Avaliações reais obtidas da API do Google Places (quando disponíveis).
   * Vazio por padrão para não inventar depoimentos fictícios.
   */
  reviews?: GoogleReview[];
  /**
   * Média oficial de avaliação obtida do Google Places.
   */
  averageRating?: number | null;
  /**
   * Total de avaliações reais.
   */
  totalReviews?: number | null;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews = [],
  averageRating = null,
  totalReviews = null,
}) => {
  const hasRealReviews = reviews.length > 0 && averageRating !== null;

  return (
    <section
      id="avaliacoes"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#F8F5F0] text-[#271811] overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 pb-6 border-b border-[#E3D3C3]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[#A56A44]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#A56A44]">
                Opinião Pública
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#271811] tracking-tight uppercase leading-none">
              Avaliações no Google
            </h2>
          </div>

          {/* Média Oficial quando fornecida pela API */}
          {hasRealReviews ? (
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="text-2xl font-black text-[#271811]">
                {averageRating.toFixed(1)}
              </span>
              {totalReviews && (
                <span className="text-xs text-[#7A6352] font-semibold">
                  ({totalReviews} avaliações)
                </span>
              )}
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-[#7A6352] max-w-sm mt-3 md:mt-0 font-medium">
              Transparência total: feed integrado diretamente com o perfil de clientes do Google.
            </p>
          )}
        </div>

        {/* Exibição dos Dados */}
        {hasRealReviews ? (
          /* Cards de Avaliações Reais */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 sm:p-8 rounded-3xl bg-white/80 border border-[#E3D4C4] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {rev.profilePhotoUrl ? (
                        <img
                          src={rev.profilePhotoUrl}
                          alt={rev.authorName}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-[#EAE0D4] text-[#A56A44] font-bold flex items-center justify-center text-sm">
                          {rev.authorName.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-bold text-[#271811]">{rev.authorName}</h4>
                        {rev.relativeTimeDescription && (
                          <span className="text-[11px] text-[#8C7564]">
                            {rev.relativeTimeDescription}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#5B4638] leading-relaxed italic">
                    “{rev.text}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Painel Arquitetônico de Preparação do Feed do Google (Sem Dados Fictícios) */
          <div className="rounded-3xl border border-[#E2D2C2] bg-white/70 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-xs">
            <div className="w-14 h-14 rounded-full bg-[#F3ECE4] text-[#A56A44] flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={26} strokeWidth={2} />
            </div>

            <h3 className="text-xl font-bold text-[#271811] mb-2 tracking-tight">
              Sincronização com o Google em Andamento
            </h3>

            <p className="text-sm text-[#6C5545] leading-relaxed mb-6 max-w-lg mx-auto">
              Para preservar a autenticidade e evitar depoimentos inventados, as avaliações públicas dos clientes serão exibidas automaticamente assim que o perfil oficial da Drinko for autenticado.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5ECE3] text-xs font-semibold text-[#8B6E59] border border-[#E8DAD0]">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Pronto para conexão via Google Places API</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
