function myPromise(num) {
  let promise = new Promise(promiseHandler);
  return promise;

  function promiseHandler(resolve, reject) {
    if (num === 1)
      resolve(1);
    else
      reject(222);
  }
}

let a = myPromise(1)
  .then(data => data + '2')
  .then(data => {
    return new Promise((resolve) => {
      resolve(data + 2);
    });
  }); //?
