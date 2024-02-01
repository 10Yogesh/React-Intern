import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import React from "react";

const CheckboxExample = () => {
  return (
    <>
      <Stack direction={"row"} spacing={5} py={10}>
        <Checkbox>Checkbox</Checkbox>
        <Checkbox defaultChecked>Checkbox</Checkbox>
        <Checkbox isDisabled defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox colorScheme="red" defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox size="sm" colorScheme="red">
          Checkbox
        </Checkbox>
        <Checkbox isInvalid spacing="1rem">
          Checkbox
        </Checkbox>
        <Checkbox iconColor="pink">Option</Checkbox>
      </Stack>

      <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
        <Stack spacing={5} direction={["row"]}>
          <Checkbox value="naruto">Naruto</Checkbox>
          <Checkbox value="sasuke">Sasuke</Checkbox>
          <Checkbox value="kakashi">Kakashi</Checkbox>
        </Stack>
      </CheckboxGroup>
    </>
  );
};

export default CheckboxExample;
