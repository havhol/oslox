import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Link,
  TextField,
  Text,
} from "@radix-ui/themes"; // Replace with actual imports from your setup

const SignUpCard = () => {
  return (
    <Card size="4" variant="surface">
      {/* Heading */}
      <Heading size="6" mb="5">
        Sign up
      </Heading>

      {/* Email Field */}
      <Box mb="5">
        <Flex mb="1">
          <Text as="label" size="2" weight="bold" htmlFor="example-email-field">
            Email address
          </Text>
        </Flex>
        <TextField.Root
          size="2"
          variant="surface"
          id="example-email-field"
          spellCheck="false"
          placeholder="Enter your email"
          className="rt-reset rt-TextFieldInput"
        ></TextField.Root>
      </Box>

      {/* Password Field */}
      <Box className="rt-r-position-relative rt-r-mb-5">
        <Flex align="baseline" justify="between" mb="1">
          <Text as="label" size="2" weight="bold" htmlFor="example-email-field">
            Password
          </Text>
          <Link
            href="#"
            className="rt-Text rt-reset rt-Link rt-r-size-2 rt-underline-auto"
          >
            Forgot password?
          </Link>
        </Flex>
        <TextField.Root
          size="2"
          variant="surface"
          id="example-password-field"
          spellCheck="false"
          placeholder="Enter your password"
          className="rt-reset rt-TextFieldInput"
        ></TextField.Root>
      </Box>

      {/* Buttons */}
      <Flex justify="end" gap="3" mt="6">
        <Button size="2" variant="outline">
          Create an account
        </Button>
        <Button size="2" variant="solid">
          Sign in
        </Button>
      </Flex>
    </Card>
  );
};

export default SignUpCard;
