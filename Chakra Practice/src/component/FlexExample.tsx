import { Center, Flex, Text, Box, Square, Spacer } from "@chakra-ui/react";
import React from "react";

const FlexExample = () => {
  return (
    <>
      <Flex color="white">
        <Center w="100px" bg="green.500">
          <Text>Box 1</Text>
        </Center>
        <Square bg="blue.500" size="150px">
          <Text>Box 2</Text>
        </Square>

        {/* <Box flex="1" bg="tomato">
          <Text>Box 3</Text>
        </Box> */}
      </Flex>
      <Flex>
        <Box p="4" bg="red.400">
          Box 1
        </Box>
        <Spacer />
        <Box p="4" bg="green.400">
          Box 2
        </Box>
      </Flex>
    </>
  );
};

export default FlexExample;
