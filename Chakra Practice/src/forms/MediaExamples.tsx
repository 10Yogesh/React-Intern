import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  HStack,
  Icon,
  Stack,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";
import { MdSettings, MdReceipt, MdGroupWork } from "react-icons/md";

const MediaExamples = () => {
  return (
    <>
      //AVATARS
      <Wrap p={15} spacing={5}>
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </WrapItem>
        <WrapItem>
          <Avatar
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
          />
        </WrapItem>
        <WrapItem>
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        </WrapItem>
        <WrapItem>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        </WrapItem>
        <WrapItem>
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        </WrapItem>
        <WrapItem>
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </WrapItem>
        <WrapItem>
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        </WrapItem>
      </Wrap>
      <Stack direction="row">
        <Avatar name="Oshigaki Kisame" src="https://bit.ly/broken-link" />
        <Avatar name="Sasuke Uchiha" src="https://bit.ly/broken-link" />
        <Avatar src="https://bit.ly/broken-link" />
      </Stack>
      <Stack direction="row" spacing={4} py={10}>
        <Avatar>
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>

        <Avatar>
          <AvatarBadge borderColor="papayawhip" bg="tomato" boxSize="1.25em" />
        </Avatar>
      </Stack>
      <AvatarGroup size="md" max={2} mb={10}>
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
      </AvatarGroup>
      //ICONS
      <HStack p={10} spacing={10}>
        <Icon as={MdSettings} />
        <Icon as={MdReceipt} boxSize={6} />
        <Icon as={MdGroupWork} w={8} h={8} color="red.500" />
      </HStack>
      //IMAGES
      <Stack direction="row" p={10}>
        <Image
          boxSize="100px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Image
          boxSize="150px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Image
          boxSize="200px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Stack>
      <Image
        p={10}
        borderRadius="full"
        boxSize="200px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
    </>
  );
};

export default MediaExamples;
