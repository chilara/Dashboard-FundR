//@ts-nocheck
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Text } from "@chakra-ui/react";
import GetStarted from "../../app/assets/getStarted.svg";
import DbBlack from "../../app/assets/dbBlack.svg";
import Wallet from "../../app/assets/wallet.svg";
import Coins from "../../app/assets/coins.svg";
import Document from "../../app/assets/document.svg";
import Setting from "../../app/assets/setting.svg";

export const sidebarContent = [
  {
    link: "/get-started",
    icon: GetStarted,
    content: "Get Started",
  },
  {
    link: "/dashboard",
    icon: DbBlack,
    content: "Dashboard",
  },
  {
    link: "/accounts",
    icon: Wallet,
    content: "Accounts",
  },
  {
    link: "/transfers",
    icon: Coins,
    content: "Transfers",
  },
  {
    link: "/transactions",
    icon: Document,
    content: "Transactions",
  },
  {
    link: "/settings",
    icon: Setting,
    content: "Settings",
  },
];

const DesktopSidebarComp = () => {
  const pathname = usePathname();
  console.log(pathname);

  const isActive = (string) => pathname === string;

  return (
    <Box>
      <Box
        height={"945px"}
        borderRight={"1px solid #E6EAEE"}
        position={"fixed"}
        width={"18%"}
        backgroundColor={"#fff"}
      >
        {sidebarContent?.map((item, index) => (
          <Box
            key={index}
            display={"flex"}
            mt={index === 0 ? "9rem" : "0"}
            px={"4rem"}
            alignItems={"center"}
            gap={"1rem"}
            cursor={"pointer"}
            color={isActive(item.link) ? "#fff" : ""}
            backgroundColor={isActive(item.link) ? "#3976E8" : ""}
            _hover={{
              transform: "scale(1.02)",
              bg: "#3976E8",
              color: "#04004D",
            }}
          >
            <item.icon color={index === 4 || 1 ? "#fff" : ""} />

            <Text
              color={"#04004D"}
              fontSize={"15px"}
              fontWeight={400}
              fontStyle={"normal"}
              lineHeight={"150%"}
            >
              {index === 4 || index === 1 ? (
                <Box>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: isActive(item.link) ? "#fff" : "",
                    }}
                    href={index === 4 ? "/transactions" : "/dashboard"}
                  >
                    {item.content}
                  </Link>
                </Box>
              ) : (
                item.content
              )}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DesktopSidebarComp;
