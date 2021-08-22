import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ProductType } from "../../generated/graphql";
import useStore from "../../globalStates.ts";
import useIsAuthenticated from "../../utils-hooks/useIsAuthenticated";
import { Cart } from "../Cart";
import { HamburgerIcon } from "../HamburgerIcon";
import { FlipColorButton } from "./FlipColorButton";
import KhongLogoLink from "./KhongLogoLink";
import { NavbarContent } from "./NavbarContent";
import { DrawerComponent as Drawer } from "./NavbarDrawer";
import NavbarAuthLinks from "./NavbarLinks";
import { NavbarRight } from "./NavbarRight";
import NavbarWrapper from "./NavbarWrapper";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  const bg = useColorModeValue("mainGrey", "white");
  const bgFlip = useColorModeValue("white", "mainGrey");

  const { isAuthenticated, userData, userCart } = useIsAuthenticated();

  const setInitialItemsInCart = useStore((state) => state.setItemsToCart);
  useEffect(() => {
    if (userCart) {
      setInitialItemsInCart(userCart.itemsInCart as ProductType[]);
    }
  }, [userCart]);

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
      <Drawer newSize="xs" openNavbar={toggleDrawer}>
        <Box mr={["1rem", null, null, "0"]}>
          <Cart />
        </Box>
        <FlipColorButton bg={bg} bgFlip={bgFlip} />
        <NavbarAuthLinks
          textColor={bgFlip}
          isAuthenticated={isAuthenticated}
          userData={userData}
        />
      </Drawer>
    </>
  );
};

export default Navbar;
