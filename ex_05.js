var seed = 0;

function getID() {
    return new Promise(resolve => {
        setTimeout(() => {
            var id = Math.sin(seed++) * 10000;
            id = parseInt(id < 0 ? -id : id);
            resolve(id);
        }, 500);
    });
}
function assignID(machineName, newSeed) {
    seed = newSeed;
    return getID().then(id => `${machineName}: ${id}`);
}

assignID("Oxygen filter", 1).then(console.log);
