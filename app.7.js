const fetch = require('node-fetch');

async function getCatDataAsync(userId) {
  let userResponse = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  let userdata = await userResponse.json();
  let promises = userdata.cats.map(async function(catId) {
    let catResponse = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`);
    let catdata = await catResponse.json();
    console.log(catdata);
    return catdata.imageUrl;
  });
  return Promise.all(promises);
}


getCatDataAsync(123); //?