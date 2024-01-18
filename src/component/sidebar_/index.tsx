"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopSidebarComp from "./DesktopSidebar";
import MobileSidebarComp from "./mobileSidebar";

const SidebarIndex = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isMobile = useMediaQuery({
    query: "(min-width: 360px) and (max-width: 1224px)",
  });
  return (
    <Box>
      {isDesktopOrLaptop && <DesktopSidebarComp />}
      {isMobile && <MobileSidebarComp />}
    </Box>
  );
};

export default SidebarIndex;
