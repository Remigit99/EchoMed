import { Poppins } from "next/font/google";
import "./globals.css";

// import { UserProvider } from "./Context/AuthContext";
import { AuthProvider } from "./Context/AuthContext";

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
        <AuthProvider>
          <DynamicNavLayout>
            {/* <Navbar /> */}
            {children}
          </DynamicNavLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
