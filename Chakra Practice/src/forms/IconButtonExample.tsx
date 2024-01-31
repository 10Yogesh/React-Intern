import { EmailIcon, PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { HStack, IconButton } from "@chakra-ui/react";
import React from "react";
import { MdPhone } from "react-icons/md";

const IconButtonExample = () => {
  return (
    <>
      <HStack spacing={5}>
        <IconButton aria-label="Search database" icon={<SearchIcon />} />
        <IconButton
          colorScheme="teal"
          aria-label="Call Segun"
          size="lg"
          icon={<PhoneIcon />}
        />
        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Send email"
          icon={<EmailIcon />}
        />

        <IconButton
          isRound={true}
          variant="outline"
          colorScheme="teal"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<MdPhone />}
        />
      </HStack>
    </>
  );
};

export default IconButtonExample;
