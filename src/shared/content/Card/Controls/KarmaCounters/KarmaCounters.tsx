import React from 'react';
import styles from './karmacounters.css';

export function KarmaCounters() {
  return (
    <div className={styles.karmaCounters}>
      <button className={styles.karmaUp}>
        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
        </svg>
      </button>
      <span className={styles.karmaVal}>
        234
      </span>
      <button className={styles.karmaDown}>
        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
        </svg>
      </button>
    </div>
  );
}
