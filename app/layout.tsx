import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Matthew Christian Susanto",
    template: "%s | Matthew Christian Susanto",
  },
  description: "Esa Unggul University Third Year Student",
  openGraph: {
    title: "Matthew Christian Susanto",
    description:
      "Third year software engineer university student",
    url: "https://matthewchristian.vercel.app/",
    siteName: "matthewchristian.com",
    images: [
      {
        url: "/favicon.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/webicon.png",
  },
  keywords: [
    "Matthew Christian Susanto",
    "Matthew Christian Susanto Esa Unggul",
    "Matthew Christian",
  ]
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
        <meta name="google-site-verification" content="vxD3Xb--Dc969LW1uc_tRE-9xEd8p00s08VFTJmAUoY" />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
