export type actionFunction = (prevState: any, formData: FormData) => Promise<{ message: string }>;

import { Product } from "@/lib/generated/prisma/client";

export type CartItemWithProduct = {
  id: string;
  productId: string;
  cartId: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  product: Product;
};

export type CartItem = {
  productId: string;
  image: string;
  title: string;
  price: string;
  amount: number;
  company: string;
};

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};
