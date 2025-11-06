import { create } from "zustand";

export const useOrderStore = create((set, get) => ({
  orders: [],

  addItemToCart: (item) => {
    const { orders } = get();
    set({
      orders: [...orders, item],
    });
    console.log(item, "item in store");
  },

  removeFromCart: (id) =>
    set((state) => ({
      orders: state.orders.filter((item) => item.id !== id),
    })),

  removeAllItems: () => set(() => ({ orders: [] })),
}));
