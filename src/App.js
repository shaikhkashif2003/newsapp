import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API   //Added API key from .env file

  // darkmode 
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }


  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  
  //top loader bar progress 
  state={
    progress:0    //initial progress set as zero
  }

  setProgress=(progress)=>{
    this.setState({progress: progress });
  }



  render() {

    const { darkMode } = this.state;

    if (darkMode === true) {
      document.body.style.backgroundColor = '#021321';
    } else {
      document.body.style.backgroundColor = '#f0f0f0';
    }


    //Set up Router
    const router = createBrowserRouter([
      {
        path: '/',
        element: (
          <>
            <NavBar darkMode={darkMode} toggleDarkMode={this.toggleDarkMode} />
            <LoadingBar             //top loading bar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
            <Outlet />
          </>
        ),
        children: [
          {
            path: "general",
            element: <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" darkMode={darkMode} pageSize={30} county="in" category="general" />,   // using key, mounting the components with the updated props
          },
          {
            path: "business",
            element: <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" darkMode={darkMode} pageSize={30} county="in" category="business" />,
          },
          {
            path: "entertainment",
            element: <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" darkMode={darkMode} pageSize={30} county="in" category="entertainment" />,
          },
          {
            path: "health",
            element: <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" darkMode={darkMode} pageSize={30} county="in" category="health" />,
          },
          {
            path: "science",
            element: <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" darkMode={darkMode} pageSize={30} county="in" category="science" />,
          },
          {
            path: "sports",
            element: <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" darkMode={darkMode} pageSize={30} county="in" category="sports" />,
          },
          {
            path: "technology",
            element: <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" darkMode={darkMode} pageSize={30} county="in" category="technology" />,
          },
        ],
      },
    ]);

    return (
      <div>
        {/* <NavBar darkMode={darkMode} toggleDarkMode={this.toggleDarkMode}  /> */}
        <RouterProvider router={router} />

      </div>
    )
  }
}
