import { Inter, Quicksand } from "next/font/google";
import "./globals.css";


const quickSand = Quicksand({ 
subsets: ["latin"],
weight: ["300", "400", "500", "600", "700"]
 });

export const metadata = {
  title: "EchoMed App",
  description: "EchoMed is a next Generation Telemedicine App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quickSand.className}>{children}</body>
    </html>
  );
}
