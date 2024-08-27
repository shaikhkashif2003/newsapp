import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    const { darkMode, toggleDarkMode } = this.props;

    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${darkMode ? 'dark' : 'light'} bg-${darkMode ? 'black' : 'white'}` }>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsMonkey</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">Business</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">Entertainment</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">General</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">Health</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">Science</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">Sports</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">Technology</a>
                    </li>
                </ul>
                    <div className={`form-check form-switch text-${darkMode ?'light':'dark'}`}>
                      <input className="form-check-input" onClick={toggleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
