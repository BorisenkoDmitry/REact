import React from "react";
import styles from './header.css'
import { HeaderBar } from "./headerBar/headerBar";
import { HeaderSelect } from "./headerSelect";

export function HeaderComponent() {

    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>Дискуссия</h1>
            {/* <HeaderSelect />
            <HeaderBar>
                test
            </HeaderBar> */}
        </header>
    )
}

