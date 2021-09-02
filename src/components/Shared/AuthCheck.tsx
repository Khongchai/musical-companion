import { Grid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useMeQuery } from "../../generated/graphql";

/**
 *
 * TODO: Refactor duplicate logic?
 */
export const ToHomeIfNotLoggedIn: React.FC<{}> = ({ children }) => {
  const { data, loading } = useMeQuery();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!data?.meExtended) {
        router.replace("/");
      }
    }
  }, [loading, data]);

  //To prevent content flashing,
  // don't render children until auth has finishes checking.
  return !data?.meExtended ? <LoadingComponent /> : <>{children}</>;
};

export const ToHomeIfLoggedIn: React.FC<{}> = ({ children }) => {
  const { data, loading } = useMeQuery();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (data?.meExtended) {
        router.replace("/");
      }
    }
  }, [loading, data]);

  //To prevent content flashing,
  // don't render children until auth has finishes checking.
  return data?.meExtended || loading ? <LoadingComponent /> : <>{children}</>;
};

function LoadingComponent() {
  return (
    <Grid height="80vh" placeItems="center">
      You are being redirected...
    </Grid>
  );
}
