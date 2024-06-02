a = 5;
b = 6;
let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    b = 30;
    resolve(b);
  }, 2000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + b);
});
