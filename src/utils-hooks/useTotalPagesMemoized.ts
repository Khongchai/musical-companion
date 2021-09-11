import { useEffect, useState } from "react";
import { AllProductsInfoQuery, PagePositionType } from "../generated/graphql";

export default function useTotalPagesMemoized(
  allProductsData: AllProductsInfoQuery | undefined
) {
  const totalPage = allProductsData?.allProductsInfo?.pagePosition.of;
  const [totalPagesMemoized, setTotalPageMemoized] = useState(0);
  useEffect(() => {
    if (totalPage) {
      setTotalPageMemoized(totalPage);
    }
  }, [totalPage]);

  return { totalPagesMemoized };
}
