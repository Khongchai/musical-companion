import create from "zustand";
import { ProductType } from "./generated/graphql";

interface AppStates {
  itemsInCart: Record<string, ProductType>;
  setItemsToCart: (products: ProductType[]) => void;
}

const useCartStore = create<AppStates>((set) => ({
  itemsInCart: {},
  setItemsToCart: (products: ProductType[]) =>
    set(() => {
      /**
       * This mapping will help us determine quickly which item the
       * user has already added to the cart.
       */
      const itemsInCartMap: Record<string, ProductType> = {};
      products.forEach((item) => {
        itemsInCartMap[`${item.id}`] = item;
      });
      return {
        itemsInCart: itemsInCartMap,
      };
    }),
}));

export default useCartStore;
