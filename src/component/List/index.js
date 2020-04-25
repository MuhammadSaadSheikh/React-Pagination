import React from 'react'

export default class List extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            list : ['a','b','c','d']
        }
    }

    render() {
        const { list } = this.props
        const {color = 'blue', getItem, num} = this.props

        return <ul>
            {list.map((val, ind) => {
                <li style={color} onClick={()=>getItem(ind)}>
                    {val}
                </li>
            })}
        </ul>
    }
}