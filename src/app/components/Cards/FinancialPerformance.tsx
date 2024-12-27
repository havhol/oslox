import React from "react";
import {
  Card,
  Heading,
  Text,
  Flex,
  Box,
  Separator,
  Badge,
  Button,
  Grid,
} from "@radix-ui/themes"; // Replace with your actual imports

const FinancialPerformance = () => {
  const metrics = [
    { label: "MRR", value: "$350K", change: "3.2%", accent: "teal" },
    { label: "OpEx", value: "$211K", change: "12.8%", accent: "red" },
    { label: "CapEx", value: "$94K", change: "8.8%", accent: "teal" },
    { label: "GPM", value: "44.6%", change: "1.2%", accent: "red" },
    { label: "NPM", value: "9.1%", change: "0.0%", accent: "gray" },
    { label: "EBITDA", value: "$443K", change: "4.1%", accent: "teal" },
    { label: "CAC", value: "$146", change: "11.0%", accent: "teal" },
    { label: "LTV", value: "$1,849", change: "3%", accent: "teal" },
    { label: "Churn", value: "12.4%", change: "1.1%", accent: "red" },
  ];

  return (
    <Card size="4" variant="surface">
      <Flex justify="space-between" align="center" className="rt-r-mb-2">
        <Heading size="6">Financial performance</Heading>
        <Flex gap="2">
          <Button variant="ghost" size="2" highContrast>
            {/* Icon for the first button */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738"
                fill="currentColor"
              />
            </svg>
          </Button>
          <Button variant="ghost" size="2" highContrast>
            {/* Icon for the second button */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3285 1.13607C10.1332 0.940809 9.81662 0.940808 9.62136 1.13607C9.42609 1.33133 9.42609 1.64792 9.62136 1.84318L10.2744 2.49619L5.42563 6.13274L4.31805 5.02516C4.12279 4.8299 3.80621 4.8299 3.61095 5.02516C3.41569 5.22042 3.41569 5.537 3.61095 5.73226L5.02516 7.14648L6.08582 8.20714L2.81545 11.4775C2.62019 11.6728 2.62019 11.9894 2.81545 12.1846C3.01072 12.3799 3.3273 12.3799 3.52256 12.1846L6.79293 8.91425L7.85359 9.97491L9.2678 11.3891C9.46306 11.5844 9.77965 11.5844 9.97491 11.3891C10.1702 11.1939 10.1702 10.8773 9.97491 10.682L8.86733 9.57443L12.5039 4.7257L13.1569 5.37871C13.3522 5.57397 13.6687 5.57397 13.864 5.37871C14.0593 5.18345 14.0593 4.86687 13.864 4.6716L12.8033 3.61094L11.3891 2.19673L10.3285 1.13607ZM6.13992 6.84702L10.9887 3.21047L11.7896 4.01142L8.15305 8.86015L6.13992 6.84702Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </Flex>
      </Flex>
      <Text size="2" color="gray" className="rt-r-mb-6">
        Review your company’s KPIs compared to the month before.
      </Text>
      <Grid columns="3" gap="5">
        {metrics.map((metric, index) => (
          <Box key={index}>
            <Flex align="center" gap="2" className="rt-r-mb-2">
              <Text size="2" color="gray">
                {metric.label}
              </Text>
              <Badge size="1" variant="soft" radius="full">
                {metric.change}
              </Badge>
            </Flex>
            <Text size="8" weight="bold" className="rt-r-mb-2">
              {metric.value}
            </Text>
          </Box>
        ))}
      </Grid>
    </Card>
  );
};

export default FinancialPerformance;
