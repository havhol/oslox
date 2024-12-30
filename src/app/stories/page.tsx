"use client";
import { Box, Section } from "@radix-ui/themes";
import ArticleLayout from "@/components/Article";
import styles from "./Stories.module.scss";

const Stories = () => {
  return (
    <div className={styles.articleRoot}>
      <div className={styles.articleContainer}>
        <Box className={styles.articleMain}>
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
            <ArticleLayout
              title="OsloX Aiming For Smarter Decisions."
              introduction="At Grünerløkka, one of Oslo's most creative and vibrant neighborhoods, you'll find OsloX — a tech startup of innovative and tech-savvy minds developing tomorrow's stock trading platform. OsloX are aiming for smarter decisions and better investments. "
              date="December 26, 2024"
              tags={[]}
              author={{
                name: "Håvard Holen",
                position: "Co-Founder OsloX",
                image: "/images/co-founder-holen-alt.jpeg",
              }}
              sections={[
                {
                  title: "Technology Developed By Traders",
                  content:
                    "At OsloX, we’re more than just software engineers—we’re active traders in the stock market. Our hands-on experience gives us a deep understanding of market trends, from major economic shifts to subtle micro-movements. This enables us to build tools that simplify complex data, delivering clear, actionable insights for investors, with a new level of user experience compared to peers.",
                },
                {
                  title: "Insights That Drive Decisions",
                  content:
                    "Every day, investors and traders encounter a sea of metadata from the stock market. It’s more than just numbers — it’s patterns, signals, and stories often lost in the complexity. At OsloX, we’ve made it our mission to structure this information, and turn it into a new and meaningful data foundation. Our goal is clear: to provide investors with the insights and tools they need to make better, smarter decisions. Whether you trade daily or build long-term portfolios, our solutions can be the key factor in your investment strategy.",
                },
                {
                  title: "Tickrpal",
                  content:
                    "Our latest app, Tickrpal, is currently under development and will undergo rigorous testing throughout 2025 before its official launch. Tickrpal is designed to transform the chaotic data streams into intuitive and easily digestible insights. We’re excited to share more soon.",
                },
              ]}
            />
          </Section>
        </Box>
      </div>
    </div>
  );
};

export default Stories;
