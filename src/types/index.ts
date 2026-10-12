export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  categories: string[];
  imageKey?: keyof ImageConfig;
  imageUrl?: string;
  isInitialEight?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ImageConfig {
  hero: string;
  espresso: string;
  americano: string;
  latte: string;
  macchiato: string;
  cafeIrlandes: string;
  flatWhite: string;
  lungo: string;
  cafeVienense: string;
  lattePromocional: string;
  [key: string]: string;
}
