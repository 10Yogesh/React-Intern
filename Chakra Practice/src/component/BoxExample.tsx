import { Badge, Box, Image } from "@chakra-ui/react";

const BoxExample = () => {
  const property = {
    imageURl: "./images/pp.jpg",
    beds: 3,
    baths: 2,
    title: "Modern home in city",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Box
      bg="red"
      maxW="sm"
      borderWidth="1px"
      borderRadius={"lg"}
      overflow={"hidden"}
    >
      <Image src={property.imageURl} alt="Image"></Image>
      <Box p="6" bg="yellow">
        <Box display="flex" alignItems="baseline" bg="blue">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box bg="green">
          {property.formattedPrice}
          <Box as="span">/week</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BoxExample;
