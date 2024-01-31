import { Center, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Center
      bg="gray"
      color="black"
      display="flex"
      flexDirection="column"
      rowGap="10px"
      fontWeight={600}
    >
      <Heading>All Practiced Topics:</Heading>
      <a href="/box">Box</a>
      <a href="/center">Center</a>
      <a href="/container">Container</a>
      <a href="/flex">Flex</a>
      <a href="/grid">Grid</a>

      <a href="/button">Button</a>
      <a href="/checkbox">CheckBox</a>
      <a href="/datadisplay">Data Display</a>
      <a href="/feedback">Feedback</a>
      <a href="/formcontrol">Form Control</a>
      <a href="/iconbutton">Icon Button</a>
      <a href="/media">Media and Icons</a>
      <a href="/navigation">Navigation</a>
      <a href="/pininput">Pin Input</a>
    </Center>
  );
};

export default Home;
