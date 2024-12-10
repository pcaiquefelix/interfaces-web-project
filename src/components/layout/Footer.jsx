import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

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
            src="/assets/img/footer-vivo-pra-tudo-808x480-1.png"
            alt="Vivo Footer"
            className={styles.footerImage}
          />
        </div>

        <div className={styles.buttonsContainer}>
          <a
            href="https://vivoparaseunegocio.com.br/vivo-fibra-empresas/"
            className={styles["footer-link"]}
          >
            Banda Larga
          </a>
          <a
            href="https://vivoparaseunegocio.com.br/vivo-total-empresas/"
            className={styles["footer-link"]}
          >
            Combos
          </a>
          <a
            href="https://vivoparaseunegocio.com.br/vivo-movel-empresas/"
            className={styles["footer-link"]}
          >
            Planos Móveis
          </a>
          <div className={styles.socialContainer}>
            <a
              href="https://wa.me/5579999073364"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.socialIcon}
                icon={faWhatsapp}
              />
            </a>
            <a
              href="https://www.instagram.com/multtlink_vivoempresas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.socialIcon}
                icon={faInstagram}
              />
            </a>
            <a
              href="https://www.facebook.com/autorizada.multtlink?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.socialIcon}
                icon={faFacebook}
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerContainer3}>
        <div className={styles.logoContainer}>
          <img
            src="/assets/img/4965ffb0_1.png"
            alt="Logo 1"
            className={styles.logo}
          />
          <img
            src="/assets/img/Logotipo-Vivo-Empresas-Parceiro-Autorizado-1.webp"
            alt="Parceiro Autorizado"
            className={styles.logo}
          />
          <img
            src="/assets/img/logo-5g-176x44-1.webp"
            alt="5G Logo"
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
