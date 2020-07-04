let fetchData = function (url) {
  return new Promise((resolve, reject) => {
    // let data = XmlHttpRequest(url);
    let data = false;
    if (data) resolve(data);
    else
      reject(
        "talking tom api requires energy potion to serve you or try after 3 h"
      );
  });
};

async function f() {
  try {
    let response = await fetchData("https://www.talkingtom.com/cats");
  } catch (err) {
    console.log(err); // "talking tom api requires energy potion to serve you or try after 3 h"
  }
}

f();
