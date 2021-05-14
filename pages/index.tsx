import styles from "../styles/components.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Components</h1>
      <div className={styles.container}>
        <button className={styles.fancyButton}>Click Me</button>
      </div>

      <div className={styles.container}>
        <button className={styles.pulsingButton}>SUBMIT</button>
      </div>

      <div className={styles.container}>
        <button className={styles.ringingButton}>SUBMIT</button>
      </div>

      <div className={styles.container}>
        <button className={styles.dynamicFancy}>SUBMIT</button>
      </div>

    </div>
  );
}
