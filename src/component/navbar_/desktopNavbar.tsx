import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../../app/assets/Logo.svg";
import Notification from "../../app/assets/notification.svg";
import ArrowDown from "../../app/assets/arrowDown.svg";

const NavbarComp = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"20px 16px"}
      px="4rem"
      borderBottom={"1px solid #E6EAEE"}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      backgroundColor={"#fff"}
      zIndex={10}
    >
      <Logo />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"1rem"}
      >
        <Notification />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={".5rem"}
        >
          <Box
            borderRadius={"50%"}
            width={"50px"}
            height={"50px"}
            backgroundColor={"#0CBC8B"}
          >
            <Text
              color={"#fff"}
              fontSize={"16px"}
              fontWeight={500}
              fontStyle={"normal"}
              textAlign={"center"}
            >
              GA
            </Text>
          </Box>
          <ArrowDown />
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarComp;
