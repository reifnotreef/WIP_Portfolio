// var { graphql, buildSchema } = require('graphql');
const fetch = require('node-fetch');

const token = '82c3e4e5b1b0384e852a05f5046f2234974c3f55';
const query = `query {
    user(login:"reifnotreef") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
        node {
          ... on Repository {
            name, url, description, id
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
