import create from "zustand";

interface AppStates {
  itemsInCart: number;
  increase: () => void;
  decrease: () => void;
}

const useStore = create<AppStates>((set) => ({
  itemsInCart: 0,
  increase: () => set((state) => ({ itemsInCart: state.itemsInCart + 1 })),
  decrease: () => set((state) => ({ itemsInCart: state.itemsInCart - 1 })),
}));

export default useStore;
