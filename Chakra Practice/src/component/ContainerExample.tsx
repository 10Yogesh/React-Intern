import React from "react";
import { Box, Container, VStack } from "@chakra-ui/react";

const ContainerExample = () => {
  return (
    <>
      <Container bg="yellow">
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production
      </Container>

      <VStack>
        <Container maxW="md" bg="blue.600" color="white">
          "md" Container
        </Container>
        <Container maxW="550px" bg="purple.600" color="white">
          "550px" Container
        </Container>
        <Container
          maxW="container.sm"
          bg="green.400"
          color="#262626"
          centerContent
        >
          "container.sm" Container
        </Container>
      </VStack>

      <Container maxW="2xl" bg="blue.600" centerContent mt="20px">
        <Box padding="4" bg="blue.400" color="black" maxW="md">
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production.
        </Box>
      </Container>
    </>
  );
};

export default ContainerExample;
