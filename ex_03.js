function checkStatus(machine) {
  machine
    .then(console.log)
    .catch(console.error)
    .finally(() => console.log("Checking status over"));
}
function promiseMe(action) {
  return Promise.resolve(`I promise to ${action}`);
}
checkStatus(promiseMe("fly to the moon"));
