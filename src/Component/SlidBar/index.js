import React, {useState} from 'react'

import { styles } from './style'

export default function Home() {
    const [isBarOpen, toggleBar] = useState()
    
    const handleBar = () => {
        toggleBar(!isBarOpen)
    }

    return <div style={{
        left: isBarOpen ? 0 : -170,
        transition: 0.5, ...styles.mainWrapper}}
        onClick={handleBar}>
        <div style={styles.iconWrapper}></div>
    </div>
}