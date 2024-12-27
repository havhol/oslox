import { Card, Code } from "@radix-ui/themes";
import React from "react";
import styles from "./Codeblock.module.scss";

export default function index() {
  return (
    <Card size="2">
      <div className={styles.highlightLine1}>
        <Code>
          <span className={styles.module}>import </span>
          <span className={styles.string}>&quot;@oslox.css&quot;</span>
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
          <span className={styles.string}>&quot;@oslox/workforce&quot;</span>
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
      <div className={styles.highlightLine3}>
        <Code>
          <span className={styles.module}>{"</Theme>"}</span>
        </Code>
      </div>
      <div className={styles.highlightLine3}>
        <Code>
          <span className={styles.module}>{";)>"}</span>
        </Code>
      </div>
    </Card>
  );
}
