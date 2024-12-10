import styles from "./Container.module.css";

const Container = ({ componentStructure, itemIndex }) => {
  return (
    <div className={styles.item} key={itemIndex}>
      {componentStructure}
    </div>
  );
};

export default Container;
