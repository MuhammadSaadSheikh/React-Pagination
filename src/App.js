import React from 'react';
import logo from './logo.svg';
import './App.css';

//config
import { BASE_URL } from "../src/config/credential";

//component
import List  from '../src/component/List'
import SlideBar  from '../src/component/SlideBar'

export default class App extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return <SlideBar/>
  }
}
