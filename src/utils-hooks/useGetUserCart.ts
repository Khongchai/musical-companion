import { useEffect, useState } from "react";
import {
  CartType,
  useGetOrCreateAndGetCartMutation,
} from "../generated/graphql";

export function useGetUserCart() {
  const [cart, setCart] = useState<CartType | null>(null);
  const [getUserCart] = useGetOrCreateAndGetCartMutation();
  useEffect(() => {
    const getData = async () => {
      const { data } = await getUserCart();
      if (data) {
        setCart(data.getOrCreateAndGetCart?.cart as CartType);
      }
    };
    getData();
  }, []);
  return cart;
}
