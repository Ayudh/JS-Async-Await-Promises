function wait(time) {
  let promise = new Promise(promiseHandler);
  return promise;

  function promiseHandler(resolve, reject) {
    setTimeout(resolve, time);
  }
}

let a = wait(1000)
  .then(() => 'a');

Promise.resolve(10) //?

async function waitAsync(time) {
  await wait(time);
  return 'a';
}

waitAsync(100); //?