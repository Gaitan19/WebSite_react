import "swiper/css";
import "@/styles/scss/main.scss";
import { Open_Sans as OpenSans } from "next/font/google";

const openSans = OpenSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  adjustFontFallback: false,
});

export default function App({ Component, pageProps }) {
  return (
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
