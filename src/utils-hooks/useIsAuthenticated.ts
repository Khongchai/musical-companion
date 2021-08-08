import { useEffect, useState } from "react";
import { useMeQuery } from "../generated/graphql";

const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  /**
   * JWT is checked and included in the header in the apolloClient.ts file.
   */
  const { data, loading } = useMeQuery();
  useEffect(() => {
    setIsAuthenticated(!!data?.me);
  }, [data]);

  return { isAuthenticated, userData: data?.me, loading };
};

export default useIsAuthenticated;
