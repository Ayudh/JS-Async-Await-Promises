function myPromise(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0)
      resolve(num * 2);
    else
      reject(num / 2);
  });
}

let a = myPromise(10)
  .then(data => {
    return myPromise(11);
  })
  .then(() => {
    console.log('a');
  })
  .catch(data => {
    return data
  })

a