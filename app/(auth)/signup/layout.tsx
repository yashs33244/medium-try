
import { Inter } from "next/font/google";

import { NavComp } from "@/components/nav-comp2";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {NavComp()}
        {children}
      </body>
    </html>
  );
}
