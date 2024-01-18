"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import NavbarComp from "./desktopNavbar";
import MobileNavbarComp from "./mobileNavbar";

const NavbarIndex = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isMobile = useMediaQuery({
    query: "(min-width: 360px) and (max-width: 1224px)",
  });
  return (
    <Box>
      {isDesktopOrLaptop && <NavbarComp />}
      {isMobile && <MobileNavbarComp />}
    </Box>
  );
};

export default NavbarIndex;
