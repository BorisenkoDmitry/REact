import React from 'react';
import { Commentsbtn } from './Commentsbtn';
import styles from './Controls.css';
import { KarmaCounters } from './KarmaCounters';
import { Savebtn } from './Savebtn';
import { Sharebtn } from './Sharebtn';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounters />
      <Commentsbtn /> 

      <div className={styles.actions}>
        <Sharebtn />
        <Savebtn />
        
      </div>
    </div>

  );
}
