import {
  FormHelperText,
  FormLabel,
  Input,
  FormControl,
  FormErrorMessage,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import React, { useState } from "react";

const FormControlExample = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setInput(e.target.value);

  const isError = input === "";
  return (
    <>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl isInvalid={isError} py={5}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isRequired py={5}>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" />
      </FormControl>

      <FormControl>
        <FormLabel>Country</FormLabel>
        <Select placeholder="Select country">
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
      </FormControl>

      <FormControl py={5}>
        <FormLabel>Amount</FormLabel>
        <NumberInput max={50} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    </>
  );
};

export default FormControlExample;
