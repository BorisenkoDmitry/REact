import React from 'react';
import { Controls } from './Controls';

import styles from './main.css';
import { Postheader } from './Postheader';
import { Postmenu } from './Postmenu';
import { Postpreview } from './Postpreview';

interface ICardProps {
  element: string,
  num: number
}
export function Card({ element, num }: ICardProps) {
  return (
    <li className={styles.post}>
      <Postheader />
      <Postpreview />
      <Postmenu />
      <Controls />
    </li>
  );
}
