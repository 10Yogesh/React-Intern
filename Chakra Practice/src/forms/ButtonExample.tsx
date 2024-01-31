import { AddIcon, ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const ButtonExample = () => {
  return (
    <>
      <Button colorScheme="blue">Button</Button>
      <Stack spacing={4} direction={"row"} align="center" py={5}>
        <Button size="sm">Button 1</Button>
        <Button size="lg">Button 2</Button>
        <Button size="lg" variant="solid">
          Button 2
        </Button>
        <Button size="lg" variant="ghost">
          Button 2
        </Button>
        <Button size="lg" variant="outline">
          Button 2
        </Button>
      </Stack>

      <ButtonGroup gap="8" py={5}>
        <Button colorScheme="blackAlpha">WhiteAlpha</Button>
        <Button colorScheme="blackAlpha">BlackAlpha</Button>
      </ButtonGroup>

      <Wrap spacing={10}>
        <WrapItem>
          <Button colorScheme="gray">Gray</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="red">Red</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="orange">Orange</Button>
        </WrapItem>
      </Wrap>

      <Stack direction="row" spacing={4} py={5}>
        <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Call us
        </Button>
        <Button isLoading colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button
          isLoading
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
        >
          Submit
        </Button>
        <Button
          isLoading
          loadingText="Loading"
          colorScheme="teal"
          variant="outline"
          spinnerPlacement="end"
        >
          Continue
        </Button>
        <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
          Facebook
        </Button>
      </Stack>
      <Stack direction="row" spacing={5}>
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button>Save</Button>
          <IconButton aria-label="Add to friends" icon={<AddIcon />} />
        </ButtonGroup>
        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green.500"
        >
          Button
        </Button>
      </Stack>
    </>
  );
};

export default ButtonExample;
