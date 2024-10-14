async function asyncFunc() {
    return "Hello World!";
}
async function displayResult() {
    const result = await asyncFunc();
    console.log(result);
}
displayResult();
