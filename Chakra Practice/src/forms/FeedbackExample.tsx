import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  HStack,
  Input,
  Progress,
  Skeleton,
  Spinner,
  Stack,
  useToast,
} from "@chakra-ui/react";

const FeedbackExample = () => {
  const toast = useToast();
  return (
    <>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
      </Alert>

      <Alert
        mt={5}
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Application submitted!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for submitting your application. Our team will get back to you
          soon.
        </AlertDescription>
      </Alert>

      <HStack>
        <CircularProgress value={40} color="green.400" p={5}>
          <CircularProgressLabel>40%</CircularProgressLabel>
        </CircularProgress>

        <CircularProgress isIndeterminate color="green.300" />
      </HStack>

      <Stack spacing={5}>
        <Progress colorScheme="green" size="sm" value={20} />
        <Progress colorScheme="green" size="md" value={50} />
        <Progress colorScheme="green" size="lg" value={20} />
        <Progress colorScheme="green" height="32px" value={20} />
        <Progress size="xs" height="10px" isIndeterminate />
      </Stack>

      <Stack py={10}>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>

      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />

      <Button
        m={10}
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    </>
  );
};

export default FeedbackExample;
