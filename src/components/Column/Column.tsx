import styles from "./Column.module.css";

type ColumnProps = {
  count: number;
  title: string;
  children: React.ReactNode;
};

const Column = (props: ColumnProps) => {
  const { count, title, children } = props;

  return (
    <div className={styles.column}>
      <div className={styles.columnInfo}>
        {title} <span className={styles.tasksCount}>{count}</span>
      </div>

      <ul className={styles.cardList}>{children}</ul>
    </div>
  );
};

export default Column;
