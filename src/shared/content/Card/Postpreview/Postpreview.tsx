import React from 'react';
import styles from './postpreview.css';

export function Postpreview() {
  return (
    <div className={styles.post__preview}>
      <img src="http://www.diveevo.ru/objects/news_img_file_2901_b.jpg" alt="Изображение поста" className={styles.post__previewImg} />
    </div>
  );
}
