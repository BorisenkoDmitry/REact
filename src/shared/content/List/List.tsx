import React from 'react';
import { Card } from '../Card';
import styles from './main.css';

export function List() {
  return (
    <ul className={styles.list}>
        {
          ["hello", "melli", "fallow"].map((el, index) => {
            return (
              <Card element={el} key={index} num={index}/>
            )
          })
        }
    </ul>
  );
}
