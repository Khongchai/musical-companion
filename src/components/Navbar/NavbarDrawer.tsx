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

type Sizes = "xs" | "sm" | "md" | "lg" | "xl" | "full";
export const DrawerComponent: React.FC<{
  openNavbar: boolean;
  newSize: Sizes;
}> = ({ openNavbar, newSize, children }) => {
  const [size, setSize] = useState("md");
  const { isOpen, onOpen, onClose } = useDisclosure();
  //Without this navbar would pop open on first entry because of the openNavbar dependency.
  const [firstEntry, setFirstEntry] = useState(true);

  useEffect(() => {
    if (firstEntry) {
      setFirstEntry(false);
    } else {
      setSize(newSize);
      onOpen();
    }
  }, [openNavbar]);

  const bg = useColorModeValue("mainGrey", "white");
  const bgFlip = useColorModeValue("white", "mainGrey");

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
            {children}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
