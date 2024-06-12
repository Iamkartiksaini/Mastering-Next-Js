import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

const title = "Mastering Next JS (App Router)";
const description =
  "Unlock the full potential of Next.js with our comprehensive guide to mastering this cutting-edge React framework. Dive deep into Next.js's robust capabilities for server-side rendering, client-side routing, and static site generation, empowering you to build lightning-fast, SEO-friendly web applications. From fundamental principles to advanced techniques, elevate your development skills and harness the power of Next.js to create modern, scalable, and performant web experiences. Whether you're a seasoned developer or just starting out, our expert-led tutorials, practical examples, and hands-on exercises will equip you with the knowledge and confidence to become a Next.js master";

export const metadata = {
  title,
  description,
  icons: "/favicon.ico",
  keywords: [
    "nextjs",
    "nextjs14",
    "next14",
    "pwa",
    "next-pwa",
    "redux_toolkit",
    "parallel_routing",
  ],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  // manifest: "/manifest.json",
  authors: [
    { name: "Kartik Saini", url: "https://thread-app-kartik.netlify.app" },
  ],
  creator: "Kartik Saini",
  // viewport:
  // "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  // icons: [
  //   { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
  //   { rel: "icon", url: "icons/icon-128x128.png" },
  // ],
  twitter: {
    title,
    description,
  },
  openGraph: {
    images: [
      {
        url: "https://thread-app-kartik.netlify.app/logo-2.png",
        width: 100,
        height: 100,
        alt: "Website Logo",
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="main-container">{children}</div>
      </body>
    </html>
  );
}
