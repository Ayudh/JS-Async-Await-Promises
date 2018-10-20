const fetch = require('node-fetch');

function getData(userId) {
  return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
          .then(response => response.json())
          .then(data => data.imageUrl);
}

async function getDataAsync(userId) {
  let response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`);
  // let data = await response.json();
  return response.json();
}

getData(123) //?

getDataAsync(123)
  .then(data => {
    return data.imageUrl;
  }) //?