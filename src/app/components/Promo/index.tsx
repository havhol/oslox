"use client";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import {
  Badge,
  Box,
  Button,
  Card,
  Code,
  Flex,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import BackgroundSvg from "../BackgroundSvg";
import styles from "./Promo.module.scss";
import TeamManagement from "../Cards/TeamManagement";
import NotificationSettings from "../Cards/NotificationSettings";
import FinancialPerformance from "../Cards/FinancialPerformance";

const Promo = () => {
  return (
    <div className={styles.heroRoot}>
      <div className={styles.heroContent}>
        {/* background */}
        <div className={styles.heroBackground}>
          <BackgroundSvg />
        </div>
        <div className={styles.heroMain}>
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
                <Flex>
                  <Badge color="indigo" size="3" mb="2">
                    <LightningBoltIcon />
                    Appmakers & Beerdrinkers
                  </Badge>
                </Flex>
                <Box mb="5">
                  <Heading weight="medium" size="9">
                    Grünerløkka tech collective {""}
                    <Text as="span" size="9" color="indigo">
                      building really nice apps.
                    </Text>
                  </Heading>
                </Box>
              </Box>
              <Box style={{ maxWidth: "500px" }} mb="5">
                <Text mb="5" size="5">
                  An open source component library optimized for fast
                  development, easy maintenance, and accessibility. Just import
                  and go—no configuration required.
                </Text>
              </Box>
              <Box mb="5">
                <Card size="2">
                  <div className={styles.highlightLine1}>
                    <Code>
                      <span className={styles.module}>import </span>
                      <span className={styles.string}>
                        &quot;@oslox.css&quot;
                      </span>
                      <span className={styles.punctuation}>;</span>
                    </Code>
                  </div>
                  <div className={styles.highlightLine2}>
                    <Code>
                      <span className={styles.module}>import </span>
                      <span className={styles.foo}>{"{"}</span>
                      <span className={styles.foo}>Theme</span>
                      {""}
                      <span className={styles.foo}>,</span>
                      {""}
                      <span className={styles.foo}>Workhorse</span>
                      {""}
                      <span className={styles.foo}>{"}"}</span>
                      {""}
                      <span className={styles.string}>
                        &quot;@oslox/workforce&quot;
                      </span>
                      <span className={styles.punctuation}>;</span>
                    </Code>
                  </div>
                  <div className={styles.highlightLine3}>
                    <Code>
                      <span className={styles.module}>export default </span>
                      <span className={styles.foo}>{"()"}</span>
                      <span className={styles.foo}>{"=>"}</span>
                      <span className={styles.foo}>{"("}</span>
                    </Code>
                  </div>
                  <div className={styles.highlightLine3}>
                    <Code>
                      <span className={styles.module}>{"<Theme>"}</span>
                    </Code>
                  </div>
                  <div className={styles.highlightLine3}>
                    <Code>
                      <span className={styles.module}>
                        {"<Workhorse>Hey, let`s build 👋</Workhorse>"}
                      </span>
                    </Code>
                  </div>

                  {/* <div className={styles.highlightLine2}>
                    <span className={styles.module}>import </span>
                    <span className="token imports">
                        <span className="token punctuation">{</span> 
                        <span className="token maybe-class-name">Theme</span>
                        <span className="token punctuation">,</span> 
                        <span className="token maybe-class-name">Button</span> 
                        <span className="token punctuation">}</span>
                    </span> 
                    <span className="module">from</span> 
                    <span className="token string">"@radix-ui/themes"</span>
                    <span className="token punctuation">;</span>
                    </div> */}
                </Card>
              </Box>
              <Flex gap="5">
                <Button size="4">Get in touch</Button>
                <Button size="4" variant="soft">
                  Playground
                </Button>
              </Flex>
            </Section>
          </Box>
        </div>
        <div className={styles.heroShowcase}>
          <div className={styles.heroShowcaseInner}>
            <div>
              <div className={styles.heroShowcaseInnerScaled}>
                <Flex gap="6">
                  <Flex gap="6" direction="column">
                    <TeamManagement />
                    <NotificationSettings />
                    <TeamManagement />
                  </Flex>
                  <Flex gap="6" direction="column">
                    <FinancialPerformance />
                    <Card>asomething</Card>
                    <Card>asomething</Card>
                  </Flex>
                  <Flex gap="6" direction="column">
                    <Card>bsomething</Card>
                    <Card>bsomething</Card>
                    <Card>bsomething</Card>
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
