import React from "react";
import logout from "../../utils/authentication/logout";
import { TextLink } from "./TextLink";
import { Text } from "@chakra-ui/react";
import UserData from "../../types/UserData";

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
  return !isAuthenticated ? (
    <>
      <TextLink text="register" href="/register" color={textColor} />
      <TextLink text="login" color={textColor} href="/login" />
    </>
  ) : (
    <>
      <Text color={textColor}>
        Logged in as: {userData ? userData.username : ""}
      </Text>
      <TextLink
        text="logout"
        color={textColor}
        onClickFunction={() => logout()}
      />
    </>
  );
};
export default NavbarLinks;
