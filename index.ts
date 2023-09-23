const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);

const arr2 = [1, 2, 3];
arr2.pop(); 
console.log(arr2);

const arr3 = [1, 2, 3];
arr3.shift();
console.log(arr3);

const arr4 = [1, 2, 3];
arr4.unshift(0); 
console.log(arr4);

const arr5 = ['a', 'b', 'c'];
const joinedString = arr5.join('-');
console.log(joinedString);

const arr6 = ['a', 'b'];
const concatenatedArray = arr6.concat('c');
console.log(concatenatedArray);

const arr7 = ['a', 'b', 'c'];
const slicedArray = arr7.slice(1);
console.log(slicedArray);

const arr8 = [1, 4, 7, 8];
const filteredArray = arr8.filter((n) => n % 2 === 0);
console.log(filteredArray);

const arr9 = ['a', 'b', 'c'];
const includesC = arr9.includes('c');
console.log(includesC);

const arr10 = [3, 5, 6, 8];
const foundValue = arr10.find((n) => n % 2 === 0);
console.log(foundValue);

const arr11 = [2, 4, 3, 5];
const foundIndex = arr11.findIndex((n) => n % 2 !== 0);
console.log(foundIndex);

const arr12 = [3, 4, 8, 6];
const doubledArray = arr12.map((n) => n * 2); 
console.log(doubledArray); 

const arr13 = [2, 3, 4, 5];
const sum = arr13.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

const arr14 = [2, 3, 4, 5];
const allLessThan6 = arr14.every((x) => x < 6);
console.log(allLessThan6);

const arr15 = [3, 5, 6, 8];
const someGreaterThan6 = arr15.some((n) => n > 6); 
console.log(someGreaterThan6); 

const arr16 = [1, 2, 3, 4];
arr16.reverse();
console.log(arr16);

const arr17 = [3, 5, 7, 8];
const atIndex = arr17.at(-2); 
console.log(atIndex);