const fetch = require('node-fetch');

// this is a read only token
const token = '569b435ffbf9a7760fbc0cc0948e3fa0be6fd9c6';
const query = `query {
    user(login: "reifnotreef") {
      bio
      avatarUrl
      email
      isHireable
      name
    }
  }`;

const getUser = async () => {
  return await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(res => res.data.user)
    .catch(error => console.error(error));
};

export default getUser;
