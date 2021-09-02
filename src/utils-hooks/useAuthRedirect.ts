import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../generated/graphql";

const useAuthRedirect = (
  redirectMethod: "toHomeIfLoggedIn" | "toHomeIfNotLoggedIn"
) => {
  const { data, loading } = useMeQuery();
  const router = useRouter();

  useEffect(() => {
    if (redirectMethod === "toHomeIfLoggedIn") {
      if (!loading && data?.meExtended) {
        router.replace("/");
      }
    } else {
      if (!loading && !data?.meExtended) {
        router.replace("/");
      }
    }
  }, [loading, data]);
};

export default useAuthRedirect;
