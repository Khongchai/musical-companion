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

const NavbarAuthLinks: React.FC<NavbarLinksProps> = ({
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
      <Text color={textColor}>
        Logged in as: {userData ? userData.username : ""}
      </Text>
      <TextLink
        text="my items"
        onClickFunction={() => router.push("/dashboard")}
      />
      <TextLink text="logout" onClickFunction={() => logout()} />
    </>
  );
};
export default NavbarAuthLinks;
