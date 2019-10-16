import React, { Component } from 'react';

export default class TopNav extends Component {
  render() {
    return (
      <section id='top-nav'>
        <span>
          <a href='#projects-container'>Projects</a>
        </span>
        <span>
          <a href='#about-me-container'>About</a>
        </span>
        <span>
          <a href='#contact-container'>Contact</a>
        </span>
      </section>
    );
  }
}
