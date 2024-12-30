import React from "react";
import {
  Card,
  Heading,
  Text,
  Flex,
  Box,
  Separator,
  Switch,
} from "@radix-ui/themes"; // Replace with actual imports from your setup

const NotificationSettings = () => {
  const notificationSections = [
    {
      title: "Comments",
      description:
        "Receive notifications when someone comments on your documents or mentions you.",
    },
    {
      title: "Favorites",
      description:
        "Receive notifications when there is activity related to your favorited items.",
    },
    {
      title: "New documents",
      description:
        "Receive notifications whenever people on your team create new documents.",
    },
  ];

  const notificationTypes = [
    { label: "Push", state: true },
    { label: "Email", state: true },
    { label: "Slack", state: false },
  ];

  return (
    <Card size="4" variant="surface">
      <Heading size="6" className="rt-r-lt-start rt-r-mb-2">
        Tickrpal Notify
      </Heading>
      <Text size="2" color="gray" className="rt-r-mb-6">
        Manage your Tickrpal notification settings.
      </Text>

      <Box>
        <Separator size="4" orientation="horizontal" className="rt-r-my-5" />
      </Box>

      <Flex direction="column">
        {notificationSections.map((section, index) => (
          <React.Fragment key={index}>
            <Flex align="start" justify="between" gap="9">
              <Box>
                <Heading size="3" className="rt-r-mb-1">
                  {section.title}
                </Heading>
                <Text size="2" color="gray">
                  {section.description}
                </Text>
              </Box>
              <Flex direction="column" gap="4" className="rt-r-mt-1">
                {notificationTypes.map((type, idx) => (
                  <label
                    key={idx}
                    className="rt-Text rt-r-size-2 rt-r-weight-bold rt-Flex rt-r-gap-2"
                  >
                    <Switch
                      size="2"
                      variant="surface"
                      checked={type.state}
                      onCheckedChange={(newState) => {
                        console.log(`Switch ${type.label}:`, newState);
                      }}
                      className="rt-SwitchRoot"
                    />
                    <span>{type.label}</span>
                  </label>
                ))}
              </Flex>
            </Flex>

            {index < notificationSections.length - 1 && (
              <Box>
                <Separator
                  size="4"
                  orientation="horizontal"
                  className="rt-r-my-5"
                />
              </Box>
            )}
          </React.Fragment>
        ))}
      </Flex>
    </Card>
  );
};

export default NotificationSettings;
