import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HeaderContainer from './Header/HeaderContainer';
import ProjectsContainer from './Projects/ProjectsContainer';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <ProjectsContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
