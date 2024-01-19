"use client";
// import React from "react";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Box, Text, Flex, Input } from "@chakra-ui/react";
import Chevrondown from "../../app/assets/chevrondown.svg";
import Calendar from "../../app/assets/calendar.svg";
import Pagination from "@mui/material/Pagination";
import TablePagination from "@mui/material/TablePagination";
import Upload from "../../app/assets/upload.svg";

export interface IPadginationProps {
  page?: number;
  rowsPerPage?: number;
}

export function TablePaginationDemo({
  page,
  count,
  rowsPerPage,
  padginate,
}: {
  page: number;
  count: number;
  rowsPerPage: number;
  padginate: (change: IPadginationProps) => void;
}) {
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    padginate({ page: newPage });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    padginate({
      page: 0,
      rowsPerPage: parseInt(event.target.value, 10),
    });
  };

  return (
    <Pagination
      shape="rounded"
      count={count}
      page={page}
      onChange={handleChangePage}
    />
  );
}

const DesktopTransactionComp = () => {
  const [allUsersList, setUsersList] = useState([]);
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

  const [padginationProps, setPadginationProps] = useState({
    page: 1,
    rowsPerPage: 10,
  });

  const padginate = (change: IPadginationProps) => {
    setPadginationProps((prev) => ({ ...prev, ...change }));
  };

  useEffect(() => {
    padginate({
      page: allUsersList.length,
    });
  }, [allUsersList]);

  const { page, rowsPerPage } = padginationProps;
  const count = Math.ceil(allUsersList.length / rowsPerPage);

  // const usersList = useMemo(() => {
  //   return allUsersList.slice(page - 1, rowsPerPage);
  // }, [allUsersList]);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const usersList = useMemo(
    () => allUsersList.slice(startIndex, endIndex),
    [allUsersList, startIndex, endIndex]
  );

  return (
    <Box mt={"7rem"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"2rem"}
        mt={"5rem"}
        borderBottom={"1px solid var(--Border-bd-dark, #DADAE7)"}
        padding={"18px 16px 12px 16px"}
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
          gap={"1rem"}
          justifyContent={"space-between"}
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
      </Box>
      <Box
        mt={"4rem"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={"1.5rem"}
      >
        <Input type="checkbox"></Input>
        <Text
          color={"#84919A"}
          fontSize={"12px"}
          fontWeight={600}
          fontStyle={"normal"}
          lineHeight={"16px"}
          textTransform={"uppercase"}
          ml={"-1.5rem"}
        >
          amount
        </Text>
        <Text
          color={"#84919A"}
          fontSize={"12px"}
          fontWeight={600}
          fontStyle={"normal"}
          lineHeight={"16px"}
          textTransform={"uppercase"}
          ml={"-1.5rem"}
        >
          transaction id
        </Text>
        <Text
          color={"#84919A"}
          fontSize={"12px"}
          fontWeight={600}
          fontStyle={"normal"}
          lineHeight={"16px"}
          textTransform={"uppercase"}
          ml={"-2rem"}
        >
          transaction type
        </Text>
        <Text
          color={"#84919A"}
          fontSize={"12px"}
          fontWeight={600}
          fontStyle={"normal"}
          lineHeight={"16px"}
          textTransform={"uppercase"}
        >
          date
        </Text>
        <Text
          color={"#84919A"}
          fontSize={"12px"}
          fontWeight={600}
          fontStyle={"normal"}
          lineHeight={"16px"}
          textTransform={"uppercase"}
          mr={"1rem"}
        >
          time
        </Text>
        <Text
          color={"#84919A"}
          fontSize={"12px"}
          fontWeight={600}
          fontStyle={"normal"}
          lineHeight={"16px"}
          textTransform={"uppercase"}
          mr={"3rem"}
        >
          status
        </Text>
      </Box>
      <Box
        border={" 1px solid #E4E4E7"}
        background={"#fff"}
        mt={"1rem"}
        padding={"0 24px 24px 24px 24px"}
        px={"1.5rem"}
        borderRadius={"6px"}
        height={"fit-content"}
        mb={"20rem"}
      >
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          usersList &&
          usersList.map(
            (
              item: {
                amount: string;
                id: number;
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
                key={index}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mt={0}
                boxShadow={"0px 1px 0px 0px #EDEDF2"}
              >
                <Input type="checkbox"></Input>
                <Text
                  color={"#000505"}
                  fontSize={"12px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                  lineHeight={"22px"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                  padding={"20px"}
                >
                  {item.amount}
                </Text>
                <Text
                  color={"#535379"}
                  fontSize={"12px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                  lineHeight={"22px"}
                  textTransform={"uppercase"}
                  padding={"20px"}
                >
                  {item.id}
                </Text>
                <Text
                  color={"#535379"}
                  fontSize={"12px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                  lineHeight={"22px"}
                  textTransform={"uppercase"}
                  padding={"20px"}
                >
                  {item.type}
                </Text>
                <Text
                  color={"#535379"}
                  fontSize={"12px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                  lineHeight={"22px"}
                  textTransform={"uppercase"}
                  padding={"20px"}
                >
                  {item.date}
                </Text>
                <Text
                  color={"#535379"}
                  fontSize={"12px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                  lineHeight={"22px"}
                  textTransform={"uppercase"}
                  padding={"20px"}
                >
                  {item.time}
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
            )
          )
        )}
      </Box>

      <div className="w-full flex justify-center items-center">
        <TablePaginationDemo
          count={count}
          page={page}
          rowsPerPage={rowsPerPage}
          padginate={padginate}
        />
      </div>
    </Box>
  );
};

export default DesktopTransactionComp;
