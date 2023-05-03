import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome Salva</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.tasksCategories}>
          <h2 className={styles.subtitle}>Task categories</h2>
          <ul className={styles.tasksCatList}>
            <li className={styles.taskCatItem}>
              <h3 className={styles.taskCatTitle}></h3>
            </li>
            <li className={styles.taskCatItem}>
              <h3 className={styles.taskCatTitle}></h3>
            </li>
            <li className={styles.taskCatItem}>
              <h3 className={styles.taskCatTitle}></h3>
            </li>
            <li className={styles.taskCatItem}>
              <h3 className={styles.taskCatTitle}></h3>
            </li>
            <li className={styles.taskCatItem}>
              <h3 className={styles.taskCatTitle}></h3>
            </li>
          </ul>
        </section>

        <section className={styles.tasks}>
          <h2 className={styles.subtitle}>Tasks</h2>
          <ul className={styles.tasksList}>
            <li className={styles.taskItem}></li>
            <li className={styles.taskItem}></li>
            <li className={styles.taskItem}></li>
            <li className={styles.taskItem}></li>
            <li className={styles.taskItem}></li>
            <li className={styles.taskItem}></li>
          </ul>
        </section>
      </main>
    </>
  );
}
