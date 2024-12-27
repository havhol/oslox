import { Theme } from "@radix-ui/themes";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Example footer component

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
          <Header />
          {children}
          {/* <Footer /> */}
        </Theme>
      </body>
    </html>
  );
}
