export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  badge?: string;
  description: string;
  tags: string[];
}

export interface CartItem extends Product {
  qty: number;
}
