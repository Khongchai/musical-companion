import { useEffect, useState } from "react";
import {
  MeExtendedQuery,
  MeQuery,
  useMeExtendedQuery,
  useMeQuery,
} from "../generated/graphql";

function useUserData(useNormalMeQuery?: boolean) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  /**
   * meExtended query is meQuery but fetches more data.
   *
   * when only want to check whether a user is authenticated or not, use the normal
   * meQuery as it fetches only the id, therefore saves the bandwidth.
   */

  const { data, loading } = useNormalMeQuery
    ? useMeQuery()
    : useMeExtendedQuery();

  useEffect(() => {
    if (useNormalMeQuery) {
      setIsAuthenticated(!!(data as MeQuery)?.meExtended?.user.id);
    } else {
      setIsAuthenticated(!!(data as MeExtendedQuery)?.meExtended?.user);
    }
  }, [data]);

  if (useNormalMeQuery) {
    return {
      isAuthenticated,
      userId: (data as MeQuery)?.meExtended?.user?.id,
      isStudent: (data as MeQuery)?.meExtended?.user?.isStudent,
    };
  }

  return {
    isAuthenticated,
    userData: (data as MeExtendedQuery)?.meExtended?.user,
    userCart: (data as MeExtendedQuery)?.meExtended?.cart,
    loading,
  };
}

export default useUserData;
