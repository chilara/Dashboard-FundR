"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopTransactionComp from "./DesktopTransaction";
import MobileTransactionComp from "./mobileTransaction";

const TransactionIndex = () => {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 800px)",
  // });

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isMobile = useMediaQuery({
    query: "(min-width: 360px) and (max-width: 1224px)",
  });

  return (
    <Box backgroundColor={"#fafafa"} px={"3rem"}>
      {/* {isDesktopOrLaptop ? (
        <DesktopTransactionComp />
      ) : (
        <MobileTransactionComp />
      )} */}
      {isDesktopOrLaptop && <DesktopTransactionComp />}
      {isMobile && <MobileTransactionComp />}
    </Box>
  );
};

export default TransactionIndex;
