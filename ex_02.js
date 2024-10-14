function checkFuel(fuel) {
  return new Promise((resolve, reject) => {
    if (fuel >= 9) {
      resolve("Ready to launch");
    } else {
      reject("Please refill fuel");
    }});
}
