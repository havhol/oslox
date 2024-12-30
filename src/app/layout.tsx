import Header from "@/components/Header";
import { Theme } from "@radix-ui/themes";
import SeoContent from "./components/SeoContent";
import "./globals.css";

export const metadata = {
  title: "OsloX",
  description: "Appmakers & Beerdrinkers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--primary-bg)] text-[var(--primary-text)]">
        <Theme>
          <SeoContent />
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  );
}
