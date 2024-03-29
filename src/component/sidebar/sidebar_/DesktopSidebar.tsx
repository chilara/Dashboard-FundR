import React, { ReactComponentElement, ReactNode } from "react";
import "./style/style.css";
import { usePathname } from "next/navigation";
import { Box, Text } from "@chakra-ui/react";
import GetStarted from "@/assets/getStarted.svg";
import DbBlack from "@/assets/dbBlack.svg";
import Wallet from "@/assets/wallet.svg";
import Coins from "@/assets/coins.svg";
import Document from "@/assets/document.svg";
import Setting from "@/assets/setting.svg";

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

  const isActive = (string: string) => pathname === string;

  return (
    <>
      <Box
        height={"945px"}
        borderRight={"1px solid #E6EAEE"}
        position={"fixed"}
        width={"18%"}
        backgroundColor={"#fff"}
      >
        {sidebarContent?.map(
          (
            item: {
              link: string;
              icon: any;
              content: string;
            },
            index: number
          ) => (
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
                color: "#fff",
              }}
            >
              <item.icon color={index === 4 || 1 ? "#fff" : ""} />

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
                {index === 4 || index === 1 ? (
                  <>
                    <a
                      style={{
                        textDecoration: "none",
                        color: isActive(item.link) ? "#fff" : "",
                      }}
                      href={index === 4 ? "/transactions" : "/dashboard"}
                    >
                      {item.content}
                    </a>
                  </>
                ) : (
                  item.content
                )}
              </Text>
            </Box>
          )
        )}
      </Box>
    </>
  );
};

export default DesktopSidebarComp;
