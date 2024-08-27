import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

// let Mode=()=>{
//   if(this.state.Mode==="white"){
//     document.body.style.backgroundColor = '#042743';
//     document.body.style.color="white";
//     }else{
//       document.body.style.backgroundColor="white";
//       document.body.style.color="black";
//       }
// }

// let toggleMode=()=>{
//   if(document.body.style.backgroundColor==="white"){
//     document.body.style.backgroundColor = '#042743';
//     document.body.style.color="white";
//     }else{
//       document.body.style.backgroundColor="white";
//       document.body.style.color="black";
//       }
// }

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  render() {

    const { darkMode } = this.state;

    if(darkMode===true){
      document.body.style.backgroundColor = '#021321';
    }else{
      document.body.style.backgroundColor = '#f0f0f0';
    }
    return (
      <div>
        <NavBar darkMode={darkMode} toggleDarkMode={this.toggleDarkMode}  />
        <News darkMode={darkMode} pageSize={3} county="in" category="sports" />
      </div>
    )
  }
}
