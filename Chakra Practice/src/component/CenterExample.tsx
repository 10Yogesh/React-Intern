import { AbsoluteCenter, Box, Center, Circle, HStack } from "@chakra-ui/react";
import React from "react";

const CenterExample = () => {
  return (
    <>
      <HStack p="10" columnGap="50px">
        <Center w="40px" h="40px" bg="tomato" color="white">
          <Box as="span" fontWeight="bold" fontSize="lg">
            1
          </Box>
        </Center>
        <Circle size="40px" bg="tomato" color="white">
          <Box as="span" fontWeight="bold" fontSize="lg">
            1
          </Box>
        </Circle>
      </HStack>

      <Box bg="yellow" position="relative" h="400px">
        <AbsoluteCenter bg="tomato" p="4" color="white" axis="both">
          6
        </AbsoluteCenter>
      </Box>
    </>
  );
};

export default CenterExample;
