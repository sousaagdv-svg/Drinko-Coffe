import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_CAROUSEL_DRINKS } from '../config/imageConfig';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Controle de transição em andamento para evitar conflitos de clique/swipe sucessivos
  const isTransitioningRef = useRef(false);

  // Estado do gesto touch no celular
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchSwiped = useRef<boolean>(false);
  const SWIPE_THRESHOLD = 40; // Limiar calibrado em pixels para swipe confortável

  // Pré-carregamento das 3 imagens
  useEffect(() => {
    HERO_CAROUSEL_DRINKS.forEach((drink) => {
      const primaryImg = new Image();
      primaryImg.src = drink.url;
      const fallbackImg = new Image();
      fallbackImg.src = drink.fallbackUrl;
    });
  }, []);

  // Detecção de viewport mobile para parâmetros refinados de profundidade
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preferência de movimento reduzido
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const totalDrinks = HERO_CAROUSEL_DRINKS.length;

  const handlePrev = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setCurrentIndex((prev) => (prev - 1 + totalDrinks) % totalDrinks);
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 450);
  }, [totalDrinks]);

  const handleNext = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setCurrentIndex((prev) => (prev + 1) % totalDrinks);
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 450);
  }, [totalDrinks]);

  // Gestos Touch no Celular (Swipe horizontal fluido preservando rolagem vertical nativa)
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement | null;
    if (target && target.closest('button, a')) return;

    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    touchSwiped.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null || touchSwiped.current) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    // Se o movimento for predominantemente vertical, não intercepta (permite scroll natural)
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      return;
    }

    // Se o movimento horizontal ultrapassar o limiar
    if (Math.abs(deltaX) >= SWIPE_THRESHOLD) {
      touchSwiped.current = true;
      if (deltaX < 0) {
        handleNext(); // Swipe para esquerda -> próximo
      } else {
        handlePrev(); // Swipe para direita -> anterior
      }
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
    touchStartY.current = null;
    touchSwiped.current = false;
  };

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  const handleImageError = (drinkId: string) => {
    setImageErrors((prev) => ({ ...prev, [drinkId]: true }));
  };

  // Identificação do slot de cada bebida
  const getSlot = (index: number) => {
    const diff = (index - currentIndex + totalDrinks) % totalDrinks;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    return 'left';
  };

  // Configuração 3D adaptativa (Diferenciada para Mobile e Desktop)
  const slotConfigs = {
    center: {
      x: '0%',
      scale: 1,
      opacity: 1,
      blur: 'blur(0px)',
      zIndex: 30,
    },
    left: {
      x: isMobile ? '-74%' : '-62%',
      scale: isMobile ? 0.60 : 0.72,
      opacity: isMobile ? 0.45 : 0.58,
      blur: isMobile ? 'blur(2px)' : 'blur(1.5px)',
      zIndex: 15,
    },
    right: {
      x: isMobile ? '74%' : '62%',
      scale: isMobile ? 0.60 : 0.72,
      opacity: isMobile ? 0.45 : 0.58,
      blur: isMobile ? 'blur(2px)' : 'blur(1.5px)',
      zIndex: 15,
    },
  };

  const activeDrink = HERO_CAROUSEL_DRINKS[currentIndex];

  return (
    <section
      id="hero"
      ref={containerRef}
      tabIndex={0}
      aria-label="Carrossel de cafés especiais Drinko"
      className="relative w-full min-h-[100svh] lg:min-h-[900px] xl:min-h-[960px] flex flex-col justify-between lg:justify-center items-center overflow-hidden select-none outline-none"
      style={{
        background: `
          radial-gradient(ellipse 95% 85% at 80% 20%, #E0D3C1 0%, rgba(214, 198, 175, 0.45) 55%, transparent 80%),
          radial-gradient(circle at 18% 78%, rgba(186, 160, 130, 0.35) 0%, rgba(200, 180, 155, 0) 65%),
          linear-gradient(135deg, #D4C3AC 0%, #C8B69E 48%, #B8A387 100%)
        `,
      }}
    >
      {/* Camada 0: Iluminação Atmosférica de Estúdio */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-bl from-white/22 via-transparent to-black/15 mix-blend-soft-light" />
        <div
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Camada 1 (DESKTOP): TIPOGRAFIA MONUMENTAL ATRÁS DO CARROSSEL (Preservada intacta) */}
      <div className="absolute inset-x-0 top-0 bottom-0 z-10 hidden lg:flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-[1600px] mx-auto px-8 lg:px-12 flex flex-row items-center justify-between">
          
          {/* Lado Esquerdo: "PEÇA" */}
          <div className="w-full lg:flex-1 flex justify-end items-center text-right pr-6 xl:pr-12 shrink-0">
            <h1 className="text-white/95 font-black tracking-[-0.035em] text-[7.8rem] xl:text-[9.8rem] 2xl:text-[11.8rem] leading-none uppercase drop-shadow-[0_4px_20px_rgba(39,24,17,0.16)]">
              PEÇA
            </h1>
          </div>

          {/* Espaço virtual central reservado ao carrossel */}
          <div className="w-[320px] xl:w-[420px] 2xl:w-[480px] shrink-0" />

          {/* Lado Direito: "SEU CAFÉ" em linha única + "Bem-vindo" */}
          <div className="w-full lg:flex-[1.4] xl:flex-[1.5] 2xl:flex-[1.6] flex justify-start items-center text-left pl-6 xl:pl-12 min-w-0">
            <div className="relative w-full">
              <h1 className="text-white/95 font-black tracking-[-0.035em] leading-none uppercase text-[5.4rem] xl:text-[7rem] 2xl:text-[8.6rem] whitespace-nowrap drop-shadow-[0_4px_20px_rgba(39,24,17,0.16)]">
                SEU CAFÉ
              </h1>

              <div className="w-full flex justify-end pr-4 xl:pr-8 2xl:pr-12 absolute top-[88%] right-4">
                <span className="font-serif italic text-[3.6rem] xl:text-[4.6rem] 2xl:text-[5.6rem] text-white/90 tracking-normal drop-shadow-[0_2px_12px_rgba(39,24,17,0.14)] leading-none">
                  Bem-vindo
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Camada 1 (MOBILE ESPECÍFICO): TÍTULO EDITORIAL DEDICADO NO TOPO */}
      <div className="lg:hidden w-full text-center px-4 pt-20 sm:pt-24 pb-2 z-20 flex flex-col items-center">
        <div className="inline-flex flex-col items-center">
          {/* Título unificado em linha elegante, sem sobrepor o produto */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-white font-black text-3xl sm:text-4xl tracking-tight uppercase leading-none drop-shadow-md">
              PEÇA
            </span>
            <span className="text-white font-black text-3xl sm:text-4xl tracking-tight uppercase leading-none drop-shadow-md">
              SEU CAFÉ
            </span>
          </div>

          {/* "Bem-vindo" em itálico serifado, harmônico e proporcional */}
          <span className="font-serif italic text-2xl sm:text-3xl text-white/95 tracking-wide mt-1 drop-shadow-xs">
            Bem-vindo
          </span>
        </div>
      </div>

      {/* Camada 2: PALCO DO CARROSSEL 3D (Otimizado para Mobile e Desktop) */}
      <div className="relative z-20 w-full max-w-[1380px] mx-auto px-2 sm:px-4 flex flex-col items-center justify-center my-auto">
        
        {/* Palco do Carrossel com touch-action pan-y */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          style={{ touchAction: 'pan-y' }}
          className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[530px] xl:h-[580px] flex items-center justify-center select-none"
        >
          
          {/* As 3 Bebidas com Posicionamento 3D */}
          {HERO_CAROUSEL_DRINKS.map((drink, index) => {
            const slot = getSlot(index);
            const config = slotConfigs[slot];
            const isCenter = slot === 'center';
            const hasError = imageErrors[drink.id];
            const imgSrc = hasError ? drink.fallbackUrl : drink.url;

            return (
              <motion.div
                key={drink.id}
                onClick={() => {
                  if (slot === 'left') handlePrev();
                  if (slot === 'right') handleNext();
                }}
                animate={{
                  x: config.x,
                  scale: config.scale,
                  opacity: config.opacity,
                  filter: config.blur,
                  zIndex: config.zIndex,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.1 : 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  position: 'absolute',
                  cursor: isCenter ? 'default' : 'pointer',
                }}
                className={`w-[240px] sm:w-[320px] md:w-[420px] lg:w-[500px] xl:w-[560px] max-h-[96%] flex flex-col items-center justify-center transition-shadow duration-300 ${
                  !isCenter ? 'hover:opacity-85' : ''
                }`}
                aria-hidden={!isCenter}
                aria-label={`${drink.name} - ${drink.tagline}`}
              >
                {/* Sombra de Contato Fiel sob a Bebida Central */}
                {isCenter && (
                  <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-6 sm:h-7 bg-[#201309]/28 blur-xl rounded-full pointer-events-none" />
                )}

                {/* Imagem Transparente Isolada (Sem caixas ou cards) */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={imgSrc}
                    alt={drink.name}
                    loading="eager"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    onError={() => handleImageError(drink.id)}
                    className="max-w-full max-h-[270px] sm:max-h-[350px] md:max-h-[430px] lg:max-h-[500px] xl:max-h-[540px] object-contain filter drop-shadow-[0_20px_32px_rgba(30,18,10,0.25)] transition-all duration-300 pointer-events-none select-none"
                  />
                </div>
              </motion.div>
            );
          })}

          {/* Botões de Navegação Lateral Acessíveis (Otimizados em tamanho no Mobile) */}
          <div className="absolute inset-x-1 sm:inset-x-6 lg:inset-x-16 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none z-40">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Bebida anterior"
              className="pointer-events-auto w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white/80 hover:bg-[#A56A44] text-[#271811] hover:text-white backdrop-blur-md border border-white/40 shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 hover:scale-105"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" strokeWidth={2.2} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Próxima bebida"
              className="pointer-events-auto w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white/80 hover:bg-[#A56A44] text-[#271811] hover:text-white backdrop-blur-md border border-white/40 shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 hover:scale-105"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" strokeWidth={2.2} />
            </button>
          </div>

        </div>
      </div>

      {/* Camada 3: INFORMAÇÕES DA BEBIDA ATIVA & INDICADORES DE PAGINAÇÃO */}
      <div className="w-full z-30 flex flex-col items-center text-center px-4 pb-6 sm:pb-8 lg:pb-12 pt-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDrink.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              <span className="text-lg sm:text-xl md:text-2xl font-black text-[#271811] tracking-tight">
                {activeDrink.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A56A44]" />
              <span className="text-base sm:text-lg font-extrabold text-[#A56A44]">
                R$ {activeDrink.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4A3426] mt-0.5 sm:mt-1 max-w-[280px] sm:max-w-md font-medium leading-tight sm:leading-normal">
              {activeDrink.tagline}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores de Paginação Clicáveis */}
        <div className="flex items-center gap-2 mt-2.5 sm:mt-3.5">
          {HERO_CAROUSEL_DRINKS.map((drink, idx) => (
            <button
              key={drink.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ver ${drink.name}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 sm:w-7 h-1.5 sm:h-2 bg-[#A56A44]'
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#A56A44]/35 hover:bg-[#A56A44]/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Transição Suave para a Seção de Cardápio */}
      <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-10 bg-gradient-to-b from-transparent to-[#FAF8F5]/35 pointer-events-none z-30" />
    </section>
  );
};
