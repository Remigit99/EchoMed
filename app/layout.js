import { Poppins } from "next/font/google";
import "./globals.css";

import DynamicNavLayout from "@/components/DynamicNavLayout/DynamicNavLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "EchoMed App",
  description: "EchoMed is a next Generation Telemedicine App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <DynamicNavLayout>{children}</DynamicNavLayout>
      </body>
    </html>
  );
}
