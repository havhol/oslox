"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button, Flex, Heading, IconButton } from "@radix-ui/themes";
import styles from "./Header.module.scss";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { useEffect, useState } from "react";
import Logo from "../Logo";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname(); // Use usePathname to get the current route

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    const initialTheme = storedTheme || "light";
    document.documentElement.className = initialTheme;
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // Determine the button text and href dynamically
  const isStoriesPage = pathname === "/stories";
  const buttonText = isStoriesPage ? "Home" : "Our story";
  const buttonHref = isStoriesPage ? "/" : "/stories";

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Flex align="center" style={{ width: "24px" }}>
          <Logo />
        </Flex>

        <Heading size="4">
          <Link href="/" className={styles.logoLink}>
            OsloX
          </Link>
        </Heading>
      </div>
      <div className={styles.actions}>
        <nav className={styles.nav}>
          <Button size="2" variant="soft" highContrast asChild>
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
          <IconButton radius="full" variant="ghost" onClick={toggleTheme}>
            {theme === "light" ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </nav>
      </div>
    </header>
  );
}
