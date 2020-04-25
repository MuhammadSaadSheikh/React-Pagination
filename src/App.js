import React from 'react';
import logo from './logo.svg';
import './App.css';

//config
import { BASE_URL } from "../src/config/credential";

//component
import List  from '../src/component/List'

export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      num: 0
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {list} = this.state
    const data = await fetch(`${BASE_URL}todos`)
    const response = await data.json()
    this.setState({
      list: response
    })
    console.log('res=>' , response)
  }

  getItem = ind => {
    this.setState({
      num : ind
    })
  }
  render() {
    const {list , num } = this.state

    if (!list) return null
    return <div>
      <list getItem={this.getItem} num={num}/>
      {/* {list.map(val => {
        return <p>{val.title}</p>
      })} */}
    </div>
  }
}
