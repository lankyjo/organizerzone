import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Geist, Geist_Mono, Poppins, Roboto, Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import TempValueProvider from "@/components/utils/contextAPI/TempValueContext";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-poppins", // Define CSS variable
// });

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-roboto",
// });

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
      <body
        // className={`${poppins.variable} ${roboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        className={inter.variable}
      >
        <TempValueProvider>
          <MantineProvider defaultColorScheme="auto">
            {children}
          </MantineProvider>
        </TempValueProvider>
      </body>
    </html>
  );
}
