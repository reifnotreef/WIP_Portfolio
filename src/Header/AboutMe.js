import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {
    return (
      <section>
        <img
          id='profile-img'
          src='./img/profile-picture.jpg'
          alt='pictue of Bridger Reif Hammond'
        />
        <section id='profile-bio-container'>
          <p id='profile-bio'>reifnotreef</p>
        </section>
      </section>
    );
  }
}
