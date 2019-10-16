import React, { Component } from 'react';

import ProjectContainer from './ProjectContainer';

export default class ProjectsContainer extends Component {
  render() {
    return (
      <section id='projects-container'>
        <section id='projects-header'>
          <h1>My Projects</h1>
          <ProjectContainer />
        </section>
      </section>
    );
  }
}
