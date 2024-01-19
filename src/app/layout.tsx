import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../setupTests";
import "./globals.css";
import { Box, Button, Text } from "@chakra-ui/react";
import Navbar from "./navbar/page";
import Sidebar from "./sidebar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FundR",
  description: "FundR technical test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          backgroundColor={"#fafafa"}
        >
          <Sidebar />
          <Box backgroundColor={"#fafafa"}>{children}</Box>
        </Box>
      </body>
    </html>
  );
}
