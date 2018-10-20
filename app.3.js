function myPromise(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0)
      resolve(num * 2);
    else
      reject(num / 2);
  });
}

async function main() {
  try {
    let a = await myPromise(11) //?
    a + 2
  } catch(err) {
    console.log(err);
  }
  return Promise.resolve(10);
}
main(); //?