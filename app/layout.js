// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Splito",
  description: "The smartest way to split your expenses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated">
      <head>
        <link rel="icon" href="/logos/logo-s.png" sizes="any" />
      </head>
      {/* <body className={`${inter.className}`}> */}
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
