import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import TempValueProvider from "@/components/utils/contextAPI/TempValueContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Organizer Zone",
  description: "This is the organizer event zone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <TempValueProvider>
          <MantineProvider defaultColorScheme="auto">
            {children}
          </MantineProvider>
        </TempValueProvider>
      </body>
    </html>
  );
}
