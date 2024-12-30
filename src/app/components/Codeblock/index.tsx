import { Card, Code, Text } from "@radix-ui/themes";
import React from "react";
import styles from "./Codeblock.module.scss";

const Codeblock = () => {
  return (
    <Card size="2">
      <Text size="2" style={{ lineHeight: "1.65" }}>
        <div className={styles.highlightLine1}>
          <Code variant="ghost">
            <span className={styles.pinkish}>import </span>
            <span className={styles.purpleish}>&quot;@oslox.css&quot;</span>
            <span className={styles.string}>;</span>
          </Code>
        </div>
        <div className={styles.highlightLine2} style={{ marginBottom: "10px" }}>
          <Code variant="ghost">
            <span className={styles.pinkish}>import </span>
            <span className={styles.string}>{"{ "}</span>
            <span className={styles.string}>Theme</span>
            <span className={styles.string}>, </span>
            <span className={styles.string}>Builder </span>
            <span className={styles.string}>{"} "}</span>
            <span className={styles.pinkish}>from </span>
            <span className={styles.purpleish}>
              &quot;@oslox/workforce&quot;
            </span>
            <span className={styles.punctuation}>;</span>
          </Code>
        </div>
        <div className={styles.highlightLine3}>
          <Code variant="ghost">
            <span className={styles.pinkish}>export default </span>
            <span className={styles.string}>{"() "}</span>
            <span className={styles.pinkish}>{"=> "}</span>
            <span className={styles.string}>{"("}</span>
          </Code>
        </div>
        <div className={styles.highlightLine4} style={{ paddingLeft: "15px" }}>
          <Code variant="ghost">
            <span className={styles.string}>{"<"}</span>
            <span className={styles.blueish}>{"Theme"}</span>
            <span className={styles.string}>{">"}</span>
          </Code>
        </div>
        <div className={styles.highlightLine4} style={{ paddingLeft: "30px" }}>
          <Code variant="ghost">
            <span className={styles.string}>{"<"}</span>
            <span className={styles.blueish}>{"Builder"}</span>
            <span className={styles.string}>{">"}</span>
            <span className={styles.string}>{"Ready, set, build!😎"}</span>
            <span className={styles.string}>{"</"}</span>
            <span className={styles.blueish}>{"Builder"}</span>
            <span className={styles.string}>{">"}</span>
          </Code>
        </div>
        <div className={styles.highlightLine5} style={{ paddingLeft: "15px" }}>
          <Code variant="ghost">
            <span className={styles.string}>{"</"}</span>
            <span className={styles.blueish}>{"Theme"}</span>
            <span className={styles.string}>{">"}</span>
          </Code>
        </div>
        <div className={styles.highlightLine6}>
          <Code variant="ghost">
            <span className={styles.string}>{")>"}</span>
          </Code>
        </div>
      </Text>
    </Card>
  );
};

export default Codeblock;
