import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { INITIAL_PRODUCTS } from '../data/products';
import { imageConfig } from '../config/imageConfig';
import { ShoppingBag, Plus } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (product: Product) => void;
  onOpenCart: () => void;
  cartCount: number;
}

const GalleryItem: React.FC<{
  product: Product;
  index: number;
  activeId: string | null;
  onActive: (id: string | null) => void;
  onAddToCart: (product: Product) => void;
}> = ({ product, index, activeId, onActive, onAddToCart }) => {
  const isActive = activeId === product.id;
  const imageUrl = product.imageKey ? ((imageConfig as any)[product.imageKey] || `/${product.imageKey}.png` || `/${product.imageKey}.jpg` || '/hero-coffee.png') : '/hero-coffee.png';

  return (
    <motion.div
      layout
      className={`relative cursor-pointer overflow-hidden rounded-[1.75rem] flex-shrink-0 group ${
        isActive ? 'flex-[2.5]' : 'flex-[1]'
      } min-h-[460px] transition-all duration-500 ease-out`}
      onMouseEnter={() => window.innerWidth > 1024 && onActive(product.id)}
      onMouseLeave={() => window.innerWidth > 1024 && onActive(null)}
      onClick={() => onActive(isActive ? null : product.id)}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-60'
        }`} />
      </div>

      <AnimatePresence>
        {!isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <span className="whitespace-nowrap -rotate-90 text-white/40 uppercase tracking-[0.4em] font-black text-xs sm:text-sm">
              {product.name}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 z-10">
        <motion.div
          animate={{ 
            y: isActive ? 0 : 20,
            opacity: isActive ? 1 : 0 
          }}
          transition={{ duration: 0.4 }}
          className={isActive ? 'block' : 'hidden'}
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-1.5">
                {product.name}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-white/70 max-w-xs line-clamp-2">
                {product.description}
              </p>
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-black text-[#D4A373] whitespace-nowrap shrink-0">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-white hover:bg-[#D4A373] text-[#271811] hover:text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-widest flex items-center gap-2 transition-all active:scale-95 shadow-xl cursor-pointer"
          >
            <Plus size={18} strokeWidth={3} />
            Adicionar à Sacola
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onOpenCart,
  cartCount,
}) => {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const galleryProducts = React.useMemo(() => {
    return INITIAL_PRODUCTS.slice(0, 8);
  }, []);

  // Detector de card centralizado no scroll mobile
  const handleScroll = () => {
    if (window.innerWidth >= 1024 || !scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll('.mobile-card');
    let closestCardId: string | null = null;
    let minDistance = Infinity;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const viewportCenter = window.innerWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);

      if (distance < minDistance && distance < rect.width * 0.75) {
        minDistance = distance;
        closestCardId = card.getAttribute('data-id');
      }
    });

    if (closestCardId !== activeId) {
      setActiveId(closestCardId);
    }
  };

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [activeId]);

  return (
    <section id="cardapio" className="w-full bg-[#FAF8F5] py-20 sm:py-32 px-4 sm:px-12 overflow-hidden">
      <div className="max-w-[1520px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#A56A44]" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#A56A44]">
                Exploração Sensorial
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-[#271811] leading-none tracking-tighter uppercase">
              Nosso Cardápio
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenCart}
            className="group bg-[#271811] hover:bg-[#A56A44] text-white px-8 py-4 rounded-2xl text-sm font-bold flex items-center gap-3 shadow-2xl transition-all cursor-pointer active:scale-95 self-start sm:self-auto"
          >
            <ShoppingBag size={18} strokeWidth={2.5} className="transition-transform group-hover:-rotate-12" />
            <span>Minha sacola</span>
            {cartCount > 0 && (
              <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full font-black">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <div className="hidden lg:flex flex-row gap-3 w-full">
          {galleryProducts.map((product, index) => (
            <GalleryItem
              key={product.id}
              product={product}
              index={index}
              activeId={activeId}
              onActive={setActiveId}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div 
          ref={scrollContainerRef}
          className="lg:hidden flex flex-row gap-4 w-full overflow-x-auto snap-x snap-mandatory pb-6 px-2 scrollbar-hide"
        >
          {galleryProducts.map((product) => {
            const isActive = activeId === product.id;
            const imageUrl = product.imageKey ? ((imageConfig as any)[product.imageKey] || `/${product.imageKey}.png` || `/${product.imageKey}.jpg` || '/hero-coffee.png') : '/hero-coffee.png';

            return (
              <motion.div
                key={product.id}
                data-id={product.id}
                className="mobile-card snap-center shrink-0 w-[85vw] sm:w-[60vw] relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg border border-[#EBE3DC] transition-all duration-300"
                onClick={() => setActiveId(isActive ? null : product.id)}
              >
                <div className="p-4 flex flex-col gap-3">
                  <div className={`w-full ${isActive ? 'h-52' : 'h-40'} rounded-xl overflow-hidden relative shadow-md transition-all duration-500`}>
                    <img src={imageUrl} alt={product.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-white font-black text-base uppercase drop-shadow-sm">
                      {product.name}
                    </span>
                  </div>
                  
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col gap-2"
                    >
                      <p className="text-xs text-[#5A382E] leading-relaxed font-medium">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-lg font-black text-[#271811]">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                          }}
                          className="bg-[#A56A44] hover:bg-[#8F5936] text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-md active:scale-95 cursor-pointer"
                        >
                          <Plus size={15} strokeWidth={3} />
                          Adicionar
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[#8C7362] gap-4">
          <p className="text-sm font-medium">
            {window.innerWidth > 1024 ? 'Pressione para expandir os detalhes de cada bebida.' : 'Deslize horizontalmente para explorar as bebidas.'}
          </p>
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
            <span>Grãos Selecionados</span>
            <span className="w-1 h-1 rounded-full bg-[#D4A373]" />
            <span>Preparo Artesanal</span>
          </div>
        </div>

      </div>
    </section>
  );
};
