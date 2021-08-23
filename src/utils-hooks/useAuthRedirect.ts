import { useMeQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useAuthRedirect = (
  redirectMethod: "toHomeIfLoggedIn" | "toHomeIfNotLoggedIn"
) => {
  const { data, loading } = useMeQuery();
  const router = useRouter();
  useEffect(() => {
    if (redirectMethod === "toHomeIfLoggedIn") {
      if (!loading && data?.me) {
        router.replace("/");
      }
    } else {
      if (!loading && !data?.me) {
        router.replace("/");
      }
    }
  }, [loading, data, router]);
};

export default useAuthRedirect;
