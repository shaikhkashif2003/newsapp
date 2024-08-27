import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
            <Outlet />
          </>
        ),
        children: [
          {
            path: "general",
            element: <News key="general" darkMode={darkMode} pageSize={3} county="in" category="general" />,   // using key, mounting the components with the updated props
          },
          {
            path: "business",
            element: <News key="business" darkMode={darkMode} pageSize={3} county="in" category="business" />,
          },
          {
            path: "entertainment",
            element: <News key="entertainment" darkMode={darkMode} pageSize={3} county="in" category="entertainment" />,
          },
          {
            path: "health",
            element: <News key="health" darkMode={darkMode} pageSize={3} county="in" category="health" />,
          },
          {
            path: "science",
            element: <News key="science" darkMode={darkMode} pageSize={3} county="in" category="science" />,
          },
          {
            path: "sports",
            element: <News key="sports" darkMode={darkMode} pageSize={3} county="in" category="sports" />,
          },
          {
            path: "technology",
            element: <News key="technology" darkMode={darkMode} pageSize={3} county="in" category="technology" />,
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
