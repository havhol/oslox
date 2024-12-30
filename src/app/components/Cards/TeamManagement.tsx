import React from "react";
import {
  Card,
  Heading,
  Text,
  Flex,
  Box,
  TextField,
  Button,
  Avatar,
  Separator,
  IconButton,
  Link,
} from "@radix-ui/themes"; // Replace with actual imports from your setup

const TeamManagement = () => {
  return (
    <Card size="4" variant="surface" className="rt-r-size-4">
      <Heading size="6" mb="2">
        Tickrpal mates
      </Heading>
      <Text as="div" size="2" color="gray" mb="5">
        Invite and manage your trading team.
      </Text>

      <Flex gap="3" className="rt-r-mb-5">
        <Box className="rt-r-fg-1">
          <TextField.Root
            size="2"
            variant="surface"
            spellCheck="false"
            placeholder="Email address"
          ></TextField.Root>
        </Box>
        <Button size="2" variant="solid" className="rt-r-size-2">
          Invite
        </Button>
      </Flex>

      <Flex direction="column">
        {[
          {
            name: "Line Labrie",
            email: "line.labrie@example.com",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=64&h=64&dpr=2&q=70&crop=faces&fit=crop",
          },
          {
            name: "Zac Viig",
            email: "zac.viig@example.com",
            img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?&w=64&h=64&dpr=2&q=70&crop=faces&fit=crop",
          },
          {
            name: "Kristine Nihol",
            email: "kristine.nihol@example.com",
            img: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.48&fp-y=0.48&fp-z=1.3&fit=crop",
          },
          {
            name: "Dani Vu",
            email: "dani.vu@example.com",
            img: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1.5&fit=crop",
          },
          {
            name: "Marie Pale",
            email: "marie.pale@example.com",
            img: "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.48&fp-y=0.35&fp-z=2&fit=crop",
          },
        ].map((member, index) => (
          <Box key={index}>
            <Flex align="center" gap="4">
              <Flex align="center" gap="3" style={{ width: "200px" }}>
                <Avatar
                  size="3"
                  variant="soft"
                  src={member.img}
                  alt={member.name}
                  fallback="T"
                />
                <Link href="#" className="rt-r-tw-nowrap rt-underline-auto">
                  {member.name}
                </Link>
              </Flex>
              <Text size="2" color="gray">
                {member.email}
              </Text>
              <Flex justify="end" className="rt-r-fg-1">
                <IconButton
                  size="2"
                  variant="ghost"
                  aria-haspopup="menu"
                  aria-expanded="false"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </IconButton>
              </Flex>
            </Flex>
            <Separator
              size="4"
              orientation="horizontal"
              className="rt-r-my-3"
            />
          </Box>
        ))}
      </Flex>
    </Card>
  );
};

export default TeamManagement;
