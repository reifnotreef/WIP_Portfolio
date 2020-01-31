const fetch = require('node-fetch');

// this is a read only token
const token = '569b435ffbf9a7760fbc0cc0948e3fa0be6fd9c6';
const query = `query {
    user(login:"reifnotreef") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
        node {
          ... on Repository {
            name, description, id, projectsUrl, primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
}`;

const getProjects = async () => {
  const Projects = [];

  await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(res =>
      res.data.user.pinnedItems.edges.forEach(i => Projects.push(i.node))
    )
    .catch(error => console.error(error));
  return Projects;
};

export default getProjects;
