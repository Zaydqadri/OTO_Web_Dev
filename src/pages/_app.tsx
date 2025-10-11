import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Ontario Taraweeh Outreach</title>
        <meta name="description" content="Connecting Huffaz and Masajid across Ontario." />
        <link rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#021733" />
      </Head>

      <div className="min-h-dvh flex flex-col">
        <Header />
        <main className="flex-1 mx-auto w-full max-w-6xl p-4">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
