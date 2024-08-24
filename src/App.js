import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

let Mode=()=>{
  if(document.body.style.backgroundColor==="white"){
    document.body.style.backgroundColor = '#042743';
    document.body.style.color="white";
    }else{
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      }
}

let toggleMode=()=>{
  if(document.body.style.backgroundColor==="white"){
    document.body.style.backgroundColor = '#042743';
    document.body.style.color="white";
    }else{
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar Modeode={Mode} toggleMode={toggleMode} />
        <News/>
      </div>
    )
  }
}
