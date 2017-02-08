import React, { Component } from 'react';
import logo from './kmutt.png';
import './App.css';
import './bulma.css'

class App extends Component {
  render() {
    return (
        <section className="hero is-info is-large">
    {/* Hero header: will stick at the top */}
    <div className="hero-head">
      <header className="nav">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <img src={logo} alt="Logo"/>
            </a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-active">
              Home
            </a>
            <a className="nav-item">
              Examples
            </a>
            <a className="nav-item">
              Documentation
            </a>
            <span className="nav-item">
              <a className="button is-info is-inverted">
                <span className="icon">
                  <i className="fa fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </header>
    </div>





    
<center><p class="control">
  <span class="select">
    <select>
      <option>1</option>
      <option>2</option>
    </select>
  </span>
</p></center>

    {/*  Hero content: will be in the middle */}
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          Title
        </h1>
        <h2 className="subtitle">
          Subtitle
        </h2>
      </div>
    </div>

    {/* Hero footer: will stick at the bottom */}
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li className="is-active"><a>Overview</a></li>
            <li><a>Modifiers</a></li>
            <li><a>Grid</a></li>
            <li><a>Elements</a></li>
            <li><a>Components</a></li>
            <li><a>Layout</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
    );
  }
}

export default App;