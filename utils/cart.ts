import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';

export interface CartItem {
    id: string;
    name: string;
    imageSrc: string;
    description: string;
    price: number;
    quantity: number;
    modifiers: {
        name: string;
        options: string;
    }[];
    comments: string;
}

interface CartStore {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'id'>) => void;
    removeItem: (id: string) => void;
    clear: () => void;
}

function areModifiersEqual(a: CartItem["modifiers"], b: CartItem["modifiers"]) {
    if (a.length !== b.length) return false;
    return a.every((mod, i) => mod.name === b[i].name && mod.options === b[i].options);
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (item) => set((state) => {
                // Find if an item with the same name, modifiers, and comments exists
                const existingIndex = state.items.findIndex(
                    (i) =>
                        i.name === item.name &&
                        areModifiersEqual(i.modifiers, item.modifiers) &&
                        i.comments === item.comments
                );
                if (existingIndex !== -1) {
                    // Increase quantity
                    const updatedItems = [...state.items];
                    updatedItems[existingIndex] = {
                        ...updatedItems[existingIndex],
                        quantity: updatedItems[existingIndex].quantity + (item.quantity || 1),
                    };
                    return { items: updatedItems };
                } else {
                    // Add as new item with a unique id
                    return {
                        items: [
                            ...state.items,
                            { ...item, id: crypto.randomUUID(), quantity: item.quantity || 1 },
                        ],
                    };
                }
            }),
            removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
            clear: () => set({ items: [] }),
        }),
        {
            name: "cart",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

