import { bubbleSort, mergeSort, quickSort } from "./sorting/sorting.js";

function measureTime(fn, ...args) {
    const start = performance.now()
    fn(...args);
    const end = performance.now()
    return (end - start).toFixed(4);
}

function getRandomNumber() {
    return ~~(Math.random() * (1000));
}

const ascArray = [0];
const descArray = [500];
const randomArray = [500];

let i = 0

const ascObjArray = [];

console.log("Ascending");
while (i !== 499) {
    ascArray.push(++i);
    let timeArray = {
        length: ascArray.length,
        bubbleTime: `${measureTime(bubbleSort, ascArray)} ms`,
        mergeTime: `${measureTime(mergeSort, ascArray)} ms`,
        quickTime: `${measureTime(quickSort, ascArray)} ms`,
    }
    ascObjArray.push(timeArray);
}
console.table(ascObjArray);

console.log("Descending");
const descObjArray = [];
let j = 499
while (j !== -1) {
    descArray.push(--j);
    let timeArray = {
        length: descArray.length,
        bubbleTime: `${measureTime(bubbleSort, descArray)} ms`,
        mergeTime: `${measureTime(mergeSort, descArray)} ms`,
        quickTime: `${measureTime(quickSort, descArray)} ms`,
    }
    descObjArray.push(timeArray);
}
console.table(descObjArray);

console.log("Random");
const randomObjArray = [];
let r = 0
while (r !== 499) {
    randomArray.push(getRandomNumber());
    let timeArray = {
        length: randomArray.length,
        bubbleTime: `${measureTime(bubbleSort, randomArray)} ms`,
        mergeTime: `${measureTime(mergeSort, randomArray)} ms`,
        quickTime: `${measureTime(quickSort, randomArray)} ms`,
    }
    randomObjArray.push(timeArray);
    r++;
}
console.table(randomObjArray);

