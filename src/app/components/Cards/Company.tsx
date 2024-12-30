import React from "react";
import {
  Card,
  Heading,
  Text,
  Flex,
  Box,
  Button,
  IconButton,
  Link,
} from "@radix-ui/themes"; // Replace with actual imports from your setup

const CompanyCard = () => {
  return (
    <Card size="4" variant="surface">
      {/* Close Button */}
      <Flex className="rt-r-position-absolute rt-r-top-0 rt-r-right-0 rt-r-m-3">
        <IconButton
          variant="ghost"
          highContrast
          size="2"
          className="rt-IconButton"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </IconButton>
      </Flex>

      {/* Heading */}
      <Heading size="6" mb="2">
        Your public card
      </Heading>

      {/* Description */}
      <Text as="div" size="2" color="gray" mb="6">
        View and manage your public profile card.
      </Text>

      {/* Card Information */}
      <Box
        p="5"
        style={{
          backgroundColor: "var(--gray-a3)",
          borderRadius: "var(--radius-4)",
        }}
      >
        <Box
          style={{
            height: "168px",
            background:
              "linear-gradient(to top right, var(--accent-9), #E18BFF)",
            boxShadow: "rgba(121, 113, 233, 0.667) 0px 1px 20px -5px",
            borderRadius: "var(--radius-3)",
          }}
          className="radix-themes dark"
          p="3"
        >
          <Flex justify="between" direction="column" style={{ height: "100%" }}>
            <Text as="div" size="2" weight="medium">
              Håvard Holen
            </Text>
            <Box>
              <Flex gap="1">
                <Text as="div" size="1">
                  <Link href="#" highContrast>
                    #PROXI
                  </Link>
                </Text>
                <Text as="div" size="1">
                  <Link href="#" highContrast>
                    #NAVA
                  </Link>
                </Text>
                <Text as="div" size="1">
                  <Link href="#" highContrast>
                    #SCATC
                  </Link>
                </Text>
              </Flex>
            </Box>

            <Flex
              justify="center"
              direction="column"
              style={{ marginTop: "auto" }}
            >
              <Box>
                <Flex justify="between" align="center">
                  <Text size="2">hholen@tickrpal.com</Text>
                  <IconButton
                    variant="ghost"
                    highContrast
                    size="1"
                    className="rt-IconButton"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </IconButton>
                </Flex>
              </Box>
              <Text size="2">Member since: 01 / 27 - 999</Text>
            </Flex>
          </Flex>
        </Box>

        {/* Actions */}
        <Flex justify="end" gap="3" className="rt-r-mt-6">
          <Button variant="outline" color="red">
            Edit
          </Button>
          <Button variant="solid">Done</Button>
        </Flex>
      </Box>
    </Card>
  );
};

export default CompanyCard;
