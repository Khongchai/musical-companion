import create from "zustand";
import { ProductType } from "./generated/graphql";

interface AppStates {
  itemsInCart: Record<string, ProductType>;
  setItemsToCart: (products: ProductType[]) => void;
  //Price will get updated when itemsInCart is updated
  priceOfItemsInCart: number;
}

const useStore = create<AppStates>((set) => ({
  itemsInCart: {},
  priceOfItemsInCart: 0,
  setItemsToCart: (products: ProductType[]) =>
    set(() => {
      /**
       * This mapping will help us determine quickly which item the
       * user has already added to the cart.
       */
      const itemsInCartMap: Record<string, ProductType> = {};
      let total = 0;
      products.forEach((item) => {
        itemsInCartMap[`${item.id}`] = item;
        total += parseInt(itemsInCartMap[`${item.id}`].priceUsd);
      });
      return {
        itemsInCart: itemsInCartMap,
        priceOfItemsInCart: total,
      };
    }),
}));

export default useStore;
