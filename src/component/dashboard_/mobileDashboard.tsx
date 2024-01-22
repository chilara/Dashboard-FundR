import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Copy from "@/assets/copy.svg";

export const months = [
  {
    pillar: "72px",
    month: "Jan",
  },
  {
    pillar: "100px",
    month: "Feb",
  },
  {
    pillar: "120px",
    month: "Mar",
  },
  {
    pillar: "132px",
    month: "Apr",
  },
  {
    pillar: "123px",
    month: "May",
  },
  {
    pillar: "144px",
    month: "Jun",
  },
  {
    pillar: "132px",
    month: "Jul",
  },
];

const MobileDashboardComp = () => {
  return (
    <Box mt={"8rem"} px={"1rem"}>
      <Box>
        <Text
          mt={"3.5rem"}
          color={"#2e2e2e"}
          padding={"14px"}
          fontSize={"18px"}
          fontWeight={600}
          fontStyle={"normal"}
          lineHeight={"148.187%"}
          borderBottom={"2px solid #3976E8"}
          width={"45%"}
        >
          Online Payment
        </Text>
      </Box>
      <Box
        width={"80%"}
        border={" 1px solid #E4E4E7"}
        backgroundColor={"#fff"}
        borderRadius={"5px"}
        padding={"18px 24px"}
        mt={"3rem"}
      >
        <Text
          color={"#8F8E8E"}
          fontSize={"18px"}
          fontWeight={500}
          fontStyle={"normal"}
          lineHeight={"24px"}
          mb={0}
        >
          Account Details
        </Text>
        <Text
          color={"#000"}
          fontSize={"18px"}
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
            fontSize={"24px"}
            fontWeight={700}
            fontStyle={"normal"}
            lineHeight={"24px"}
          >
            800000000
          </Text>
          <Flex
            padding={"2px 4px"}
            backgroundColor={"rgba(159, 86, 212, 0.20)"}
            borderRadius={"8px"}
            alignItems={"center"}
            gap={".5rem"}
            mr={"10px"}
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
        </Box>
      </Box>

      <Box
        mt={"3rem"}
        position={"relative"}
        width={"80%"}
        border={" 1px solid #E4E4E7"}
        backgroundColor={"#fff"}
        borderRadius={"5px"}
        padding={"18px 24px"}
      >
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
          <Box background={"#EDEDF2"} width={"100%"} height={"0.877px"}></Box>
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
          <Box background={"#EDEDF2"} width={"100%"} height={"0.877px"}></Box>
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
          <Box background={"#EDEDF2"} width={"100%"} height={"0.877px"}></Box>
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
          <Box background={"#EDEDF2"} width={"100%"} height={"0.877px"}></Box>
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
          <Box background={"#EDEDF2"} width={"100%"} height={"0.877px"}></Box>
        </Box>
        <Box
          display={"flex"}
          // justifyContent={"center"}
          gap={"1.5rem"}
          alignItems={"flex-end"}
          position={"absolute"}
          top={70}
          left={59}
        >
          {months.map((item, index) => (
            <>
              <Flex key={index} flexDir={"column"}>
                <Box
                  width={"14px"}
                  height={item.pillar}
                  background={"#FFC145"}
                ></Box>
              </Flex>
            </>
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"1rem"}
          alignItems={"flex-end"}
          position={"absolute"}
          top={206}
          left={55}
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
      {/* </Box> */}
    </Box>
  );
};

export default MobileDashboardComp;
