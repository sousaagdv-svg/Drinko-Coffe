import { ImageConfig } from '../types';

/**
 * Configuração centralizada para os caminhos de imagens do Drinko.
 */
export const imageConfig: ImageConfig = {
  hero: 'https://i.imgur.com/2bmitC4.png',
  espresso: 'https://i.imgur.com/1xyv7I1.jpeg',
  americano: 'https://i.imgur.com/KdmlFMf.jpeg',
  latte: 'https://i.imgur.com/Xe0JBUW.jpeg',
  macchiato: 'https://i.imgur.com/T0x43x1.jpeg',
  cafeIrlandes: 'https://i.imgur.com/fAAjOOg.jpeg',
  flatWhite: 'https://i.imgur.com/WFPFmrE.jpeg',
  lungo: 'https://i.imgur.com/VlWPqBf.jpeg',
  cafeVienense: 'https://i.imgur.com/Bn7URGA.jpeg',
  lattePromocional: '',
  coldBrew: '',
  caramelMacchiato: '',
  mochaBelga: '',
  'mocha-gelado': '/src/assets/images/mocha-gelado.png',
};

export interface HeroCarouselDrink {
  id: string;
  name: string;
  tagline: string;
  price: number;
  url: string;
  fallbackUrl: string;
  isTransparentPng: boolean;
}

/**
 * As três bebidas oficiais do carrossel 3D do Hero
 */
export const HERO_CAROUSEL_DRINKS: HeroCarouselDrink[] = [
  {
    id: 'latte-gelado',
    name: 'Latte Gelado',
    tagline: 'Espresso intenso, leite cremoso & gelo',
    price: 6.50,
    url: 'https://i.imgur.com/2bmitC4.png',
    fallbackUrl: '/hero-coffee.png',
    isTransparentPng: true,
  },
  {
    id: 'matcha-gelado',
    name: 'Matcha Gelado',
    tagline: 'Matcha cerimonial, leite gelado & textura aveludada',
    price: 7.20,
    url: 'https://i.imgur.com/fPXWZx5.png',
    fallbackUrl: '/hero-matcha.png',
    isTransparentPng: true,
  },
  {
    id: 'latte-morango',
    name: 'Latte de Morango',
    tagline: 'Compota artesanal de morango, espresso & leite fresco',
    price: 6.90,
    url: 'https://i.imgur.com/qKL36EO.png',
    fallbackUrl: '/hero-morango.png',
    isTransparentPng: true,
  },
];

/**
 * Função utilitária para verificar se a imagem real está configurada e disponível.
 */
export const hasCustomImage = (key: keyof ImageConfig): boolean => {
  return Boolean(imageConfig[key] && imageConfig[key].trim().length > 0);
};
