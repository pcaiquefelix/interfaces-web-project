import Container from "@/components/Container";
import styles from "./page.module.css";

const VivoTotalEmpresas = () => {
  const offersList = [
    {
      speed: "500 Mega",
      data: "26GB",
      description: "Instalação e Wi-Fi Grátis",
      price: "R$149,98/mês",
    },
    {
      speed: "500 Mega",
      data: "35GB",
      description: "Instalação e Wi-Fi Grátis",
      price: "R$164,98/mês",
    },
    {
      speed: "300 Mega",
      data: "40GB",
      description: "Instalação e Wi-Fi Grátis",
      price: "R$169,98/mês",
    },
    {
      speed: "400 Mega",
      data: "50GB",
      description: "Instalação e Wi-Fi Grátis",
      price: "R$179,98/mês",
    },
  ];
  return (
    <div className={styles.wrap}>
      <div className={styles.pageHeader}>
        <h1>Vivo Total Empresas</h1>
        <h3>
          Combos para utilizar o melhor da internet e telefonia Vivo Empresas
        </h3>
      </div>
      <div className={styles.container} key="container">
        {offersList.map((item, index) => (
          <Container
            itemIndex={index}
            componentStructure={
              <div className={styles.containerWrap}>
                <h4 className={styles.h4}>{item.speed}</h4>
                <hr className={styles.hr} />
                <h4 className={styles.h4}>{item.data}</h4>
                <p className={styles.p}>
                  {item.description}
                  <br />
                  Ligações ilimitadas
                </p>
                <p className={styles.p}>{item.price}</p>
                <a className={styles.button} href="https://wa.me/5579999073364">
                  Assine já
                </a>
                <p className={styles.p}>Ofertas Exclusivas</p>
              </div>
            }
          />
        ))}
      </div>

      <section className={styles.section}>
        <hr className={styles["second-hr"]} />
        <div className={styles.div_p}>
          <p className={styles.p}>
            Serviços sujeitos a viabilidade técnica. Entre em contato conosco
            para verificar a cobertura na sua região.
          </p>
        </div>
      </section>
    </div>
  );
};

export default VivoTotalEmpresas;
