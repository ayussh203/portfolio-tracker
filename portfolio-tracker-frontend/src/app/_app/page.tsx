
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "@/hooks/useAuth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </NextUIProvider>
  );
}

export default MyApp;
