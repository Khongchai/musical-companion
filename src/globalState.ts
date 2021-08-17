import create from "zustand";

interface AppStates {
  itemsInCart: number;
  increase: () => void;
  decrease: () => void;
  setInitial: (initialValue: number) => void;
}

const useStore = create<AppStates>((set) => ({
  itemsInCart: 0,
  increase: () => set((state) => ({ itemsInCart: state.itemsInCart + 1 })),
  decrease: () => set((state) => ({ itemsInCart: state.itemsInCart - 1 })),
  setInitial: (initialValue: number) =>
    set(() => ({ itemsInCart: initialValue })),
}));

export default useStore;
