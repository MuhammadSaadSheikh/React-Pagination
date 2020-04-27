import React from 'react'

export default class List extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            list: ['a', 'b', 'c', 'd'],
            num: '',
        }
    }

    render() {
        const { list } = this.props
        const { color = 'blue'} = this.props

        return <ul>
            {list.map((val, ind) => {
                <li style={color}>
                    {val}
                </li>
            })}
        </ul>
    }
}