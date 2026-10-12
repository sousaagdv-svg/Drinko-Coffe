import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface GalleryItemProps {
  product: Product;
  index: number;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
  onAddToCart: (product: Product) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ product, index, hoveredIndex, onHover, onAddToCart }) => {
  const isHovered = hoveredIndex === index;
  const isExpanded = hoveredIndex !== null && !isHovered;

  return (
    <motion.div
      className="relative cursor-pointer overflow-hidden rounded-3xl flex-shrink-0 flex flex-col justify-end p-6 sm:p-8"
      initial={{ flex: 1 }}
      animate={{
        flex: isHovered ? 3 : isExpanded ? 0.5 : 1,
      }}
      transition={{ duration: 0.5, ease: 'circOut' }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onHover(index)}
    >
      {/* Imagem de Fundo com Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={`/${product.imageKey}.jpg`} // Assumindo padrão de nomeação baseado no imageKey
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#271811]/90 to-transparent" />
      </div>

      {/* Informações que aparecem ao expandir */}
      <motion.div
        className="relative z-10 text-white"
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <h3 className="text-2xl font-black uppercase tracking-tight mb-1">{product.name}</h3>
        <p className="text-sm text-white/80 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-extrabold text-xl">R$ {product.price.toFixed(2).replace('.', ',')}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-[#A56A44] hover:bg-[#8F5936] px-4 py-2 rounded-full text-xs font-semibold"
          >
            Adicionar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface GallerySectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ products, onAddToCart }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section className="w-full h-[600px] py-20 px-6 sm:px-12 bg-[#FAF8F5]">
      <div className="max-w-[1440px] mx-auto flex h-full gap-4">
        {products.slice(0, 5).map((product, index) => (
          <GalleryItem
            key={product.id}
            product={product}
            index={index}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};
