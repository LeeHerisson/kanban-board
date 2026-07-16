import { formatDate } from "../../utils/date";
import styles from "./Card.module.css";

type CardProps = {
  className?: string;
  columnStatus: string;
  id: string;
  title: string;
  dueDate: string | null;
  onDeleteTask: (id: string) => void;
  onToggleTask: (id: string) => void;
};

const Card = (props: CardProps) => {
  const {
    className = "",
    columnStatus,
    id,
    title,
    dueDate,
    onDeleteTask,
    onToggleTask,
  } = props;

  return (
    <li className={`${styles.card} ${className}`}>
      <input
        className={styles.cardCheckbox}
        type="checkbox"
        id={id}
        checked={columnStatus === "done"}
        onChange={() => onToggleTask(id)}
      />
      <div className={styles.cardBody}>
        <label className={styles.cardLabel} htmlFor={id}>
          {title}
        </label>
        {dueDate && (
          <p className={styles.cardDate}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M3 10h18M8 2v4M16 2v4" />
            </svg>
            {formatDate(dueDate)}
          </p>
        )}
      </div>
      <button
        className={styles.cardDeleteButton}
        aria-label="Delete"
        title="Delete"
        onClick={() => onDeleteTask(id)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
};

export default Card;
