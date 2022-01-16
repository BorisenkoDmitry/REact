import React from "react";
import styles from './headerBar.css'
interface IHeaderBar {
    children?: React.ReactNode
}
export function HeaderBar({children}: IHeaderBar) {
    return (
        <div className={styles.headerBar}>
            {children}
        </div>
    )
}