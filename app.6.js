const fetch = require('node-fetch');

function getCatData(userId) {
  return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
    .then(response => response.json())
    .then(data => {
      let catUrlPromises = [];
      for (let i=0;i<data.cats.length;i++) {
        let promise = fetch(`https://catappapi.herokuapp.com/cats/${data.cats[i]}`).then(response => response.json()).then(data => data.imageUrl);
        catUrlPromises.push(promise);
      }
      return Promise.all(catUrlPromises);
    });
}

async function getCatDataAsync(userId) {
  let userResponse = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  let userdata = await userResponse.json();
  let catImageUrls = [];
  for (let i = 0;i<userdata.cats.length;i++) {
    let catResponse = await fetch(`https://catappapi.herokuapp.com/cats/${userdata.cats[i]}`);
    let catdata = await catResponse.json();
    catImageUrls.push(catdata.imageUrl);
  }
  return catImageUrls;
}

getCatData(123)
  .then(data => {
    data.length //?
  });

getCatDataAsync(123); //?