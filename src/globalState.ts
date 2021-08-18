import create from "zustand";
import { ProductType } from "./generated/graphql";

interface AppStates {
  itemsInCart: Record<string, ProductType>;
  setInitial: (products: ProductType[]) => void;
}

const useCartStore = create<AppStates>((set) => ({
  itemsInCart: {},
  setInitial: (initialValue: ProductType[]) =>
    set(() => {
      /**
       * This mapping will help us determine quickly which item the
       * user has already added to the cart.
       */
      const initialItemsInCartMap: Record<string, ProductType> = {};
      initialValue.forEach((item) => {
        initialItemsInCartMap[`${item.id}`] = item;
      });
      return {
        itemsInCart: initialItemsInCartMap,
      };
    }),
}));

export default useCartStore;
