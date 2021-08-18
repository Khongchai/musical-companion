import { useEffect, useState } from "react";
import { useMeExtendedQuery } from "../generated/graphql";

const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  /**
   * JWT is checked and included in the header in the apolloClient.ts file.
   */
  const { data, loading } = useMeExtendedQuery();
  useEffect(() => {
    setIsAuthenticated(!!data?.meExtended?.user);
  }, [data]);

  return {
    isAuthenticated,
    userData: data?.meExtended?.user,
    userCart: data?.meExtended?.cart,
    loading,
  };
};

export default useIsAuthenticated;
