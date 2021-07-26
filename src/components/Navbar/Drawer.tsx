import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NavbarContent } from "./NavbarContent";

type Sizes = "xs" | "sm" | "md" | "lg" | "xl" | "full";
export const DrawerComponent: React.FC<{
  openNavbar: boolean;
  newSize: Sizes;
}> = ({ openNavbar, newSize }) => {
  const [size, setSize] = useState("md");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setSize(newSize);
    onOpen();
  }, [openNavbar]);

  const bg = useColorModeValue("navbarGrey", "white");
  const bgFlip = useColorModeValue("white", "navbarGrey");

  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={bgFlip} />
          <DrawerBody
            as={Stack}
            display="flex"
            flexdir="column"
            spacing="3rem"
            align="center"
            pt="5rem"
            bg={bg}
          >
            <NavbarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
