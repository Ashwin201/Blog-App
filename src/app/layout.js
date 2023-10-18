import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";
import ModeProvider from "@/provider/ModeProvider";
import AuthProvider from "@/provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This is a nextjs portfolio website with tailwind css. Author :Ashmin Sharma."
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ModeProvider>
            <div className="box">
              <div className="wrapper">
                <Navbar />
                <div className="mt-10 mb-12 ">{children}</div>
                <Footer />
              </div>
            </div>
          </ModeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
