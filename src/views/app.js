import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import './app.css';

import { Link } from 'react-router';

class App extends Component {
  render() {
    const { children }= this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <hr/>
        <ul>
           <li><Link to="/demo-01">simpleDemo</Link></li>
           <li><Link to="/404">Error</Link></li>
        </ul>
        <hr/>
        <section className="section-container">
            <p>内容</p>
            <div>{children}</div>
        </section>

      </div>
    );
  }
}

export default App;
