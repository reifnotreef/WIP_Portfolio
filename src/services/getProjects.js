const fetch = require('node-fetch');

// this is a read only token
const token = '6201944fcf65c6dbe92d01087533517f194d362d';
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
