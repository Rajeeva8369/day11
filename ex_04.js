async function initializeMachine(machineName, timeRequired) {
  await new Promise(resolve => setTimeout(resolve, timeRequired * 1000));
  return `${machineName} initialized`;
}
initializeMachine("Computer", 3).then(console.log);
