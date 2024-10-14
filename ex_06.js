function worker(task, timeRequired) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${task} done`);
        }, timeRequired);
    });
}
async function factory(tasks) {
    const taskPromises = tasks.map(({ task, timeRequired }) => worker(task, timeRequired));

    for await (const taskResult of taskPromises) {
        console.log(taskResult);
    }}
let tasks = [
    { task: 'Teaching Astronomy', timeRequired: 500 },
    { task: 'Repair module', timeRequired: 1000 },
    { task: 'Refill fuel', timeRequired: 1500 },
    
];
worker("Going to work", 1000).then(value => {
    console.log(value);
});
factory(tasks);
