import { formatDate } from "../../utils/date";
import styles from "./Card.module.css";

type CardProps = {
  className?: string;
  id: string;
  title: string;
  isDone: boolean;
  date: string | null;
  onDeleteTaskButtonClick: (id: string) => void;
};

const Card = (props: CardProps) => {
  const {
    className = "",
    id,
    title,
    date,
    isDone,
    onDeleteTaskButtonClick,
  } = props;

  return (
    <li className={`${styles.card} ${className}`}>
      <input
        className={styles.cardCheckbox}
        type="checkbox"
        id={id}
        defaultChecked={isDone}
      />
      <div className={styles.cardBody}>
        <label className={styles.cardLabel} htmlFor={id}>
          {title}
        </label>
        {date && (
          <p className={styles.cardDate}>
            <svg
              width="14"
              height="14"
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
            {formatDate(date)}
          </p>
        )}
      </div>
      <button
        className={styles.cardDeleteButton}
        aria-label="Delete"
        title="Delete"
        onClick={() => onDeleteTaskButtonClick(id)}
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
