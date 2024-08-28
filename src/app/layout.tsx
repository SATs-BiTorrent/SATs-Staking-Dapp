import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@/app/thirdweb";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SATs (BitTorrent) Staking Dapp",
  description: "The SATs (BitTorrent) project is a creator’s token initiative aimed at rewarding users and fans across decentralized platforms, social media, and peer-to-peer interactions. This project is built on the BitTorrent blockchain and focuses on fostering engagement and appreciation within communities without financial expectations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
          {children}
        </ThirdwebProvider>
      </body>
    </html>

    
  );
}
