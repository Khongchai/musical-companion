import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HamburgerIcon } from "../HamburgerIcon";
import { DrawerComponent as Drawer } from "./Drawer";
import { NavbarContent } from "./NavbarContent";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const bg = useColorModeValue("mainGrey", "white");

  return (
    <>
      <Flex
        align="center"
        p={["1rem 1rem", null, null, "1rem 5rem"]}
        justifyContent="space-between"
        bg={bg}
        width="100%"
        position="absolute"
        top="0"
        left="0"
      >
        <Link href="/">
          <Flex cursor="pointer">
            <Image
              alt="khong-icon"
              src="/khong-icon.png"
              width="60px"
              height="60px"
            />
          </Flex>
        </Link>
        <Flex align="center" css={{ "> *": { marginLeft: "1.565rem" } }}>
          <Flex
            css={{ "> *": { marginLeft: "inherit" } }}
            display={["none", null, null, "flex"]}
            align="center"
          >
            <NavbarContent />
          </Flex>
          <Box
            width="fit-content"
            height="fit-content"
            display={["block", null, null, "none"]}
          >
            <HamburgerIcon
              onClickFunction={() => setToggleDrawer((stat) => !stat)}
            />
          </Box>
        </Flex>
      </Flex>
      <Drawer newSize="xs" openNavbar={toggleDrawer} />
    </>
  );
};

export default Navbar;
