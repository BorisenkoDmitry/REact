import React from 'react';
import styles from './main.css';
import { List } from './List';

export function ContentComponent() {
    return (
        <main className={styles.content}>
            <List />
        </main>
    )
}