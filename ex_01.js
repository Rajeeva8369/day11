async function promiseMe(message) {
    return `I promise you to ${message}`;
}
promiseMe("fly to the moon").then((value) => {
    console.log(value);
});
