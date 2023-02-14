import Layout from "@/components/layouts/Layout";
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import SEO from '../config/next-seo.config'
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider attribute="class">
      <AuthProvider>
        <DefaultSeo {...SEO} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
}
