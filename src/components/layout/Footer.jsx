import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer-wrap"]}>
      <div className={styles.footerContainer}>
        <h3 className={styles.title}>
          Quer mais informações? Entre em contato agora
        </h3>

        <div className={styles.buttonContainer}>
          <a
            href="https://wa.me/5579999073364"
            className={styles.consultorButton}
          >
            Falar com um Consultor
          </a>
        </div>
      </div>
      <div className={styles.footerContainer2}>
        <div className={styles.imageContainer}>
          <img
            src="/images/footer-vivo.png"
            alt="Vivo Footer"
            className={styles.footerImage}
          />
        </div>

        <div className={styles.buttonsContainer}>
          <a
            href="https://vivoparaseunegocio.com.br/vivo-fibra-empresas/"
            className={styles.button}
          >
            Banda Larga
          </a>
          <a
            href="https://vivoparaseunegocio.com.br/vivo-total-empresas/"
            className={styles.button}
          >
            Combos
          </a>
          <a
            href="https://vivoparaseunegocio.com.br/vivo-movel-empresas/"
            className={styles.button}
          >
            Planos Móveis
          </a>
        </div>

        <div className={styles.socialContainer}>
          <a
            href="https://wa.me/5579999073364"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <img src="/icons/whatsapp.svg" alt="WhatsApp" />
          </a>
          <a
            href="https://www.instagram.com/multtlink_vivoempresas/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/autorizada.multtlink?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
        </div>
      </div>
      <div className={styles.footerContainer3}>
        <div className={styles.logoContainer}>
          <img src="/images/logo1.png" alt="Logo 1" className={styles.logo} />
          <img
            src="/images/logo-parceiro.webp"
            alt="Parceiro Autorizado"
            className={styles.logo}
          />
          <img
            src="/images/logo-5g.webp"
            alt="5G Logo"
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
