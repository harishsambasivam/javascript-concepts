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
  return new Promise((resolve, reject) => resolve(brushAndShower));
}

function brushAndShower() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Brushed and showered");
      resolve(makeBreakfast);
    }, 300);
  });
}

function makeBreakfast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Made Break fast");
      resolve(eatBreakFast);
    }, 150);
  });
}

function eatBreakFast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("ate break fast");
      resolve(catchBus);
    }, 150);
  });
}

function catchBus() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("catchedBus");
      resolve(reachOffice());
    }, 100);
  });
}

function reachOffice() {
  return setTimeout(() => console.log("Reached office"), 100);
}

// letStart()
//     .then(brushAndShower => brushAndShower())
//     .then(makeBreakfast => makeBreakfast())
//     .then(eatBreakFast => eatBreakFast())
//     .then(catchBus => catchBus())

// async function wokeUp(){
//      let brushAndShower = await letStart();
//      let makeBreakfast = await brushAndShower();
//      let eatBreakFast = await makeBreakfast();
//      let catchBus = await eatBreakFast();
//      let reachOffice = await catchBus();
//      reachOffice();
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
