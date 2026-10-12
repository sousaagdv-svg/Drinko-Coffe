import React from 'react';
import { Heart, User, ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onNavigateMenu,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [favoriteCount, setFavoriteCount] = React.useState(0);
  const [isFavorited, setIsFavorited] = React.useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    setFavoriteCount((prev) => (isFavorited ? Math.max(0, prev - 1) : prev + 1));
  };

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-4 sm:px-8 lg:px-16 py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logotipo Drinko */}
        <div className="flex items-center">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('hero');
            }}
            className="text-2xl sm:text-3xl font-black tracking-tight text-white transition-opacity hover:opacity-90"
          >
            Drinko
          </a>
        </div>

        {/* Links centrais (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-sm font-medium text-white/95">
          <button
            onClick={() => handleScroll('hero')}
            className="transition-colors hover:text-white cursor-pointer"
          >
            Início
          </button>
          <button
            onClick={() => handleScroll('apresentacao')}
            className="transition-colors hover:text-white cursor-pointer"
          >
            Apresentação
          </button>
          <button
            onClick={() => handleScroll('destaques')}
            className="transition-colors hover:text-white cursor-pointer"
          >
            Destaques
          </button>
          <button
            onClick={() => {
              onNavigateMenu();
              handleScroll('cardapio');
            }}
            className="transition-colors hover:text-white cursor-pointer"
          >
            Cardápio
          </button>
          <button
            onClick={() => handleScroll('visite')}
            className="transition-colors hover:text-white cursor-pointer"
          >
            Visite
          </button>
        </nav>

        {/* Ações do canto direito com espaçamento refinado no mobile */}
        <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-5 text-white">
          {/* Botão de Favorito */}
          <button
            type="button"
            onClick={toggleFavorite}
            aria-label="Meus favoritos"
            className="p-1 sm:p-1.5 transition-transform hover:scale-105 active:scale-95 text-white/90 hover:text-white relative cursor-pointer"
            title="Favoritar cafeteria"
          >
            <Heart
              size={21}
              strokeWidth={1.8}
              className={isFavorited ? 'fill-rose-300 stroke-rose-300' : ''}
            />
            {favoriteCount > 0 && (
              <span className="absolute -top-1 -right-1.5 bg-rose-400 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {favoriteCount}
              </span>
            )}
          </button>

          {/* Botão de Perfil */}
          <button
            type="button"
            aria-label="Perfil do usuário"
            className="p-1.5 transition-transform hover:scale-105 active:scale-95 text-white/90 hover:text-white cursor-pointer"
            title="Minha conta Drinko"
          >
            <User size={21} strokeWidth={1.8} />
          </button>

          {/* Botão da Sacola */}
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Sacola de pedidos com ${cartCount} itens`}
            className="p-1.5 transition-transform hover:scale-105 active:scale-95 text-white/90 hover:text-white relative cursor-pointer"
            title="Ver sacola"
          >
            <ShoppingBag size={21} strokeWidth={1.8} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1.5 bg-[#A56A44] border border-white text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Toggle Menu Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-white/90 hover:text-white cursor-pointer"
            aria-label="Abrir menu mobile"
          >
            {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-[#271811]/95 backdrop-blur-md rounded-2xl p-5 text-white shadow-xl border border-white/10 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-4 text-base font-medium">
            <button
              onClick={() => handleScroll('hero')}
              className="text-left py-1 hover:text-[#D5C4A1]"
            >
              Início
            </button>
            <button
              onClick={() => handleScroll('apresentacao')}
              className="text-left py-1 hover:text-[#D5C4A1]"
            >
              Apresentação
            </button>
            <button
              onClick={() => handleScroll('destaques')}
              className="text-left py-1 hover:text-[#D5C4A1]"
            >
              Três Destaques
            </button>
            <button
              onClick={() => {
                onNavigateMenu();
                handleScroll('cardapio');
              }}
              className="text-left py-1 hover:text-[#D5C4A1]"
            >
              Cardápio Completo
            </button>
            <button
              onClick={() => handleScroll('faq')}
              className="text-left py-1 hover:text-[#D5C4A1]"
            >
              Dúvidas Frequentes
            </button>
            <button
              onClick={() => handleScroll('visite')}
              className="text-left py-1 hover:text-[#D5C4A1]"
            >
              Visite a Loja
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="text-left py-1 text-[#D5C4A1] flex items-center justify-between border-t border-white/15 pt-3"
            >
              <span>Minha Sacola</span>
              <span className="bg-[#A56A44] text-xs px-2 py-0.5 rounded-full text-white font-bold">
                {cartCount} {cartCount === 1 ? 'item' : 'itens'}
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
