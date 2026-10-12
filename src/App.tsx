import React, { useState } from 'react';
import { Product, CartItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CraftSection } from './components/CraftSection';
import { HighlightsSection } from './components/HighlightsSection';
import { MenuSection } from './components/MenuSection';
import { PromotionSection } from './components/PromotionSection';
import { MomentSection } from './components/MomentSection';
import { FaqSection } from './components/FaqSection';
import { VisitSection } from './components/VisitSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ShoppingBag } from './components/ShoppingBag';
import { Check } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Quantidade total de itens na sacola
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Adicionar produto à sacola
  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    // Feedback discreto
    setToastMessage(`${product.name} adicionado à sacola`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  // Atualizar quantidade
  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  // Remover produto
  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Limpar sacola
  const handleClearCart = () => {
    setCart([]);
  };

  const handleNavigateMenu = () => {
    const el = document.getElementById('cardapio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#271811] flex flex-col font-sans selection:bg-[#A56A44] selection:text-white relative">
      {/* Header Minimalista sobreposto ao Hero */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateMenu={handleNavigateMenu}
      />

      <main className="flex-1">
        {/* HERO: REGRA ABSOLUTA — PRESERVADO INTACTO */}
        <Hero />

        {/* SEÇÃO 1: Apresentação da Drinko (Editorial Claro) */}
        <AboutSection />

        {/* SEÇÃO 2: A Experiência por Trás de Cada Bebida (Contraste Escuro) */}
        <CraftSection />

        {/* SEÇÃO 3: Os Três Destaques da Drinko (3 Cards Oficiais com os 3 Drinks) */}
        <HighlightsSection onAddToCart={handleAddToCart} />

        {/* Cardápio Completo com Filtros e Categorias */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onOpenCart={() => setIsCartOpen(true)}
          cartCount={totalCartCount}
        />

        {/* Seção Promocional do Latte Rosa */}
        <PromotionSection onAddToCart={handleAddToCart} />

        {/* SEÇÃO 4: Um Momento na Drinko (Fotografia Panorâmica & Citação) */}
        <MomentSection />

        {/* SEÇÃO 5: Perguntas Frequentes (Acordeão Acessível com 5 Perguntas) */}
        <FaqSection />

        {/* SEÇÃO 6: Visite a Drinko (Localização, Horário & Mapa Arquitetônico) */}
        <VisitSection />

        {/* SEÇÃO 7: Avaliações do Google (Arquitetura Pronta sem Dados Fictícios) */}
        <ReviewsSection />
      </main>

      {/* SEÇÃO 8: Rodapé Sofisticado Minimalista */}
      <Footer />

      {/* Gaveta Lateral / Modal da Sacola de Pedidos */}
      <ShoppingBag
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Toast Feedback de Adição */}
      {toastMessage && (
        <aside
          aria-live="polite"
          className="fixed bottom-6 right-6 z-40 bg-[#271811] text-white px-4 py-2.5 rounded-xl shadow-lg border border-white/10 flex items-center gap-2 text-xs font-semibold animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="w-4 h-4 rounded-full bg-[#A56A44] flex items-center justify-center text-white shrink-0">
            <Check size={10} strokeWidth={3} />
          </div>
          <span>{toastMessage}</span>
        </aside>
      )}
    </div>
  );
}
