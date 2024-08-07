import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { LoginCtxProvider } from "@/context/LoginCtx";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accelockia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <LoginCtxProvider>{children}</LoginCtxProvider>
      </body>
    </html>
  );
}
