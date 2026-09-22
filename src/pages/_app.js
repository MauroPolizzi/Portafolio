import "@/styles/globals.css";
import "../assets/css/tailwind.css";
import "../assets/css/materialdesignicons.min.css";
import { I18nextProvider } from "react-i18next";
import i18n from "../translate/i18n";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

// Google Analytics. El ID es público (viaja en el HTML), no es un secreto.
// Solo se carga en la build de producción para no contar las visitas locales.
const GA_MEASUREMENT_ID = "G-066MCSV5X8";
const isProduction = process.env.NODE_ENV === "production";

export default function App({ Component, pageProps }) {
  return (
    <>
      {isProduction && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');`}
          </Script>
        </>
      )}
      <main
        className={`${poppins.variable} font-poppins text-base text-black dark:text-white dark:bg-slate-900 `}
      >
        <I18nextProvider i18n={i18n}>
          <Toaster
            toastOptions={{
              style: {
                background: "#0f172a",
                color: "#fff",
                border: "1px solid #ffa80f",
                padding: "1rem",
              },
              error: {
                icon: "⚠️",
              },
              success: {
                icon: "👏",
              },
              duration: 3000,
            }}
          />
          <Component {...pageProps} />
        </I18nextProvider>
      </main>
    </>
  );
}
