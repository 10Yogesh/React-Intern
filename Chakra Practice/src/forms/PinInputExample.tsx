import { HStack, PinInput, PinInputField } from "@chakra-ui/react";

const PinInputExample = () => {
  return (
    <>
      <HStack>
        <PinInput type="alphanumeric">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>

      <HStack py={5}>
        <PinInput otp>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>

      <HStack>
        <PinInput type="alphanumeric" mask>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>

      <HStack py={5}>
        <PinInput placeholder="🥳">
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </>
  );
};

export default PinInputExample;
