import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = (props) => {

  let apiKey = process.env.REACT_APP_NEWS_API   //Added API key from .env file

  // darkmode 
  const [darkMode, setdarkMode] = useState('light');
  const [progress, setProgress] = useState(0)

  const toggleDarkMode = () => {
    if(darkMode === 'light'){
      setdarkMode('dark');
      document.body.style.backgroundColor = '#042743';
    }else{
      setdarkMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  //Set up Router
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}  />
          <LoadingBar             //top loading bar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "general",
          element: <News setProgress={setProgress} apiKey={apiKey} key="general" darkMode={darkMode} pageSize={30} county="in" category="general" />,   // using key, mounting the components with the updated props
        },
        {
          path: "business",
          element: <News setProgress={setProgress} apiKey={apiKey} key="business" darkMode={darkMode} pageSize={30} county="in" category="business" />,
        },
        {
          path: "entertainment",
          element: <News setProgress={setProgress} apiKey={apiKey} key="entertainment" darkMode={darkMode} pageSize={30} county="in" category="entertainment" />,
        },
        {
          path: "health",
          element: <News setProgress={setProgress} apiKey={apiKey} key="health" darkMode={darkMode} pageSize={30} county="in" category="health" />,
        },
        {
          path: "science",
          element: <News setProgress={setProgress} apiKey={apiKey} key="science" darkMode={darkMode} pageSize={30} county="in" category="science" />,
        },
        {
          path: "sports",
          element: <News setProgress={setProgress} apiKey={apiKey} key="sports" darkMode={darkMode} pageSize={30} county="in" category="sports" />,
        },
        {
          path: "technology",
          element: <News setProgress={setProgress} apiKey={apiKey} key="technology" darkMode={darkMode} pageSize={30} county="in" category="technology" />,
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

export default App;