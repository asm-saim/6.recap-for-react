//promise : It has 3 state -> resolve, reject, pending.

const info = new Promise((resolve, reject) => {
  const value = true;
  if (value) {
    resolve("Accepted");
  } else {
    reject("Rejected");
  }
});

info
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });

async function getInfo() {
  try {
    const resolved = await info;
    console.log(resolved);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Data executed");
  }
}
getInfo();
