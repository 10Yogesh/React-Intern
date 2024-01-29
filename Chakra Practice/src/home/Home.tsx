import { Center } from "@chakra-ui/react";

const Home = () => {
  return (
    <Center
      bg="black"
      color="white"
      display="flex"
      flexDirection="column"
      rowGap="10px"
    >
      <a href="/box">Box</a>
      <a href="/center">Center</a>
      <a href="/container">Container</a>
      <a href="/flex">Flex</a>
      <a href="/grid">Grid</a>
      <a href="/box">Box</a>
    </Center>
  );
};

export default Home;
