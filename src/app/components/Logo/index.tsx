// Logo.tsx
import React from "react";
import classNames from "classnames";
import styles from "./Logo.module.scss";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      className={classNames(styles.root, className)}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.pathPrimary}
        d="M22.13 15.8765C22.13 18.5204 21.6526 20.8052 20.6979 22.731C19.7432 24.6567 18.4335 26.1418 16.7689 27.1863C15.1042 28.2308 13.2029 28.7531 11.065 28.7531C8.92707 28.7531 7.02579 28.2308 5.36114 27.1863C3.69649 26.1418 2.38681 24.6567 1.43209 22.731C0.477362 20.8052 0 18.5204 0 15.8765C0 13.2327 0.477362 10.9479 1.43209 9.0221C2.38681 7.09634 3.69649 5.61121 5.36114 4.56673C7.02579 3.52224 8.92707 3 11.065 3C13.2029 3 15.1042 3.52224 16.7689 4.56673C18.4335 5.61121 19.7432 7.09634 20.6979 9.0221C21.6526 10.9479 22.13 13.2327 22.13 15.8765Z"
      />
      <path
        className={styles.pathPrimary}
        d="M17.8325 6L21.4395 12.8686L25.136 6H30.7255L25.0337 15.8232L30.879 25.6464H25.3151L21.4395 18.8546L17.6279 25.6464H12L17.8325 15.8232L12.2047 6H17.8325Z"
      />
    </svg>
  );
};

export default Logo;
