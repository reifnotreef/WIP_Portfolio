import React, { Component } from 'react';
import TopNav from './TopNav';
import AboutMe from './AboutMe';

export default class HeaderContainer extends Component {
  render() {
    return (
      <section id='header-container'>
        <AboutMe />
        <TopNav />
      </section>
    );
  }
}
