import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metropolis = localFont({
  src: [
    {
      path: "../public/assets/fonts/Metropolis/Metropolis-Thin.otf",
      weight: "100",
    },
    {
      path: "../public/assets/fonts/Metropolis/Metropolis-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Metropolis/Metropolis-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Metropolis/Metropolis-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Metropolis/Metropolis-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Metropolis/Metropolis-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Metropolis/Metropolis-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Metropolis/Metropolis-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Metropolis/Metropolis-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-metropolis",
});
