import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag as BagIcon, CheckCircle2 } from 'lucide-react';

interface ShoppingBagProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const ShoppingBag: React.FC<ShoppingBagProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderPlaced, setOrderPlaced] = React.useState(false);

  // Calcula subtotal
  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const taxaEntrega = items.length > 0 ? (subtotal > 25 ? 0 : 4.5) : 0;
  const total = subtotal + taxaEntrega;

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
      setOrderPlaced(false);
      onClose();
    }, 2800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col justify-between border-l border-[#EBE2D5]">
          
          {/* Topo da Sacola */}
          <div className="p-6 border-b border-[#EBE2D5] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#FAF5EE] flex items-center justify-center text-[#A56A44]">
                <BagIcon size={18} strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-[#271811] tracking-tight">
                  Minha Sacola
                </h3>
                <span className="text-xs text-[#7A6B60]">
                  {items.reduce((acc, item) => acc + item.quantity, 0)} {items.length === 1 ? 'item selecionado' : 'itens selecionados'}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#7A6B60] hover:text-[#271811] rounded-full hover:bg-[#F2ECE3] transition-colors cursor-pointer"
              aria-label="Fechar sacola"
            >
              <X size={20} />
            </button>
          </div>

          {/* Conteúdo / Lista de Produtos */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderPlaced ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 size={36} strokeWidth={2.2} />
                </div>
                <h4 className="text-xl font-black text-[#271811]">
                  Pedido confirmado
                </h4>
                <p className="text-xs text-[#6B5A4E] mt-2 max-w-xs leading-relaxed">
                  Seus cafés estão em preparo pelos baristas da casa. Obrigado pela preferência.
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 text-[#7E6E63]">
                <div className="w-16 h-16 rounded-full bg-[#EFE8DE] flex items-center justify-center mb-3 text-[#A56A44]">
                  <BagIcon size={26} strokeWidth={1.8} />
                </div>
                <h4 className="text-base font-bold text-[#271811]">
                  Sua sacola está vazia
                </h4>
                <p className="text-xs text-[#7E6E63] mt-1 max-w-[220px]">
                  Explore nosso cardápio e adicione os cafés especiais de sua preferência.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-5 text-xs font-bold text-[#A56A44] hover:underline"
                >
                  Voltar ao cardápio
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white border border-[#EBE2D5] rounded-xl p-3.5 flex items-center justify-between gap-3 shadow-2xs"
                >
                  {/* Foto/Placeholder Miniatura */}
                  <div className="w-14 h-16 bg-[#FAF7F2] rounded-lg border border-[#EDE4D7] flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-[#A56A44]">
                      Drinko
                    </span>
                  </div>

                  {/* Detalhes do Produto */}
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-sm text-[#271811] truncate">
                      {item.product.name}
                    </h5>
                    <span className="text-xs text-[#7A6B60] block mt-0.5 font-medium">
                      R$ {item.product.price.toFixed(2).replace('.', ',')} un.
                    </span>

                    {/* Controles de Quantidade */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="w-6 h-6 rounded-md bg-[#FAF7F2] hover:bg-[#EBE2D5] flex items-center justify-center text-[#554439] cursor-pointer"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus size={11} strokeWidth={2.5} />
                      </button>

                      <span className="text-xs font-bold text-[#271811] w-4 text-center">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="w-6 h-6 rounded-md bg-[#FAF7F2] hover:bg-[#EBE2D5] flex items-center justify-center text-[#554439] cursor-pointer"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus size={11} strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal do Item e Remover */}
                  <div className="flex flex-col items-end justify-between self-stretch">
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-[#B3A094] hover:text-rose-600 transition-colors p-1"
                      aria-label="Remover produto"
                    >
                      <Trash2 size={14} />
                    </button>

                    <span className="font-extrabold text-sm text-[#271811]">
                      R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Rodapé / Resumo de Preços */}
          {items.length > 0 && !orderPlaced && (
            <div className="p-6 bg-white border-t border-[#EBE2D5] space-y-3">
              <div className="space-y-1.5 text-xs text-[#6B5A4E]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#271811]">
                    R$ {subtotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Entrega expressa</span>
                  <span className="font-semibold text-[#271811]">
                    {taxaEntrega === 0 ? (
                      <span className="text-emerald-600 font-bold">Grátis</span>
                    ) : (
                      `R$ ${taxaEntrega.toFixed(2).replace('.', ',')}`
                    )}
                  </span>
                </div>
                {subtotal <= 25 && (
                  <p className="text-[10px] text-[#A56A44]">
                    Adicione mais R$ {(25 - subtotal).toFixed(2).replace('.', ',')} para entrega sem taxa adicional.
                  </p>
                )}
              </div>

              <div className="pt-2 border-t border-[#F2ECE3] flex justify-between items-baseline">
                <span className="text-sm font-bold text-[#271811]">Total</span>
                <span className="text-xl font-black text-[#271811]">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className="w-full bg-[#A56A44] hover:bg-[#8F5936] text-white py-3 rounded-xl font-bold text-sm tracking-wide shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-98"
              >
                Confirmar Pedido
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
