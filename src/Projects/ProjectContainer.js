import React, { Component } from 'react';

export default class ProjectContainer extends Component {
  constructor() {
    super();
    this.state = {
      client_id: 'd6055e8e1dc6b5400c7f',
      client_secret: 'b371a216e66110bdae42392e27e9474d34735c96',
      repos_count: 5,
      repos_sort: 'updated: asc',
      GitHubRepos: [],
    };
  }
  componentDidMount() {
    fetch('https://api.github.com/users/reifnotreef/repos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          GitHubRepos: Object.keys(data)
            .slice(0, 6)
            .map(key => data[key]),
        });
      });
  }

  render() {
    console.log(this.state.GitHubRepos);
    const baseUrl = 'https://reifnotreef.github.io/';
    const outputSections = this.state.GitHubRepos.map(item => {
      return (
        <section className='project-container' key={item.id}>
          <h3 className='project-title'>{item.name}</h3>
          <p className='project-description'>{item.description}</p>
          <p className='project-link'>
            <a target='_blank' rel='noopener noreferrer' href={item.svn_url}>
              See the code
            </a>
          </p>
          <p className='project-live'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={baseUrl + item.name}
            >
              See it Live
            </a>
          </p>
          <p className='project-languages'>{item.Language}</p>
          <img src={item.imgLink} alt={item.alt} className='project-image' />
        </section>
      );
    });
    return <div className='placeHolder'>{outputSections}</div>;
  }
}
