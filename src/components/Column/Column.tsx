import styles from "./Column.module.css";

const Column = (props) => {
  const { tasksCount, columnName, children } = props;

  return (
    <div className={styles.column}>
      <div className={styles.columnInfo}>
        {columnName} <span className={styles.tasksCount}>{tasksCount}</span>
      </div>

      <ul className={styles.cardList}>{children}</ul>
    </div>
  );
};

export default Column;
