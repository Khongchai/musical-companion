import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HamburgerIcon } from "../HamburgerIcon";
import { DrawerComponent as Drawer } from "./NavbarDrawer";
import { NavbarContent } from "./NavbarContent";
import NavbarWrapper from "./NavbarWrapper";
import KhongLogoLink from "./KhongLogoLink";
import { Cart } from "../Cart";
import { FlipColorButton } from "./FlipColorButton";
import useIsAuthenticated from "../../utils-hooks/useIsAuthenticated";
import NavbarAuthLinks from "./NavbarLinks";
import { NavbarRight } from "./NavbarRight";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const bg = useColorModeValue("mainGrey", "white");
  const bgFlip = useColorModeValue("white", "mainGrey");
  const { isAuthenticated, userData } = useIsAuthenticated();

  return (
    <>
      <NavbarWrapper backgroundColor={bg}>
        <KhongLogoLink />
        <NavbarRight>
          <NavbarContent>
            <Box mr={["1rem", null, null, "0"]}>
              <Cart />
            </Box>
            <FlipColorButton bg={bg} bgFlip={bgFlip} />
            <NavbarAuthLinks
              textColor={bgFlip}
              isAuthenticated={isAuthenticated}
              userData={userData}
            />
          </NavbarContent>
          <Box
            width="fit-content"
            height="fit-content"
            display={["block", null, null, "none"]}
          >
            <HamburgerIcon
              onClickFunction={() => setToggleDrawer((stat) => !stat)}
            />
          </Box>
        </NavbarRight>
      </NavbarWrapper>
      <Drawer newSize="xs" openNavbar={toggleDrawer} />
    </>
  );
};

export default Navbar;
