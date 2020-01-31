import React, { useEffect, useState } from 'react';

import ProjectContainer from './ProjectContainer';

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  const token = '82c3e4e5b1b0384e852a05f5046f2234974c3f55';
  const query = `query {
    user(login:"reifnotreef") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
        node {
          ... on Repository {
            name, url, description, id, projectsUrl
          }
        }
      }
    }
  }
}`;

  const getProjects = async () => {
    await fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(res =>
        res.data.user.pinnedItems.edges.forEach(i =>
          setProjects(projects => [...projects, i.node])
        )
      )
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section id='projects-container'>
      <section id='projects-header'>
        <h1>My Projects</h1>
        {projects && projects.length > 0 ? (
          projects.map(i => <ProjectContainer project={i} key={i.id} />)
        ) : (
          <></>
        )}
      </section>
    </section>
  );
};

export default ProjectsContainer;
