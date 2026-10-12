import React from 'react';
import { Product } from '../types';
import { imageConfig, hasCustomImage } from '../config/imageConfig';
import { Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  const [justAdded, setJustAdded] = React.useState(false);
  const hasImage = Boolean(
    product.imageUrl || (product.imageKey && hasCustomImage(product.imageKey))
  );

  const handleAdd = () => {
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <div className="bg-[#FAF7F2] border border-[#ECE4D8] hover:border-[#DCCFC0] rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-200 hover:shadow-xs group">
      {/* 1. Espaço reservado para a fotografia do produto */}
      <div className="w-full aspect-[4/5] bg-white rounded-xl border border-[#EDE7DC] overflow-hidden flex flex-col items-center justify-center p-3 relative mb-3">
        {hasImage ? (
          <img
            src={product.imageUrl || (product.imageKey ? imageConfig[product.imageKey] : '')}
            alt={product.name}
            className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          /* Placeholder Neutro e Proporcional (sem emojis, sem desenhos caricatos) */
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-2 rounded-lg bg-[#FAF8F5]/60">
            <div className="w-12 h-16 rounded-md border border-dashed border-[#D2C3B0] flex items-center justify-center mb-2 bg-[#F4EFEA]/40">
              <span className="text-[10px] font-bold text-[#A56A44]/70 uppercase tracking-wider">
                Foto
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#665448] tracking-tight">
              {product.name}
            </span>
            <span className="text-[9px] text-[#9E8E81] mt-0.5">
              Dimensões 3:4
            </span>
          </div>
        )}
      </div>

      {/* 2. Informações do produto */}
      <div className="px-1 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-sm sm:text-base text-[#271811] tracking-tight leading-snug">
            {product.name}
          </h3>
          <p className="text-[11px] sm:text-xs text-[#7A6D63] mt-0.5 line-clamp-1 leading-normal font-normal">
            {product.description}
          </p>
        </div>

        {/* 3. Preço e Botão de Adicionar */}
        <div className="flex items-center justify-between pt-3 mt-1 border-t border-[#EFE8DD]/70">
          <span className="font-bold text-sm sm:text-[15px] text-[#271811]">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>

          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Adicionar ${product.name} à sacola`}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer ${
              justAdded
                ? 'bg-[#4E7756] text-white'
                : 'bg-[#EAE1D3] hover:bg-[#A56A44] text-[#55453A] hover:text-white'
            }`}
          >
            {justAdded ? (
              <>
                <Check size={12} strokeWidth={2.5} />
                <span>Adicionado</span>
              </>
            ) : (
              <>
                <Plus size={12} strokeWidth={2.5} />
                <span>Adicionar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
