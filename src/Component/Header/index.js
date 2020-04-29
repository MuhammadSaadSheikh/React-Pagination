import React from 'react'

//style
import { styles } from './style'

export default function Header() {
    return <div style={styles.mainWrapper}>
        <h1 style={styles.heading}>Header</h1>
        <div style={styles.socialWrapper}></div>
    </div>
}