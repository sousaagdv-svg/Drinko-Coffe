import React from 'react';
import { Product } from '../types';
import { PROMOTIONAL_PRODUCT } from '../data/products';
import { imageConfig, hasCustomImage } from '../config/imageConfig';
import { ShoppingBag, Check } from 'lucide-react';

interface PromotionSectionProps {
  onAddToCart: (product: Product) => void;
}

export const PromotionSection: React.FC<PromotionSectionProps> = ({
  onAddToCart,
}) => {
  const [added, setAdded] = React.useState(false);
  const hasPromoImage = hasCustomImage(PROMOTIONAL_PRODUCT.imageKey as any) || imageConfig[PROMOTIONAL_PRODUCT.imageKey as any];
  const promoImage = imageConfig[PROMOTIONAL_PRODUCT.imageKey as any] || imageConfig.lattePromocional;

  const handleAddPromo = () => {
    onAddToCart(PROMOTIONAL_PRODUCT);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section
      id="promocao"
      className="w-full bg-[#E5D5C5] py-16 sm:py-24 px-4 sm:px-8 lg:px-16 overflow-hidden relative select-none"
    >
      <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Lado Esquerdo: Tipografia Expressiva & Informações */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          
          {/* Título de Grande Escala em Duas Linhas */}
          <div className="leading-none">
            <div className="flex items-baseline">
              <span className="text-6xl sm:text-8xl lg:text-9xl font-black text-white tracking-tight uppercase leading-none drop-shadow-xs">
                Novo
              </span>
              <span className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-white/90 ml-3 tracking-normal">
                edição
              </span>
            </div>
            <div className="text-6xl sm:text-8xl lg:text-9xl font-black text-[#271811] tracking-tight uppercase leading-none -mt-1 sm:-mt-2">
              drink
            </div>
          </div>

          {/* Nome e Descrição da Bebida */}
          <div className="mt-7 sm:mt-9">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#271811] tracking-tight">
              {PROMOTIONAL_PRODUCT.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#4E3228] mt-2.5 max-w-md leading-relaxed font-normal">
              {PROMOTIONAL_PRODUCT.description}
            </p>
          </div>

          {/* Preço Promocional em Destaque */}
          <div className="mt-6 flex items-baseline gap-4">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#271811] tracking-tight">
              R$ {PROMOTIONAL_PRODUCT.price.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-xl sm:text-2xl font-bold text-[#86594C] line-through">
              R$ 8,50
            </span>

            <button
              type="button"
              onClick={handleAddPromo}
              className={`ml-3 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs ${
                added
                  ? 'bg-[#406848] text-white'
                  : 'bg-[#A56A44] hover:bg-[#8F5936] text-white'
              }`}
            >
              {added ? (
                <>
                  <Check size={13} strokeWidth={2.5} />
                  <span>Adicionado à sacola</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={13} strokeWidth={2.2} />
                  <span>Pedir agora</span>
                </>
              )}
            </button>
          </div>

          {/* 3 Indicadores Inferiores da Referência */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 pt-8 border-t border-[#D4A373]">
            {/* Indicador 1: Sabor */}
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-[#271811] leading-none">
                  +
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#271811]">
                  Choco
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#5A382E] mt-1 leading-tight">
                Calda de chocolate belga artesanal
              </p>
            </div>

            {/* Indicador 2: Ingredientes */}
            <div>
              <div className="text-xs sm:text-sm font-black text-[#271811] leading-none">
                Espresso +
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#5A382E] mt-1.5 leading-tight">
                leite fresco & cubos de gelo
              </p>
            </div>

            {/* Indicador 3: Refrescante */}
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#271811] leading-none">
                0%
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#5A382E] mt-1 leading-tight font-medium">
                amargor excessivo
              </p>
            </div>
          </div>

        </div>

        {/* Lado Direito: Fotografia do Mocha Gelado */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative">
          {hasPromoImage ? (
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              <img
                src={promoImage}
                alt={PROMOTIONAL_PRODUCT.name}
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            </div>
          ) : (
            /* Placeholder Neutro e Integrado (Sem bordas de cartão e sem desenhos artificiais) */
            <div
              className="relative w-full max-w-[380px] sm:max-w-[420px] h-[360px] sm:h-[420px] flex flex-col items-center justify-center text-center p-6 group transition-all"
              aria-label="Espaço reservado para a fotografia promocional do Latte Gelado e coco"
            >
              {/* Círculo sutil integrado ao tom rosa suave */}
              <div className="w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] rounded-full bg-white/30 border border-white/50 flex flex-col items-center justify-center p-8 shadow-xs">
                <div className="w-16 h-24 rounded-lg border border-dashed border-white/60 flex items-center justify-center mb-3 bg-white/10">
                  <span className="text-[11px] font-bold text-white/90 uppercase tracking-widest">
                    Foto
                  </span>
                </div>
                <span className="text-sm font-bold text-[#271811] tracking-tight">
                  Latte Gelado & Coco
                </span>
                <span className="text-xs text-[#523329] mt-1 max-w-[200px] leading-tight">
                  Espaço reservado para a fotografia do copo grande com fatias de coco
                </span>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
