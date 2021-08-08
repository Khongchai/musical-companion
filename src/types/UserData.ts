import { Maybe, UserNode } from "../generated/graphql";

type UserData =
  | Maybe<
      {
        __typename?: "UserNode" | undefined;
      } & {
        __typename?: "UserNode" | undefined;
      } & Pick<
          UserNode,
          "id" | "lastLogin" | "username" | "email" | "isStudent" | "verified"
        >
    >
  | undefined;

export default UserData;
