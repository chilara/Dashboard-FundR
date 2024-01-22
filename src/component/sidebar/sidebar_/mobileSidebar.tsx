import React from "react";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import getStarted from "@/assets/getStarted.svg";
import dbBlack from "@/assets/dbBlack.svg";
import wallet from "@/assets/wallet.svg";
import coins from "@/assets/coins.svg";
import document from "@/assets/document.svg";
import setting from "@/assets/setting.svg";

export const sidebarContent = [
  {
    icon: getStarted,
    content: "Get Started",
  },
  {
    icon: dbBlack,
    content: "Dashboard",
  },
  {
    icon: wallet,
    content: "Accounts",
  },
  {
    icon: coins,
    content: "Transfers",
  },
  {
    icon: document,
    content: "Transactions",
  },
  {
    icon: setting,
    content: "Settings",
  },
];

const MobileSidebarComp = () => {
  return (
    <Box
      height={"945px"}
      // padding={"32px 0px 591px 0px"}
      borderRight={"1px solid #E6EAEE"}
      // position={"fixed"}
      mt={"5.7rem"}
    >
      {/* {sidebarContent?.map((item, index) => (
        <Box
          key={index}
          display={"flex"}
          px={"4rem"}
          alignItems={"center"}
          gap={"1rem"}
          cursor={"pointer"}
          _hover={{
            transform: "scale(1.02)",
            bg: "#3976E8",
            color: "#fff",
          }}
        >
          <Image src={item.icon} alt="icon" width={24} height={24} />
          <Text
            color={"#04004D"}
            fontSize={"15px"}
            fontWeight={400}
            fontStyle={"normal"}
            lineHeight={"150%"}
            _hover={{
              color: "#fff",
            }}
          >
            {item.content}
          </Text>
        </Box>
      ))} */}
    </Box>
  );
};

export default MobileSidebarComp;
