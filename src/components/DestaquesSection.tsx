import React from 'react';
import { Product } from '../types';
import { Plus, Check } from 'lucide-react';

interface DestaquesSectionProps {
  onAddToCart: (product: Product) => void;
}

interface HighlightDrink {
  id: string;
  name: string;
  description: string;
  price: number;
  url: string;
  fallbackUrl: string;
}

const DESTAQUES: HighlightDrink[] = [
  {
    id: 'latte-gelado',
    name: 'Latte Gelado',
    description: 'Equilíbrio suave entre espresso intenso, leite fresco e cubos de gelo.',
    price: 6.50,
    url: 'https://i.imgur.com/2bmitC4.png',
    fallbackUrl: '/hero-coffee.png',
  },
  {
    id: 'matcha-gelado',
    name: 'Matcha Gelado',
    description: 'Matcha cerimonial vibrante harmonizado com leite gelado e textura aveludada.',
    price: 7.20,
    url: 'https://i.imgur.com/OGd7JER.png',
    fallbackUrl: '/hero-matcha.png',
  },
  {
    id: 'latte-morango',
    name: 'Latte de Morango',
    description: 'Camadas de compota de morango artesanal, espresso e leite cremoso.',
    price: 6.90,
    url: 'https://i.imgur.com/jAjc6b0.png',
    fallbackUrl: '/hero-morango.png',
  },
];

export const DestaquesSection: React.FC<DestaquesSectionProps> = ({
  onAddToCart,
}) => {
  const [addedId, setAddedId] = React.useState<string | null>(null);

  const handleAdd = (drink: HighlightDrink) => {
    onAddToCart({
      id: drink.id,
      name: drink.name,
      description: drink.description,
      price: drink.price,
      categories: ['Destaques da Casa'],
      imageKey: 'latte',
    });
    setAddedId(drink.id);
    setTimeout(() => setAddedId(null), 1600);
  };

  return (
    <section
      id="destaques"
      className="relative w-full bg-[#FAF8F5] py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-16"
    >
      <div className="max-w-[1360px] mx-auto">
        
        {/* Cabeçalho Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#A56A44]">
                03 / Seleção da Casa
              </span>
              <div className="h-px w-10 bg-[#A56A44]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#271811] tracking-tight">
              Os três destaques <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-3xl sm:text-4xl lg:text-5xl text-[#7E6A5B]">
                da Drinko.
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#746255] max-w-sm leading-relaxed">
            Três receitas emblemáticas que traduzem nossa busca por cremosidade, estética e sabor equilibrado.
          </p>
        </div>

        {/* Grid de 3 Cards Editoriais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {DESTAQUES.map((drink) => {
            const isAdded = addedId === drink.id;

            return (
              <div
                key={drink.id}
                className="group bg-[#F4EFEA] border border-[#E8DFC0] hover:border-[#D5C2A5] rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
              >
                {/* Espaço da Imagem com Isolamento Visual */}
                <div className="w-full aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center p-3 relative mb-6 rounded-2xl bg-gradient-to-b from-white/60 to-white/20">
                  <img
                    src={drink.url}
                    alt={drink.name}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = drink.fallbackUrl;
                    }}
                    className="w-full h-full object-contain filter drop-shadow-[0_16px_26px_rgba(35,20,10,0.18)] transition-transform duration-500 group-hover:scale-104"
                  />
                </div>

                {/* Informações Editoriais */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-black text-xl sm:text-2xl text-[#271811] tracking-tight">
                        {drink.name}
                      </h3>
                      <span className="font-black text-base sm:text-lg text-[#A56A44]">
                        R$ {drink.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#665447] mt-2 leading-relaxed">
                      {drink.description}
                    </p>
                  </div>

                  {/* Ação de Adicionar à Sacola */}
                  <div className="mt-6 pt-4 border-t border-[#E8DFD3] flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#8C7B6E] uppercase tracking-wider">
                      Preparo na Hora
                    </span>

                    <button
                      type="button"
                      onClick={() => handleAdd(drink)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-xs ${
                        isAdded
                          ? 'bg-[#3E6544] text-white'
                          : 'bg-[#A56A44] hover:bg-[#8B5633] text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={13} strokeWidth={2.5} />
                          <span>Adicionado</span>
                        </>
                      ) : (
                        <>
                          <Plus size={13} strokeWidth={2.5} />
                          <span>Adicionar à sacola</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
