"use client";
// import React from "react";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Box, Text, Flex, Input } from "@chakra-ui/react";
import Chevrondown from "../../app/assets/chevrondown.svg";
import Calendar from "../../app/assets/calendar.svg";
import TablePagination from "@mui/material/TablePagination";
import Upload from "../../app/assets/upload.svg";
import ArrowLeft from "../../app/assets/arrowLeft.svg";

const MobileTransactionComp = () => {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let data = [];
      try {
        setLoading(true);
        const res = await fetch("/accounts.json");
        data = await res.json();
        if (!data) {
          alert("An error occurred while fetching users...");
          return;
        }
        setUsersList(data);
        return;
      } catch (err) {
        alert("An error occurred while fetching users...");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Box mt={"8rem"} px={"1rem"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"2rem"}
        mt={"5rem"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text
            color={"#2e2e2e"}
            fontSize={"16px"}
            fontWeight={500}
            fontStyle={"normal"}
            lineHeight={"22px"}
          >
            All Account
          </Text>
          <Chevrondown />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"1rem"}
          padding={"1px 20px"}
          backgroundColor={"#fff"}
          borderRadius={"8px"}
          border={"1px solid var(--Border-bd-dark, #DADAE7)"}
        >
          <Upload />
          <Text
            color={"#344054"}
            fontSize={"14px"}
            fontWeight={500}
            fontStyle={"normal"}
            lineHeight={"22px"}
          >
            Export
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"1rem"}
        justifyContent={"space-between"}
        mt={"1rem"}
      >
        <Text
          color={"#71717a"}
          fontSize={"16px"}
          fontWeight={500}
          fontStyle={"normal"}
          lineHeight={"normal"}
        >
          Select Date Range:
        </Text>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={"1rem"}
          padding={"1px 20px"}
          backgroundColor={"#fff"}
          borderRadius={"8px"}
          border={"1px solid var(--Border-bd-dark, #DADAE7)"}
        >
          <Calendar />
          <Text
            color={"#71717a"}
            fontSize={"14px"}
            fontWeight={500}
            fontStyle={"normal"}
            lineHeight={"22px"}
          >
            June 6, 2023 - Jun 15, 2023
          </Text>
        </Box>
      </Box>

      <Text
        color={"#535379"}
        fontSize={"17px"}
        fontWeight={600}
        fontStyle={"normal"}
        lineHeight={"150%"}
        textTransform={"capitalize"}
        mt={"3rem"}
      >
        Transactions
      </Text>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          usersList &&
          usersList.map(
            (
              item: {
                amount: string;
                type: string;
                date: string;
                time: string;
                status: string;
                bgColor: string;
                border: string;
                color: string;
                dotColor: string;
              },
              index: number
            ) => (
              <Box
                mt={"3rem"}
                position={"relative"}
                width={"95%"}
                border={" 1px solid #E4E4E7"}
                backgroundColor={"#fff"}
                borderRadius={"5px"}
                padding={"18px 24px"}
                key={index}
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Text
                    color={"#535379"}
                    fontSize={"12px"}
                    fontWeight={400}
                    fontStyle={"normal"}
                    lineHeight={"22px"}
                    textTransform={"uppercase"}
                  >
                    Amount
                  </Text>
                  <Text
                    color={"#535379"}
                    fontSize={"12px"}
                    fontWeight={400}
                    fontStyle={"normal"}
                    lineHeight={"22px"}
                    textTransform={"uppercase"}
                  >
                    {item.amount}
                  </Text>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Text
                    color={"#535379"}
                    fontSize={"12px"}
                    fontWeight={400}
                    fontStyle={"normal"}
                    lineHeight={"22px"}
                    textTransform={"uppercase"}
                  >
                    Transaction Type
                  </Text>
                  <Text
                    color={"#535379"}
                    fontSize={"12px"}
                    fontWeight={400}
                    fontStyle={"normal"}
                    lineHeight={"22px"}
                    textTransform={"uppercase"}
                  >
                    {item.type}
                  </Text>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Text
                    color={"#535379"}
                    fontSize={"12px"}
                    fontWeight={400}
                    fontStyle={"normal"}
                    lineHeight={"22px"}
                    textTransform={"uppercase"}
                  >
                    Date
                  </Text>
                  <Text
                    color={"#535379"}
                    fontSize={"12px"}
                    fontWeight={400}
                    fontStyle={"normal"}
                    lineHeight={"22px"}
                    textTransform={"uppercase"}
                  >
                    {item.date}, <span>{item.time}</span>
                  </Text>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Text
                    color={"#535379"}
                    fontSize={"12px"}
                    fontWeight={400}
                    fontStyle={"normal"}
                    lineHeight={"22px"}
                    textTransform={"uppercase"}
                  >
                    Status
                  </Text>
                  <Box
                    color={item.color}
                    fontSize={"12px"}
                    fontWeight={400}
                    fontStyle={"normal"}
                    lineHeight={"22px"}
                    textTransform={"capitalize"}
                    backgroundColor={item.bgColor}
                    padding={"4px 12px"}
                    border={item.border}
                    borderRadius={"100px"}
                    width={"100px"}
                    textAlign={"center"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={".5rem"}
                  >
                    <Box
                      width={"8px"}
                      height={"8px"}
                      borderRadius={"50%"}
                      backgroundColor={item.dotColor}
                    ></Box>
                    {item.status}
                  </Box>
                </Box>
              </Box>
            )
          )
        )}
      </Box>
    </Box>
  );
};

export default MobileTransactionComp;
