import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Copy from "../../app/assets/copy.svg";
import Chevrondown from "../../app/assets/chevrondown.svg";

export const months = [
  {
    pillar: "68px",
    month: "Jan",
  },
  {
    pillar: "136px",
    month: "Feb",
  },
  {
    pillar: "102px",
    month: "Mar",
  },
  {
    pillar: "68px",
    month: "Apr",
  },
  {
    pillar: "17px",
    month: "May",
  },
  {
    pillar: "34px",
    month: "Jun",
  },
  {
    pillar: "29px",
    month: "Jul",
  },
  {
    pillar: "34px",
    month: "Aug",
  },
  {
    pillar: "27px",
    month: "Sep",
  },
  {
    pillar: "34px",
    month: "Oct",
  },
  {
    pillar: "52px",
    month: "Nov",
  },
  {
    pillar: "",
    month: "Dec",
  },
];

const DesktopDashboardComp = () => {
  return (
    <Box mt={"9rem"}>
      <Box px={"5rem"} mb={"10rem"}>
        <Box>
          <Text
            mt={"4.5rem"}
            color={"#2e2e2e"}
            padding={"14px"}
            fontSize={"16px"}
            fontWeight={600}
            fontStyle={"normal"}
            lineHeight={"148.187%"}
            borderBottom={"2px solid #3976E8"}
            width={"12%"}
          >
            Online Payment
          </Text>
        </Box>
        <Box
          width={"30%"}
          border={" 1px solid #E4E4E7"}
          backgroundColor={"#fff"}
          borderRadius={"5px"}
          padding={"18px 24px"}
          mt={"3rem"}
        >
          <Text
            color={"#8F8E8E"}
            fontSize={"14px"}
            fontWeight={500}
            fontStyle={"normal"}
            lineHeight={"24px"}
            mb={0}
          >
            Account Details
          </Text>
          <Text
            color={"#000"}
            fontSize={"14px"}
            fontWeight={500}
            fontStyle={"normal"}
            lineHeight={"24px"}
          >
            Sterling Bank
          </Text>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"5rem"}
          >
            <Text
              color={"#000"}
              fontSize={"21px"}
              fontWeight={700}
              fontStyle={"normal"}
              lineHeight={"24px"}
            >
              800,000,000
            </Text>
            <Flex
              padding={"2px 4px "}
              height={"36px"}
              backgroundColor={"rgba(159, 86, 212, 0.20)"}
              borderRadius={"8px"}
              alignItems={"center"}
              gap={".5rem"}
            >
              <Copy />
              <Text
                color={"#9F56D4"}
                fontSize={"12px"}
                fontWeight={400}
                fontStyle={"normal"}
                lineHeight={"150%"}
              >
                copy
              </Text>
            </Flex>
            {/* </Box> */}
          </Box>
        </Box>
        <Box
          border={" 1px solid var(--gray-200, #E4E4E7)"}
          background={"#fafafa"}
          width={"1047px"}
          height={"fit-content"}
          mt={"3rem"}
          padding={"24px"}
          borderRadius={"10px"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box display={"flex"} gap={"6rem"} alignItems={"center"}>
              <Text
                color={"#71717a"}
                fontSize={"14px"}
                fontWeight={600}
                fontStyle={"normal"}
                lineHeight={"normal"}
              >
                Showing data for
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
                <Text
                  color={"#71717a"}
                  fontSize={"14px"}
                  fontWeight={600}
                  fontStyle={"normal"}
                  lineHeight={"22px"}
                >
                  Last 7 days
                </Text>
                <Chevrondown />
              </Box>
            </Box>
            <Box display={"flex"} gap={"2.5rem"} alignItems={"center"}>
              <Text
                color={"#000"}
                fontSize={"14px"}
                fontWeight={600}
                fontStyle={"normal"}
                lineHeight={"19.349px"}
              >
                Today
              </Text>
              <Text
                color={"#000"}
                fontSize={"14px"}
                fontWeight={600}
                fontStyle={"normal"}
                lineHeight={"19.349px"}
                backgroundColor={"rgba(0, 198, 251, 0.06)"}
                padding={"11px 20px"}
                border={"5px"}
              >
                Last 7 days
              </Text>
              <Text
                color={"#000"}
                fontSize={"14px"}
                fontWeight={600}
                fontStyle={"normal"}
                lineHeight={"19.349px"}
              >
                Last 30 days
              </Text>
            </Box>
          </Box>
          <Box
            border={" 1px solid #E4E4E7"}
            background={"#fff"}
            mt={"2.5rem"}
            padding={"24px"}
            borderRadius={"6px"}
          >
            <Flex gap={"1rem"} alignItems={"center"}>
              <Text
                color={"#424242"}
                fontSize={"14px"}
                fontWeight={600}
                fontStyle={"normal"}
                lineHeight={"148.187%"}
              >
                Revenue
              </Text>
              <Text
                color={"#000"}
                fontSize={"14px"}
                fontWeight={300}
                fontStyle={"normal"}
                lineHeight={"148.187%"}
              >
                <span style={{ color: "hsla(133, 41%, 59%, 1)" }}>+0.00%</span>
                vs Last 7 days
              </Text>
            </Flex>
            <Flex gap={"1rem"} alignItems={"center"} height={0} mt={"1rem"}>
              <Text
                color={"#424242"}
                fontSize={"28.145px"}
                fontWeight={700}
                fontStyle={"normal"}
                lineHeight={"35.181px"}
              >
                $0.00
              </Text>
              <Text
                color={"#000"}
                fontSize={"13px"}
                fontWeight={400}
                fontStyle={"normal"}
                lineHeight={"20px"}
              >
                in total value
              </Text>
            </Flex>
            <Box mt={"3rem"} position={"relative"}>
              <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
                <Text
                  color={"#8686AC"}
                  fontSize={"12.211px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                  lineHeight={"19.349px"}
                >
                  500k
                </Text>
                <Box
                  background={"#EDEDF2"}
                  width={"100%"}
                  height={"0.877px"}
                ></Box>
              </Box>
              <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
                <Text
                  color={"#8686AC"}
                  fontSize={"12.211px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                  lineHeight={"19.349px"}
                >
                  400k
                </Text>
                <Box
                  background={"#EDEDF2"}
                  width={"100%"}
                  height={"0.877px"}
                ></Box>
              </Box>
              <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
                <Text
                  color={"#8686AC"}
                  fontSize={"12.211px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                  lineHeight={"19.349px"}
                >
                  300k
                </Text>
                <Box
                  background={"#EDEDF2"}
                  width={"100%"}
                  height={"0.877px"}
                ></Box>
              </Box>
              <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
                <Text
                  color={"#8686AC"}
                  fontSize={"12.211px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                  lineHeight={"19.349px"}
                >
                  200k
                </Text>
                <Box
                  background={"#EDEDF2"}
                  width={"100%"}
                  height={"0.877px"}
                ></Box>
              </Box>
              <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
                <Text
                  color={"#8686AC"}
                  fontSize={"12.211px"}
                  fontWeight={400}
                  fontStyle={"normal"}
                  lineHeight={"19.349px"}
                >
                  100k
                </Text>
                <Box
                  background={"#EDEDF2"}
                  width={"100%"}
                  height={"0.877px"}
                ></Box>
              </Box>
              <Box
                display={"flex"}
                // justifyContent={"center"}
                gap={"3.8rem"}
                alignItems={"flex-end"}
                position={"absolute"}
                top={61}
                left={60}
              >
                {months.map((item, index) => (
                  <>
                    <Flex key={index} flexDir={"column"}>
                      <Box
                        width={"20.932px"}
                        height={item.pillar}
                        background={"#FFC145"}
                      ></Box>
                    </Flex>
                  </>
                ))}
              </Box>
              <Box
                display={"flex"}
                gap={"3.8rem"}
                alignItems={"flex-end"}
                position={"absolute"}
                top={200}
                left={60}
              >
                {months.map((item, index) => (
                  <>
                    <Text
                      key={index}
                      color={"#8686AC"}
                      fontSize={"12.211px"}
                      fontWeight={400}
                      fontStyle={"normal"}
                      lineHeight={"19.349px"}
                    >
                      {item.month}
                    </Text>
                  </>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopDashboardComp;
