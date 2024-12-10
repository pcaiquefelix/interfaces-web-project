import React from "react";
import styles from "./page.module.css";
import Container from "@/components/Container";

export default function InternetPlans() {
  const plans = [
    {
      mobilePlan: "6GB",
      price: "39,99",
      planInfo: "+ Ligações Ilimitadas",
      features: [
        "Melhor rede 5G do Brasil",
        "Eleita pelo prêmio P3 Mobile Bench",
        "Vivo Valoriza Empresas",
        "Benefícios exclusivos Vivo Empresas",
        "Vivo Gestão de Dispositivos",
        "Monitoramento dos dispositivos da empresa",
      ],
    },
    {
      mobilePlan: "15GB",
      price: "54,99",
      planInfo: "+ Ligações Ilimitadas",
      features: [
        "Melhor rede 5G do Brasil",
        "Eleita pelo prêmio P3 Mobile Bench",
        "Vivo Valoriza Empresas",
        "Benefícios exclusivos Vivo Empresas",
        "Vivo Gestão de Dispositivos",
        "Monitoramento dos dispositivos da empresa",
      ],
    },
    {
      mobilePlan: "20GB",
      price: "59,99",
      planInfo: "+ Ligações Ilimitadas",
      features: [
        "Melhor rede 5G do Brasil",
        "Eleita pelo prêmio P3 Mobile Bench",
        "Vivo Valoriza Empresas",
        "Benefícios exclusivos Vivo Empresas",
        "Vivo Gestão de Dispositivos",
        "Monitoramento dos dispositivos da empresa",
      ],
    },
    {
      mobilePlan: "30GB",
      price: "69,99",
      planInfo: "+ Ligações Ilimitadas",
      features: [
        "Melhor rede 5G do Brasil",
        "Eleita pelo prêmio P3 Mobile Bench",
        "Vivo Valoriza Empresas",
        "Benefícios exclusivos Vivo Empresas",
        "Vivo Gestão de Dispositivos",
        "Monitoramento dos dispositivos da empresa",
      ],
    },
    {
      mobilePlan: "40GB",
      price: "79,99",
      planInfo: "+ Ligações Ilimitadas",
      features: [
        "Melhor rede 5G do Brasil",
        "Eleita pelo prêmio P3 Mobile Bench",
        "Vivo Valoriza Empresas",
        "Benefícios exclusivos Vivo Empresas",
        "Vivo Gestão de Dispositivos",
        "Monitoramento dos dispositivos da empresa",
      ],
    },
    {
      mobilePlan: "50GB",
      price: "89,99",
      planInfo: "+ Ligações Ilimitadas",
      features: [
        "Melhor rede 5G do Brasil",
        "Eleita pelo prêmio P3 Mobile Bench",
        "Vivo Valoriza Empresas",
        "Benefícios exclusivos Vivo Empresas",
        "Vivo Gestão de Dispositivos",
        "Monitoramento dos dispositivos da empresa",
      ],
    },
    {
      mobilePlan: "100GB",
      price: "99,99",
      planInfo: "+ Ligações Ilimitadas",
      features: [
        "Melhor rede 5G do Brasil",
        "Eleita pelo prêmio P3 Mobile Bench",
        "Vivo Valoriza Empresas",
        "Benefícios exclusivos Vivo Empresas",
        "Vivo Gestão de Dispositivos",
        "Monitoramento dos dispositivos da empresa",
      ],
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.pageHeader}>
        <h1>Vivo Móvel</h1>
        <h3>
          Aproveite a melhor cobertura móvel do Brasil agora mesmo. Alcance
          maiores velocidades com o 5G. Conheça abaixo os nossos planos
        </h3>
      </div>
      <div className={styles.plansWrapper}>
        {plans.map((plan, index) => (
          <Container
            key={index}
            componentStructure={
              <>
                <div className={styles.planHeader}>
                  <h4 className={styles.planTitle}>{plan.mobilePlan} Mega</h4>
                  <p className={styles.planDescription}>
                    {plan.planInfo.split("<br>").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < plan.planInfo.split("<br>").length - 1 && (
                          <br />
                        )}
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
  );
}
