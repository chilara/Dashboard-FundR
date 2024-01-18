"use client";
import React, { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../../app/assets/Logo.svg";
import notification from "../../app/assets/notification.svg";
import toggle from "../../app/assets/toggle.svg";
import MobileSidebarComp from "../sidebar_/mobileSidebar";

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
      padding={"20px 16px"}
      px="8rem"
      borderBottom={"1px solid #E6EAEE"}
      mt={"3rem"}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
    >
      <Button onClick={toggler} border={"none"} backgroundColor={"transparent"}>
        <Image src={toggle} alt="toggle" width={44} height={44} />
      </Button>

      <Image src={Logo} alt="logo" width={200} height={64} />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"1rem"}
      >
        <Image src={notification} alt="notification" width={44} height={44} />
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
