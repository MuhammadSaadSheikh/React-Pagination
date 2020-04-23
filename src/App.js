import React from 'react';
import logo from './logo.svg';
import './App.css';

//config
import { BASE_URL } from "../src/config/credential";

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
  render() {
    return <h1>Pagination</h1>
  }
}
