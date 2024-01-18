import React from "react";
import Image from "next/image";
import { Box, Text, Flex } from "@chakra-ui/react";
import copy from "../../app/assets/copy.svg";
import chevrondown from "../../app/assets/chevrondown.svg";

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
    <Box width={"1260px"} padding={"32px 0px 945px 0px"} mt={"5.7rem"}>
      <Box px={"4rem"}>
        <Box>
          <Text
            mt={"7rem"}
            color={"#2e2e2e"}
            padding={"14px"}
            fontSize={"36px"}
            fontWeight={600}
            fontStyle={"normal"}
            lineHeight={"148.187%"}
            borderBottom={"2px solid #3976E8"}
            width={"65%"}
            position={"absolute"}
            top={74}
          >
            Online Payment
          </Text>
          <Box height={"2px"} backgroundColor={"#EDEDF2"} mt={"9rem"}></Box>
        </Box>
        <Box
          width={"95%"}
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
              padding={"2px 4px "}
              height={"36px"}
              backgroundColor={"rgba(159, 86, 212, 0.20)"}
              borderRadius={"8px"}
              alignItems={"center"}
              gap={".5rem"}
            >
              <Image src={copy} alt="copy" width={24} height={24} />
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
          width={"95%"}
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
            gap={"4.5rem"}
            alignItems={"flex-end"}
            position={"absolute"}
            top={56}
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
            gap={"4.5rem"}
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
  );
};

export default MobileDashboardComp;
