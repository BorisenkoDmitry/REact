import React from 'react';
import styles from './postheader.css';

export function Postheader() {
  return (
    <div className={styles.post__top}>
      <div className={styles.post__top__user}>
        <div className={styles.post__personImg}>
          <img src="http://cdn.onlinewebfonts.com/svg/img_283243.png" alt="Изображение пользователя" />
        </div>

        <a href="#userName" className={styles.post__Name}>Виктор Пылёв</a>
        <span className={styles.post__date}>
          <span className={styles.post__publication}>опубликовано</span>19 мая 2020
        </span>
      </div>
      <h2 className={styles.post__title}>
        <a href="#postH2" className={styles.post__link}>
          Противоположная точка зрения на данную проблему
        </a>
      </h2>
    </div>
  );
}
