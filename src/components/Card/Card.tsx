import styles from "./Card.module.css";

const Card = (props) => {
  const { className = "", id, title, dueDate, isOverdue = false } = props;

  return (
    <li className={`${styles.card} ${className}`}>
      <input className={styles.cardCheckbox} type="checkbox" id={id} />
      <div className={styles.cardBody}>
        <label className={styles.cardLabel} htmlFor={id}>
          {title}
        </label>
        {dueDate && (
          <p
            className={`${styles.cardDate} ${
              isOverdue ? styles.cardDateOverdue : ""
            }`}
          >
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
            {dueDate}
          </p>
        )}
      </div>
      <button
        className={styles.cardDeleteButton}
        aria-label="Delete"
        title="Delete"
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
