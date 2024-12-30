"use client";

import { CheckIcon, CopyIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  Box,
  Button,
  Callout,
  Flex,
  Heading,
  IconButton,
  Section,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";
import BackgroundSvg from "../BackgroundSvg";
import CompanyCard from "../Cards/Company";
import FinancialPerformance from "../Cards/FinancialPerformance";
import InvoicePaidCard from "../Cards/Invoice";
import NotificationSettings from "../Cards/NotificationSettings";
import RecentActivityCard from "../Cards/RecentActivity";
import SignUpCard from "../Cards/Signup";
import TeamManagement from "../Cards/TeamManagement";
import Codeblock from "../Codeblock";
import styles from "./Promo.module.scss";
import { useState } from "react";

const Promo = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@oslox.io").then(() => {
      setIsCopied(true);
      // setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className={styles.heroRoot}>
      <div className={styles.heroContent}>
        {/* background */}
        <div className={styles.heroBackground}>
          <BackgroundSvg />
        </div>
        <Box className={styles.heroMain}>
          <Box>
            <Section
              size={{
                initial: "2",
                md: "4",
                lg: "2",
              }}
              pb={{
                initial: "4",
                lg: "7",
              }}
            >
              <Box>
                <Box mb="5">
                  <Heading weight="medium" size={{ initial: "8", md: "9" }}>
                    Grünerløkka tech collective developing really nice apps.
                  </Heading>
                </Box>
              </Box>
              <Box style={{ maxWidth: "500px" }} mb="5">
                <Text mb="5" size={{ initial: "3", md: "5" }}>
                  OsloX creates modern tools for the finance market, combining
                  innovation and simplicity. Our latest app, Tickrpal, turns
                  market data into actionable insights—easy, fast, and
                  intuitive.
                </Text>
              </Box>
              <Box mb="5">
                <Codeblock />
              </Box>
              <Flex gap="5">
                <AlertDialog.Root>
                  <AlertDialog.Trigger>
                    <Button
                      size={{ initial: "3", sm: "4" }}
                      className={styles.solidButton}
                    >
                      Get in touch
                    </Button>
                  </AlertDialog.Trigger>
                  <AlertDialog.Content maxWidth="450px">
                    <AlertDialog.Title>Get in touch</AlertDialog.Title>
                    <Callout.Root className={styles.calloutRoot}>
                      <Flex
                        gap="12"
                        align="center"
                        justify="between"
                        width="100%"
                      >
                        <Flex>
                          <Callout.Icon style={{ marginRight: "12px" }}>
                            <InfoCircledIcon />
                          </Callout.Icon>
                          <Callout.Text>hello@oslox.io</Callout.Text>
                        </Flex>
                        <IconButton
                          onClick={handleCopy}
                          aria-label="Copy email"
                        >
                          {isCopied ? <CheckIcon /> : <CopyIcon />}
                        </IconButton>
                      </Flex>
                    </Callout.Root>
                    <Flex gap="3" mt="4" justify="end">
                      <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                          Got it
                        </Button>
                      </AlertDialog.Cancel>
                    </Flex>
                  </AlertDialog.Content>
                </AlertDialog.Root>
                <Button
                  size={{ initial: "3", sm: "4" }}
                  variant="surface"
                  highContrast
                  asChild
                >
                  <Link href="/stories">Read our story</Link>
                </Button>
              </Flex>
            </Section>
          </Box>
        </Box>
        <div className={styles.heroShowcase}>
          <div className={styles.heroShowcaseInner}>
            <div>
              <div className={styles.heroShowcaseInnerScaled}>
                <Flex gap="6">
                  <Flex gap="6" direction="column">
                    <TeamManagement />
                    <NotificationSettings />
                  </Flex>
                  <Flex gap="6" direction="column">
                    <FinancialPerformance />
                    <RecentActivityCard />
                    <SignUpCard />
                  </Flex>
                  <Flex gap="6" direction="column">
                    <InvoicePaidCard />
                    <CompanyCard />
                  </Flex>
                </Flex>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
