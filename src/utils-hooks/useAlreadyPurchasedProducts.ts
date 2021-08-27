import { useMemo } from "react";
import { useProductPurchasedByCurrentUserOnlyNameQuery } from "../generated/graphql";

/**
 * Map already owned products.
 *
 * This will be check against when the page propagates
 * the accompaniment section with info. If user already owns a product,
 * some action should be taken to ensure that
 *
 *    1. User can no longer select that product.
 *    2. User is notified that they already own that product.
 */
export default function useAlreadyPurchasedProducts() {
  const { data: purchasedProducts, loading: purchasedProductsLoading } =
    useProductPurchasedByCurrentUserOnlyNameQuery({
      variables: { limit: -1, page: 1, search: "" },
    });

  const purchasedProductMap = useMemo(() => {
    const map: Record<string, true> = {};
    purchasedProducts?.productsPurchasedByCurrentUser?.data.forEach(
      (product) => {
        const name = product?.composition?.name;
        if (name) {
          map[name] = true;
        }
      }
    );
    return map;
  }, [purchasedProducts, purchasedProductsLoading]);

  return {
    purchasedProductsLoading,
    purchasedProductMap,
  };
}
