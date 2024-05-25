
import { Inter } from "next/font/google";

import { navComp } from "@/components/nav-comp";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {navComp()}
        {children}
      </body>
    </html>
  );
}
