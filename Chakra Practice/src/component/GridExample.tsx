import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const GridExample = () => {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>

      <Grid
        mt={20}
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>

      <Grid templateColumns="repeat(5, 1fr)" gap={4} py={10}>
        <GridItem colSpan={2} h="10" bg="tomato" />
        <GridItem colStart={4} colEnd={6} h="10" bg="papayawhip" />
      </Grid>

      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          Header
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>

      <SimpleGrid columns={3} spacing={10} p={10}>
        <GridItem bg="tomato" height="80px"></GridItem>
        <GridItem bg="tomato" height="80px"></GridItem>
        <GridItem bg="tomato" height="80px"></GridItem>
        <GridItem bg="tomato" height="80px"></GridItem>
        <GridItem bg="tomato" height="80px"></GridItem>
      </SimpleGrid>

      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <Box bg="blue.300" height="80px"></Box>
        <Box bg="blue.300" height="80px"></Box>
        <Box bg="blue.300" height="80px"></Box>
        <Box bg="blue.300" height="80px"></Box>
        <Box bg="blue.300" height="80px"></Box>
      </SimpleGrid>
    </>
  );
};

export default GridExample;
