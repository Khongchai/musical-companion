import create from "zustand";

interface CartState {
  itemsInCart: number;
  increase: () => void;
  decrease: () => void;
}

const useStore = create<CartState>((set) => ({
  itemsInCart: 0,
  increase: () => set((state) => ({ itemsInCart: state.itemsInCart + 1 })),
  decrease: () => set((state) => ({ itemsInCart: state.itemsInCart - 1 })),
}));

export default useStore;
