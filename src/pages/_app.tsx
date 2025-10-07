// src/pages/_app.tsx
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const hideChrome = pathname === "/"; // hide on the index page only

  return (
    <div className="min-h-dvh flex flex-col">
      {!hideChrome && <Header />}
      <main className="flex-1 mx-auto w-full">
        <Component {...pageProps} />
      </main>
      {!hideChrome && <Footer />}
    </div>
  );
}
