import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box } from "@chakra-ui/react";
import Navbar from "../component/navbar/page";
import Sidebar from "../component/sidebar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FundR",
  description: "FundR dashboard",
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
