import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { StateCreator } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];

  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const store: StateCreator<CartState> = (set, get) => ({
  items: [],

  addItem: (item: CartItem) => {
    const items = get().items;
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem) {
      set({
        items: items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        ),
      });
      return
    }
    set({ items: [...items, item] });
  },
  removeItem: (id: string) => {
    set({
      items: get().items.filter((item) => item.id !== id),
    });
  },
  clearCart: () => {
    set({
      items: [],
    });
  },
});

export const useCartStore = create<CartState>()(
  persist(store, { name: "cart-store" })
);
