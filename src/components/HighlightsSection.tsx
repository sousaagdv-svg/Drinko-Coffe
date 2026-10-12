import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface HighlightsSectionProps {
  onAddToCart: (product: Product) => void;
}

export const HIGHLIGHT_DRINKS: (Product & { imageUrl: string })[] = [
  {
    id: 'destaque-latte-gelado',
    name: 'Latte Gelado',
    categories: ['gelados', 'destaques'],
    price: 6.50,
    description: 'Espresso marcante combinado a leite integral gelado e cubos de gelo puro.',
    imageUrl: 'https://i.imgur.com/2bmitC4.png',
  },
  {
    id: 'destaque-matcha-gelado',
    name: 'Matcha Gelado',
    categories: ['especiais', 'destaques'],
    price: 7.20,
    description: 'Matcha cerimonial batido com leite gelado, entregando notas herbais suaves e aveludadas.',
    imageUrl: 'https://i.imgur.com/OGd7JER.png',
  },
  {
    id: 'destaque-latte-morango',
    name: 'Latte de Morango',
    categories: ['especiais', 'destaques'],
    price: 6.90,
    description: 'Camadas visuais de compota artesanal de morango fresco, espresso suave e leite cremoso.',
    imageUrl: 'https://i.imgur.com/jAjc6b0.png',
  },
];

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({ onAddToCart }) => {
  return (
    <section
      id="destaques"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#F5EFEB] text-[#271811] overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 pb-6 border-b border-[#E2D2C2]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[#A56A44]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#A56A44]">
                Seleção Especial
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#271811] tracking-tight uppercase leading-none">
              Os Três Destaques
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6E5444] max-w-md mt-4 md:mt-0 font-medium leading-relaxed">
            Nossas criações autorais servidas no auge do sabor, com apresentação refinada e equilíbrio sensorial.
          </p>
        </div>

        {/* Grade com os 3 Cards de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {HIGHLIGHT_DRINKS.map((drink) => (
            <div
              key={drink.id}
              className="group relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 bg-white/70 hover:bg-white border border-[#E4D5C5] shadow-xs hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Espaço da Fotografia com Sombra de Contato */}
              <div className="relative w-full h-64 sm:h-72 flex items-center justify-center mb-6">
                {/* Sombra suave de contato */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-[#201309]/15 blur-lg rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                
                <img
                  src={drink.imageUrl}
                  alt={drink.name}
                  loading="lazy"
                  onError={(e) => {
                    const fallbackMap: Record<string, string> = {
                      'destaque-latte-gelado': '/hero-coffee.png',
                      'destaque-matcha-gelado': '/hero-matcha.png',
                      'destaque-latte-morango': '/hero-morango.png',
                    };
                    (e.target as HTMLImageElement).src = fallbackMap[drink.id] || '/hero-coffee.png';
                  }}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_16px_24px_rgba(35,20,10,0.20)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Informações Editoriais do Produto */}
              <div className="flex flex-col flex-1">
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#271811] tracking-tight">
                    {drink.name}
                  </h3>
                  <span className="text-lg sm:text-xl font-extrabold text-[#A56A44] shrink-0">
                    R$ {drink.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#6A5243] leading-relaxed mb-6 flex-1">
                  {drink.description}
                </p>

                {/* Botão de Adicionar à Sacola */}
                <button
                  type="button"
                  onClick={() => onAddToCart(drink)}
                  className="w-full py-3 px-4 rounded-xl bg-[#271811] hover:bg-[#A56A44] text-white text-xs sm:text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer active:scale-98 shadow-xs"
                >
                  <Plus size={16} strokeWidth={2.5} />
                  <span>Adicionar à Sacola</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
