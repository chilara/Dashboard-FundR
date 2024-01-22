"use client";
import React, { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import Logo from "@/assets/Logo.svg";
import Notification from "@/assets/notification.svg";
import Toggle from "@/assets/toggle.svg";

const MobileNavbarComp = () => {
  const [open, setOpen] = useState(false);

  const toggler = () => {
    setOpen(!open);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"24px 16px"}
      px="2rem"
      borderBottom={"1px solid #E6EAEE"}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      backgroundColor={"#fff"}
      zIndex={10}
    >
      <Button onClick={toggler} border={"none"} backgroundColor={"transparent"}>
        <Toggle />
      </Button>

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
            width={"60px"}
            height={"60px"}
            backgroundColor={"#0CBC8B"}
          >
            <Text
              color={"#fff"}
              fontSize={"18px"}
              fontWeight={500}
              fontStyle={"normal"}
              textAlign={"center"}
            >
              GA
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileNavbarComp;
