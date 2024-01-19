"use client";
// import React from "react";
import { useEffect, useState } from "react";
import { Box, Text, Flex, Input } from "@chakra-ui/react";
import Chevrondown from "../../app/assets/chevrondown.svg";
import Calendar from "../../app/assets/calendar.svg";
import Upload from "../../app/assets/upload.svg";
import ArrowL from "../../app/assets/arrowL.svg";
import ArrowR from "../../app/assets/arrowR.svg";

const DesktopTransactionComp = () => {
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [completeData, setCompleteData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (pageNumber === 1) {
          const res = await fetch("/accounts.json");
          const data_ = await res.json();
          setCompleteData(data_);
          setDataCount(data_.length);

          if (!data_) {
            alert("An error occurred while fetching users...");
            return;
          }
          setData(data_.slice(0, 10)); // here I selected the first 10 data and set data to it
        } else {
          const endingValue = pageNumber * 10 + 1;
          setData(completeData.slice(endingValue - 10, endingValue));
        }

        return;
      } catch (err) {
        alert("An error occurred while fetching users...");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [pageNumber]);

  let numberOfPages;
  if (dataCount % 10 !== 0) {
    numberOfPages = Math.ceil(dataCount / 10);
  } else {
    numberOfPages = dataCount / 10;
  }

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
        mb={"2rem"}
      >
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          data &&
          data.map(
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

      <Box display={"flex"} justifyContent={"flex-end"} gap={".5rem"}>
        <button
          style={{
            width: "32px",
            height: "32px",
            border: "4px",
            borderRadius: "1px solid #1F62FF",
            backgroundColor: "#fff",
            marginBottom: " 20rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}
          disabled={pageNumber === 1}
        >
          <ArrowL />
        </button>

        {new Array(numberOfPages).fill("go").map((item, index) => (
          <button
            key={index}
            style={{
              backgroundColor: "#fff",
              color: "#535379",
              fontWeight: "400",
              width: "32px",
              height: "32px",
              cursor: "pointer",
              border:
                pageNumber === index + 1 ? "1px solid #1F62FF" : "#DADAE7",
              borderRadius: "4px",
              fontSize: "14px",
              textAlign: "center",
            }}
            onClick={() => {
              setPageNumber(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
        <button
          style={{
            width: "32px",
            height: "32px",
            border: "4px",
            borderRadius: "1px solid #1F62FF",
            cursor: "pointer",
            backgroundColor: "#fff",
          }}
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
          disabled={pageNumber === numberOfPages}
        >
          <ArrowR />
        </button>
      </Box>
    </Box>
  );
};

export default DesktopTransactionComp;
