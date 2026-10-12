import { Product } from '../types';

export const CATEGORIES = [
  'Cafés gelados',
  'Cafés com leite',
  'Cafés clássicos',
  'Cafés especiais',
  'Cafés doces',
] as const;

export const INITIAL_PRODUCTS: Product[] = [
  // Fileira 1 da referência
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'café intenso e encorpado',
    price: 5.70,
    categories: ['Cafés clássicos', 'Cafés especiais'],
    imageKey: 'espresso',
    isInitialEight: true,
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'espresso com água quente',
    price: 4.50,
    categories: ['Cafés clássicos'],
    imageKey: 'americano',
    isInitialEight: true,
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'espresso com leite cremoso',
    price: 4.30,
    categories: ['Cafés com leite', 'Cafés clássicos'],
    imageKey: 'latte',
    isInitialEight: true,
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    description: 'espresso com leve espuma de leite',
    price: 5.50,
    categories: ['Cafés com leite', 'Cafés especiais'],
    imageKey: 'macchiato',
    isInitialEight: true,
  },

  // Fileira 2 da referência
  {
    id: 'cafe-irlandes',
    name: 'Café Irlandês',
    description: 'café com leite e creme',
    price: 5.40,
    categories: ['Cafés especiais', 'Cafés doces'],
    imageKey: 'cafeIrlandes',
    isInitialEight: true,
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    description: 'espresso com fina camada de leite',
    price: 4.20,
    categories: ['Cafés com leite', 'Cafés clássicos'],
    imageKey: 'flatWhite',
    isInitialEight: true,
  },
  {
    id: 'lungo',
    name: 'Lungo',
    description: 'espresso extraído com mais água',
    price: 4.80,
    categories: ['Cafés clássicos'],
    imageKey: 'lungo',
    isInitialEight: true,
  },
  {
    id: 'cafe-vienense',
    name: 'Café Vienense',
    description: 'espresso com chantilly',
    price: 5.20,
    categories: ['Cafés especiais', 'Cafés doces'],
    imageKey: 'cafeVienense',
    isInitialEight: true,
  },

  // Bebidas adicionais para filtros e botão "Ver mais"
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    description: 'café maturado a frio por 18h',
    price: 6.20,
    categories: ['Cafés gelados', 'Cafés especiais'],
    imageKey: 'coldBrew',
    isInitialEight: false,
  },
  {
    id: 'iced-caramel',
    name: 'Caramel Gelado',
    description: 'espresso, leite gelado e caramelo',
    price: 6.80,
    categories: ['Cafés gelados', 'Cafés doces'],
    imageKey: 'caramelMacchiato',
    isInitialEight: false,
  },
  {
    id: 'mocha-gelado',
    name: 'Mocha Gelado',
    description: 'espresso, calda de chocolate e leite gelado',
    price: 7.00,
    categories: ['Cafés gelados', 'Cafés doces'],
    imageKey: 'mocha-gelado',
    isInitialEight: false,
  },
  {
    id: 'affogato',
    name: 'Affogato',
    description: 'gelato artesanal com espresso duplo',
    price: 7.00,
    categories: ['Cafés doces', 'Cafés especiais'],
    imageKey: 'affogato',
    isInitialEight: false,
  },
];

export const PROMOTIONAL_PRODUCT: Product = {
  id: 'mocha-gelado',
  name: 'Mocha Gelado',
  description: 'Uma combinação irresistível de espresso intenso, calda de chocolate belga e leite gelado, servido com gelo para um frescor inigualável.',
  price: 7.00,
  categories: ['Cafés gelados', 'Cafés doces'],
  imageKey: 'mocha-gelado',
};
