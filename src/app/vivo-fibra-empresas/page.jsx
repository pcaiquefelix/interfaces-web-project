import React from "react";
import styles from "./InternetPlans.module.css";
import Container from "@/components/Container";

const InternetPlanCard = ({ megaSpeed, price, description, features }) => {
  return (
    <div className={styles.planContainer}>
      <Container
        componentStructure={
          <>
            <div className={styles.planHeader}>
              <h4 className={styles.planTitle}>{megaSpeed} Mega</h4>
              <p className={styles.planDescription}>
                {description.split("<br>").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < description.split("<br>").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              <p className={styles.planPrice}>R${price}/mês</p>
              <a
                href="https://wa.me/5579999073364"
                className={styles.contractButton}
              >
                Contrate Agora
              </a>
            </div>
            <div className={styles.planDetails}>
              {features.map((feature, index) => (
                <div key={index} className={styles.detailItem}>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </>
        }
      />
    </div>
  );
};

export default function InternetPlans() {
  const plans = [
    {
      megaSpeed: "200",
      price: "89,99",
      description: "Instalação e Wi-Fi Grátis<br>Fibra Ótica de ponta a ponta",
      features: [
        "Download até 200 Mega",
        "Upload até 100 Mega",
        "Vivo Cloud",
        "300GB de armazenamento",
        "Vivo Protege",
        "Soluções de segurança Web e Wi-Fi seguro",
      ],
    },
    {
      megaSpeed: "400",
      price: "99,99",
      description: "Instalação e Wi-Fi Grátis<br>Fibra Ótica de ponta a ponta",
      features: [
        "Download até 200 Mega",
        "Upload até 100 Mega",
        "Vivo Cloud",
        "300GB de armazenamento",
        "Vivo Protege",
        "Soluções de segurança Web e Wi-Fi seguro",
      ],
    },
    {
      megaSpeed: "500",
      price: "109,99",
      description: "Instalação e Wi-Fi Grátis<br>Conexão exclusiva",
      features: [
        "Download até 200 Mega",
        "Upload até 100 Mega",
        "Vivo Cloud",
        "300GB de armazenamento",
        "Vivo Protege",
        "Soluções de segurança Web e Wi-Fi seguro",
      ],
    },
    {
      megaSpeed: "600",
      price: "139,99",
      description: "Instalação e Wi-Fi Grátis<br>Conexão exclusiva",
      features: [
        "Download até 200 Mega",
        "Upload até 100 Mega",
        "Vivo Cloud",
        "300GB de armazenamento",
        "Vivo Protege",
        "Soluções de segurança Web e Wi-Fi seguro",
      ],
    },
    {
      megaSpeed: "700",
      price: "199,99",
      description: "Instalação e Wi-Fi Grátis<br>Conexão exclusiva",
      features: [
        "Download até 200 Mega",
        "Upload até 100 Mega",
        "Vivo Cloud",
        "300GB de armazenamento",
        "Vivo Protege",
        "Soluções de segurança Web e Wi-Fi seguro",
      ],
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.plansWrapper}>
        {plans.map((plan, index) => (
          <InternetPlanCard
            key={index}
            megaSpeed={plan.megaSpeed}
            price={plan.price}
            description={plan.description}
            features={plan.features}
          />
        ))}
      </div>

      <section className={styles.section}>
        <hr className={styles.hr} />
        <div className={styles.div_p}>
          <p className={styles.p}>
            Serviços sujeitos a viabilidade técnica. Entre em contato conosco
            para verificar a cobertura na sua região.
          </p>
        </div>
      </section>

      <div className={styles["variable-footer"]}>
        <div>
          <img
            src="/assets/img/vivo-fibra-estabilidade-conexao-notebook-verde-320x320-1.png"
            alt="Logo 1"
            className={styles.logo}
          />
          <p>Instalação e Wi-Fi grátis</p>
        </div>
        <div>
          <img
            src="/assets/img/vivo-computador-velocidade-purpura-esquerda-320x320-1.png"
            alt="Parceiro Autorizado"
            className={styles.logo}
          />
          <p>Ultravelocidade na sua conexão</p>
        </div>
      </div>
    </div>
  );
}
