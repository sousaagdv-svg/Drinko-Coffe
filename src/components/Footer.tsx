import React from 'react';
import { Instagram, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#16110E] text-[#E8DED4] pt-16 sm:pt-20 pb-12 border-t border-white/10 select-none">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Bloco Superior do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-white/10">
          
          {/* Coluna da Marca (4 colunas) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('hero');
                }}
                className="text-3xl font-black text-white tracking-tight uppercase inline-block mb-3"
              >
                Drinko
              </a>
              <p className="text-sm text-[#A89688] leading-relaxed max-w-sm mb-6">
                Cafeteria contemporânea focada em lattes gelados autorais, extração precisa de espresso e ambiente acolhedor.
              </p>
            </div>

            {/* Redes Sociais Oficiais */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Drinko Cafeteria"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A56A44] text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
                title="Siga no Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Canal de atendimento no WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A56A44] text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
                title="Atendimento via WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Coluna de Navegação (3 colunas) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4A373] mb-5">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm text-[#C8B7A9]">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('apresentacao')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Apresentação
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('experiencia')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Experiência Artesanal
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('destaques')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Três Destaques
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('cardapio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cardápio Completo
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Perguntas Frequentes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('visite')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Visite a Cafeteria
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna de Horários e Endereço (3 colunas) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4A373] mb-5">
              Atendimento
            </h4>
            <div className="space-y-4 text-sm text-[#C8B7A9]">
              <div>
                <span className="block text-white font-semibold mb-0.5">Endereço</span>
                <span className="text-xs text-[#9B8779]">
                  Em fase de confirmação oficial de ponto para abertura.
                </span>
              </div>

              <div>
                <span className="block text-white font-semibold mb-0.5">Horários</span>
                <span className="text-xs text-[#9B8779]">
                  Serão anunciados na data de inauguração.
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Voltar ao Topo (2 colunas) */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-between">
            <button
              type="button"
              onClick={() => scrollTo('hero')}
              className="p-3 rounded-full bg-white/10 hover:bg-[#A56A44] text-white transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
              title="Voltar ao início"
            >
              <span>Topo</span>
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Linha Final de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7667]">
          <p>© {new Date().getFullYear()} Drinko Cafeteria. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Privacidade & Termos</span>
            <span>Feito com cuidado e precisão</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
