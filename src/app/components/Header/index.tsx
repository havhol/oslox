"use client";

import {
  MagnifyingGlassIcon,
  MoonIcon,
  QuestionMarkCircledIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Button, Heading, IconButton } from "@radix-ui/themes";
import styles from "./Header.module.scss";

import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    const initialTheme = storedTheme || "light";
    document.documentElement.className = initialTheme; // Set theme class on <html>
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.className = newTheme; // Update <html> class
    localStorage.setItem("theme", newTheme); // Save preference in localStorage
    setTheme(newTheme);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Heading size="4">OsloX</Heading>
      </div>
      <div className={styles.actions}>
        <nav className={styles.nav}>
          {/* Theme Toggle */}
          <Button size="1" variant="soft" color="gray">
            Read our Blog
          </Button>
          <IconButton radius="full" variant="ghost" onClick={toggleTheme}>
            {theme === "light" ? <SunIcon /> : <MoonIcon />}
          </IconButton>
          <IconButton variant="ghost">
            <QuestionMarkCircledIcon />
          </IconButton>
        </nav>
      </div>
    </header>
  );
}
