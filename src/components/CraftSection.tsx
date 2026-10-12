import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface CraftImage {
  id: string;
  url: string;
  title: string;
}

const COLUMN_1: CraftImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80', title: 'Origem' },
  { id: '2', url: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80', title: 'Extração' },
  { id: '3', url: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80', title: 'Vapor' },
];

const COLUMN_2: CraftImage[] = [
  { id: '6', url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80', title: 'Identidade' },
  { id: '7', url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80', title: 'Precisão' },
  { id: '8', url: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=800&q=80', title: 'Atmosfera' },
];

export const CraftSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const col1Y = useTransform(scrollYProgress, [0, 1], ['0%', '-65%']);
  const col2Y = useTransform(scrollYProgress, [0, 1], ['-35%', '0%']);

  return (
    <section
      id="experiencia"
      ref={containerRef}
      className="relative w-full bg-[#16110E] text-[#F7F2EC]"
      style={{ height: '400vh' }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center px-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-[#D4A373]" />
              <span className="text-[9px] sm:text-xs uppercase tracking-[0.3em] font-bold text-[#D4A373]">A EXPERIÊNCIA DRINKO</span>
            </div>
            <h2 className="text-[2.1rem] sm:text-5xl lg:text-7xl font-black uppercase leading-[0.95] mb-4">
              Cada detalhe faz parte do preparo.
            </h2>
            <p className="text-sm sm:text-lg text-[#C8B8AB] leading-relaxed max-w-md">
              Do primeiro aroma ao último gole, cada detalhe transforma uma bebida em um momento para aproveitar sem pressa.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 lg:gap-6 h-[68vh] sm:h-[82vh] w-full">
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              <motion.div style={{ y: col1Y }} className="absolute top-0 left-0 w-full flex flex-col gap-4">
                {[...COLUMN_1, ...COLUMN_1].map((img, i) => (
                  <div key={`c1-${i}`} className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              <motion.div style={{ y: col2Y }} className="absolute top-0 left-0 w-full flex flex-col gap-4">
                {[...COLUMN_2, ...COLUMN_2].map((img, i) => (
                  <div key={`c2-${i}`} className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
