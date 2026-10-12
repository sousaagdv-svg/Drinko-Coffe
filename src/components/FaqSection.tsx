import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isConfigurableNotice?: boolean;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'onde-fica',
    question: 'Onde fica a Drinko?',
    answer:
      'Nosso endereço físico oficial de atendimento está em fase final de preparação de ponto para a inauguração. Assim que o local for anunciado, a rota completa e o mapa oficial serão disponibilizados nesta página e em nossos canais de comunicação.',
    isConfigurableNotice: true,
  },
  {
    id: 'horario-funcionamento',
    question: 'Qual é o horário de funcionamento?',
    answer:
      'A programação detalhada dos dias e horários de funcionamento para atendimento presencial e retiradas será divulgada juntamente com a data de abertura oficial do espaço.',
    isConfigurableNotice: true,
  },
  {
    id: 'bebidas-disponiveis',
    question: 'Quais bebidas estão disponíveis?',
    answer:
      'Nosso menu conta com lattes gelados autorais (Latte Gelado clássico, Matcha Gelado cerimonial e Latte de Morango artesanal), além de cafés espressos tradicionais, bebidas quentes vaporizadas e opções especiais para cada momento do seu dia.',
  },
  {
    id: 'retirar-no-local',
    question: 'Posso pedir para retirar no local?',
    answer:
      'Sim. O serviço de retirada rápida (takeout) foi projetado para que você possa montar sua sacola no site e retirar sua bebida fresca diretamente no balcão sem filas.',
  },
  {
    id: 'como-contatar',
    question: 'Como posso entrar em contato?',
    answer:
      'Você pode falar com nossa equipe pelo canal oficial de atendimento via WhatsApp ou enviar uma mensagem direta no nosso Instagram oficial (links disponíveis na seção de rodapé deste site).',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('onde-fica');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#F8F5F0] text-[#271811] overflow-hidden"
    >
      <div className="max-w-[960px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#A56A44]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#A56A44]">
              Tire Suas Dúvidas
            </span>
            <span className="w-6 h-px bg-[#A56A44]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#271811] tracking-tight uppercase leading-tight mb-4">
            Perguntas Frequentes
          </h2>

          <p className="text-sm sm:text-base text-[#6E5545] font-medium max-w-lg mx-auto">
            Informações essenciais sobre nosso atendimento, bebidas autorais e funcionamento.
          </p>
        </div>

        {/* Acordeão Acessível */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-[#E3D4C4] bg-white/70 overflow-hidden transition-all duration-300 hover:border-[#A56A44]/50 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full py-5 sm:py-6 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="text-base sm:text-lg font-bold text-[#271811] tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#F3ECE4] text-[#A56A44] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#A56A44] text-white' : ''
                    }`}
                  >
                    <ChevronDown size={18} strokeWidth={2.2} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#5A4537] leading-relaxed border-t border-[#F0E6DC]/80 animate-in fade-in duration-200"
                  >
                    <p>{item.answer}</p>
                    {item.isConfigurableNotice && (
                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#8B6E5A] bg-[#F4EDE5] px-3 py-1 rounded-full font-medium">
                        <HelpCircle size={13} />
                        <span>Espaço configurável: dados oficiais serão preenchidos antes da inauguração.</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
