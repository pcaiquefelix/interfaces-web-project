import localFont from "next/font/local";
import "./globals.css";
import MainContent from "@/components/layout/Main";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Vivo Para Seu Negócio – Serviços Empresariais Vivo",
  description:
    "Projeto de reconstrução do site 'Vivo Para Seu Negócio – Serviços Empresariais Vivo', disponível em https://vivoparaseunegocio.com.br/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} vsc-initialized`}
        cz-shortcut-listen="true"
      >
        <Header />
        <MainContent children={children} />
        <Footer />
      </body>
    </html>
  );
}
