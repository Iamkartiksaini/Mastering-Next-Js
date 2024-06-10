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
  keywords: ["Next.js", "React", "JavaScript", "Thread", "Discuss"],
  authors: [
    { name: "Kartik Saini", url: "https://thread-app-kartik.netlify.app" },
  ],
  creator: "Kartik Saini",
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
