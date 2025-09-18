const name = "Ravi"
const repoCount = 13
// console.log(name + repoCount + " Value");

console.log('Helo my name is ${name} and my repo count is $ {repoCount}');

const gameName = new String('Ravi-hc')

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));


const newString = gameName.substring(0, 4)

console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Ravi  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://google.com/goo%gle"

console.log(url.replace('%', ' '))

console.log(url.includes('google'));  //Search for url

console.log(url.includes('Ravi'))

console.log(gameName.split(' '));





