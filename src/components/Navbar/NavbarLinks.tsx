import React from "react";
import logout from "../../utils/authentication/logout";
import { TextLink } from "./TextLink";
import { Text } from "@chakra-ui/react";
import UserData from "../../types/UserData";
import { useRouter } from "next/router";

interface NavbarLinksProps {
  textColor: string;
  userData: UserData;
  isAuthenticated: boolean;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({
  textColor,
  isAuthenticated,
  userData,
}) => {
  const router = useRouter();

  return !isAuthenticated ? (
    <>
      <TextLink text="register" href="/register" />
      <TextLink text="login" href="/login" />
    </>
  ) : (
    <>
      <Text color={textColor} textTransform="capitalize">
        Logged in as: {userData ? userData.username : ""}
      </Text>
      <TextLink
        text="my items"
        onClickFunction={() => router.push("/my-items")}
      />
      <TextLink text="logout" onClickFunction={() => logout()} />
    </>
  );
};
export default NavbarLinks;
