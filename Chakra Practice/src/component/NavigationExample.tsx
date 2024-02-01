import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Text,
  Link,
  Stack,
  LinkBox,
  Box,
  Heading,
  LinkOverlay,
} from "@chakra-ui/react";
import React from "react";

const NavigationExample = () => {
  return (
    <>
      <Stack>
        <Link href="https://chakra-ui.com" isExternal>
          Chakra Design system <ExternalLinkIcon mx="2px" />
        </Link>

        <Text>
          Did you know that{" "}
          <Link color="teal.500" href="#">
            links can live inline with text
          </Link>
        </Text>

        <LinkBox
          as="article"
          maxW="sm"
          p="5"
          borderWidth="4px"
          rounded="md"
          m={10}
        >
          <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
            13 days ago
          </Box>
          <Heading size="md" my="2">
            <LinkOverlay href="https://youtube.com" isExternal>
              New Year, New Beginnings: Smashing Workshops & Audits
            </LinkOverlay>
          </Heading>
          <Text>
            Catch up on what’s been cookin’ at Smashing and explore some of the
            most popular community resources.
          </Text>
        </LinkBox>

        <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
          <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
            13 days ago
          </Box>
          <Heading size="md" my="2">
            <LinkOverlay href="https://youtube.com" isExternal>
              New Year, New Beginnings: Smashing Workshops & Audits
            </LinkOverlay>
          </Heading>
          <Text mb="3">
            Catch up on what’s been cookin’ at Smashing and explore some of the
            most popular community resources.
          </Text>
          <Box
            as="a"
            color="teal.400"
            href="https://twitch.com"
            fontWeight="bold"
          >
            Some inner link
          </Box>
        </LinkBox>
      </Stack>
    </>
  );
};

export default NavigationExample;
