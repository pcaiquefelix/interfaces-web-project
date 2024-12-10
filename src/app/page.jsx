import React from "react";
import styles from "./page.module.css";
import Container from "@/components/Container";
import { features } from "process";

export default function Home() {
  const nossosPlanos = [
    {
      name: "Internet Dedicada Light",
      features: [
        "Roteador de Banda Larga",
        "Conexão full e simétrica (full duplex)",
      ],
      ipAddresses: "1 Endereço IP Público\n(IP WAN/31)",
    },
    {
      name: "Internet Dedicada",
      features: [
        "Roteador robusto",
        "Visualização e controle da rede de dados",
        "Acesso a relatórios de desempenho dos links",
      ],
      ipAddresses: "Range 8 IPs LAN\n(/29 – 6 IPs utilizáveis)",
    },
  ];
  const internetDedicadaLight = [
    {
      megaSpeed: "100 Mega",
      price: "469,00",
      description: "Instalação e Wi-Fi Grátis<br>Conexão exclusiva",
      features: [
        "Conexão full e simétrica (full duplex)",
        "Disponibilidade de serviço de 99,96%",
        "Tempo máximo para reparos críticos de 4h a 6h",
      ],
    },
    {
      megaSpeed: "200 Mega",
      price: "839,00",
      description: "Instalação e Wi-Fi Grátis<br>Conexão exclusiva",
      features: [
        "Conexão full e simétrica (full duplex)",
        "Disponibilidade de serviço de 99,96%",
        "Tempo máximo para reparos críticos de 4h a 6h",
      ],
    },
    {
      megaSpeed: "300 Mega",
      price: "1.199,00",
      description: "Instalação e Wi-Fi Grátis<br>Conexão exclusiva",
      features: [
        "Conexão full e simétrica (full duplex)",
        "Disponibilidade de serviço de 99,96%",
        "Tempo máximo para reparos críticos de 4h a 6h",
      ],
    },
    {
      megaSpeed: "400 Mega",
      price: "1.499,00",
      description: "Instalação e Wi-Fi Grátis<br>Conexão exclusiva",
      features: [
        "Conexão full e simétrica (full duplex)",
        "Disponibilidade de serviço de 99,96%",
        "Tempo máximo para reparos críticos de 4h a 6h",
      ],
    },
  ];
  const internetDedicada = [
    {
      megaSpeed: "20 Mega",
      price: "469,00",
      description: "Instalação e Wi-Fi Grátis<br>Conexão exclusiva",
      features: [
        "Conexão full e simétrica (full duplex)",
        "Disponibilidade de serviço de 99,96%",
        "Tempo máximo para reparos críticos de 4h a 6h",
        "8 IPs (6 IPs utilizáveis)",
      ],
    },
    {
      megaSpeed: "50 Mega",
      price: "769,00",
      description: "Instalação e Wi-Fi Grátis<br>Conexão exclusiva",
      features: [
        "Conexão full e simétrica (full duplex)",
        "Disponibilidade de serviço de 99,96%",
        "Tempo máximo para reparos críticos de 4h a 6h",
        "8 IPs (6 IPs utilizáveis)",
      ],
    },
    {
      megaSpeed: "100 Mega",
      price: "929,00",
      description: "Instalação e Wi-Fi Grátis<br>Conexão exclusiva",
      features: [
        "Conexão full e simétrica (full duplex)",
        "Disponibilidade de serviço de 99,96%",
        "Tempo máximo para reparos críticos de 4h a 6h",
        "8 IPs (6 IPs utilizáveis)",
      ],
    },
    {
      megaSpeed: "200 Mega",
      price: "1.299,00",
      description: "Instalação e Wi-Fi Grátis<br>Conexão exclusiva",
      features: [
        "Conexão full e simétrica (full duplex)",
        "Disponibilidade de serviço de 99,96%",
        "Tempo máximo para reparos críticos de 4h a 6h",
        "8 IPs (6 IPs utilizáveis)",
      ],
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.pageHeader}>
        <h1>Internet Dedicada</h1>
        <h3>
          Link dedicado com alto desempenho, entregando a mesma velocidade em
          download e upload. Conte também com gestão de link e alta
          disponibilidade de serviço.
        </h3>
      </div>

      <div className={styles.plansInfo}>
        <h2>Nossos Planos</h2>
        <div className={styles.planInfo}>
          {nossosPlanos.map((plan, index) => (
            <Container
              key={index}
              componentStructure={
                <div className={styles.planContainer}>
                  <div className={styles.planInfoHeader}>
                    <h4 className={styles.planTitle}>{plan.name} Mega</h4>
                  </div>
                  <div className={styles.planDetails}>
                    {plan.features.map((feature, index) => (
                      <div key={index} className={styles.detailItem}>
                        <p>{feature}</p>
                      </div>
                    ))}
                    <p>{plan.ipAddresses}</p>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>

      <div className={styles.plansWrapper}>
        <h2>Internet Dedicada Light</h2>
        <div className={styles.planInfo}>
          {internetDedicadaLight.map((plan, index) => (
            <Container
              key={index}
              componentStructure={
                <>
                  <div className={styles.planHeader}>
                    <h4 className={styles.planTitle}>{plan.megaSpeed} Mega</h4>
                    <p className={styles.planDescription}>
                      {plan.description.split("<br>").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index <
                            plan.description.split("<br>").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                    <p className={styles.planPrice}>R${plan.price}/mês</p>
                    <a
                      href="https://wa.me/5579999073364"
                      className={styles.contractButton}
                    >
                      Contrate Agora
                    </a>
                  </div>
                  <div className={styles.planDetails}>
                    {plan.features.map((feature, index) => (
                      <div key={index} className={styles.detailItem}>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </>
              }
            />
          ))}
        </div>
      </div>

      <div className={styles.plansWrapper}>
        <h2>Internet Dedicada</h2>
        <div className={styles.planInfo}>
          {internetDedicada.map((plan, index) => (
            <Container
              key={index}
              componentStructure={
                <>
                  <div className={styles.planHeader}>
                    <h4 className={styles.planTitle}>{plan.megaSpeed} Mega</h4>
                    <p className={styles.planDescription}>
                      {plan.description.split("<br>").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index <
                            plan.description.split("<br>").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                    <p className={styles.planPrice}>R${plan.price}/mês</p>
                    <a
                      href="https://wa.me/5579999073364"
                      className={styles.contractButton}
                    >
                      Contrate Agora
                    </a>
                  </div>
                  <div className={styles.planDetails}>
                    {plan.features.map((feature, index) => (
                      <div key={index} className={styles.detailItem}>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </>
              }
            />
          ))}
        </div>
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
