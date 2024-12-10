import ImageCarousel from "../ImageCarousel";
import styles from "./Main.module.css";

const MainContent = ({ children }) => {
  const bannerImages = [
    {
      src: "/assets/img/Oferta-Vivo-Movel-Empresas-40-GIGAS.png",
      alt: "Oferta Móvel Empresas 40GB",
    },
    {
      src: "/assets/img/Oferta-Vivo-Total-Empresas-Movel-e-Fibra.png",
      alt: "Oferta Vivo Total Empresas",
    },
    {
      src: "/assets/img/Vivo-Fibra-Empresas-1.webp",
      alt: "Vivo Fibra Empresas",
    },
  ];
  return (
    <main className={styles.main}>
      <ImageCarousel images={bannerImages} />
      <div>{children}</div>
    </main>
  );
};

export default MainContent;
