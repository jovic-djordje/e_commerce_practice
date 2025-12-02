import { create } from "zustand";

export const useOrderStore = create((set, get) => ({
  orders: [],

  addItemToCart: (item) => {
    const { orders } = get();
    /* set({
      orders: [...orders, item],
    });
    console.log(item, "item in store");
  },*/

    // ako item već postoji → povećaš quantity
    const existingItem = orders.find((i) => i.id === item.id);

    if (existingItem) {
      set({
        orders: orders.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      // ako item ne postoji → dodaš ga sa quantity = 1
      set({
        orders: [...orders, { ...item, quantity: 1 }],
      });
    }

    console.log(item, "item in store");
  },

  removeFromCart: (id) =>
    set((state) => ({
      orders: state.orders.filter((item) => item.id !== id),
    })),

  removeAllItems: () => set(() => ({ orders: [] })),

  updateQuantity: (id, newQty) =>
    set((state) => ({
      orders: state.orders.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      ),
    })),
}));
