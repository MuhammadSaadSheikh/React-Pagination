import React ,{useState} from 'react'

//stlye
import { stlyes, styles } from './style'

export default function SlideBar() {
    const [isSlideBarOpen , toggleSlideBar] = useState()
    const handleSlideBar = () => {
        toggleSlideBar(!isSlideBarOpen)
    }

    return <div onClick={handleSlideBar()} style={isSlideBarOpen ? styles.secondView : styles.firstView}>
    </div>
}