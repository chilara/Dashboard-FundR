"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import DashboardComp from "./DesktopDashboard";
import DesktopDashboardComp from "./DesktopDashboard";
import MobileDashboardComp from "./mobileDashboard";

const DashboardIndex = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isMobile = useMediaQuery({
    query: "(min-width: 360px) and (max-width: 1224px)",
  });
  return (
    <Box>
      {isDesktopOrLaptop && <DesktopDashboardComp />}
      {isMobile && <MobileDashboardComp />}
    </Box>
  );
};

export default DashboardIndex;
