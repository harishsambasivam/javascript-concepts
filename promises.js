// function letsstart(){
//     brushandshower();
// }

// function brushandshower(){
//         setTimeout(() => {
//             console.log("brushed and shower is done!!!")
//             makeBreakFast();
//         },300)
// }

// function makeBreakFast(){
//     setTimeout(() => {
//             console.log("Made breakfast!")
//             eatBreakFast();
//         },150)
// }

// function eatBreakFast(){
//     setTimeout(() => {
//             console.log("ate breakfast!!!")
//             catchBus()
//         },150)
// }

// function catchBus(){
//     setTimeout(() => {
//             console.log("catched bus")
//             reachOffice();
//         },100)
// }

// function reachOffice(){
//     console.log("Reached office");
// }

// letsstart();

// 🔥using callbacks

// const getReadyForOffice = () => {
//     setTimeout(() => {
//         console.log("brushed and shower is done!!!")
//         setTimeout(() => {
//             console.log("Made breakfast!")
//             setTimeout(() => {
//                 console.log("Made breakfast!")
//                 setTimeout(() => {
//                     console.log("ate breakfast!!!")
//                     setTimeout(() => {
//                         console.log("catched bus")
//                         console.log(" Reached office");
//                     },100)
//                 },150)
//             },150)
//         },150)
//     },300)
// }

// 🔥promises

function letStart() {
  return new Promise((resolve, reject) => resolve());
}

function brushAndShower() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Brushed and showered");
      resolve();
    }, 300);
  });
}

function makeBreakfast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Made Break fast");
      resolve();
    }, 150);
  });
}

function eatBreakFast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("ate break fast");
      resolve();
    }, 150);
  });
}

function catchBus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("catchedBus");
      resolve();
    }, 100);
  });
}

function reachOffice() {
  return setTimeout(() => console.log("Reached office"), 100);
}

// letStart()
//     .then(() => brushAndShower())
//     .then(() => makeBreakfast())
//     .then(() => eatBreakFast())
//     .then(() => catchBus())

// async function wokeUp(){
//   await letStart();
//   await brushAndShower();
//   await makeBreakfast();
//   await eatBreakFast();
//   await catchBus();
//   await reachOffice();
// }

// wokeUp();
// brushAndShower then makeBreakfast then eatBreakFast
// then catchBus then reachOffice

let iWillConnectWithYou = new Promise((resolve, reject) => {
  let foundProfile = true;
  if (foundProfile) {
    resolve("profile -> connect -> we are connected now😊");
  }
  reject("Unable to find you☹");
});

let iWillPostDaily = new Promise((resolve, reject) => {
  let sick = true;
  if (sick) {
    reject("Unable to post ☹");
  }
  resolve("new post -> upload -> post created😊");
});

Promise.all([iWillConnectWithYou, iWillPostDaily]).then((results) => {
  console.log(results);
});

Promise.allSettled([iWillConnectWithYou, iWillPostDaily]).then((results) => {
  console.log(results);
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const brushAndShower = () =>
  delay(3000).then(console.log("brushed and showered"));
const makeBreakFast = () => delay(2000).then(console.log("made Breakfast"));
const eatBreakFast = () => delay(3000).then(console.log("ate breakfast"));
const catchBus = () => delay(2000).then(console.log("catched Bus"));
const reachedOffice = () => delay(0).then(console.log("reachedOffice"));

delay(0)
  .then(brushAndShower)
  .then(makeBreakFast)
  .then(eatBreakFast)
  .then(catchBus)
  .then(reachedOffice);


