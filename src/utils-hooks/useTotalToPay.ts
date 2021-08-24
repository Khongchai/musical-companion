import { useMemo } from "react";
import { useMeQuery } from "../generated/graphql";
import useStore from "../globalStates";

export default function useTotalToPay() {
  const currentTotal = useStore((state) => state.priceOfItemsInCart);
  const itemsInCart = useStore((state) => state.itemsInCart);
  const { data, loading } = useMeQuery();
  const isStudent = data?.me?.isStudent;

  const totalToPay = useMemo(() => {
    return data && !loading ? (isStudent ? 0 : currentTotal) : 0;
  }, [data, currentTotal, loading]);

  return {
    totalToPay,
    isStudent,
    thereAreItemsInCart: !!Object.keys(itemsInCart).length,
  };
}
