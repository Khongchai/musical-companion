import { useMeExtendedQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useAuthRedirect = () => {
  const { data, loading } = useMeExtendedQuery();
  const router = useRouter();
  useEffect(() => {
    if (!loading && data?.meExtended?.user) {
      router.replace("/");
    }
  }, [loading, data, router]);
};

export default useAuthRedirect;
