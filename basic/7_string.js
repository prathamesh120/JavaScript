const name = "prathamesh"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`Hellow my name is ${name} and my repo count is ${repoCount}`);

// another way to define string to get access method of string operation

const gameName = new String("prathamesh")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'));

const newString  = gameName.substring(0,4)
console.log(newString);

const newstr = "    ram    "
console.log(newstr);
console.log(newstr.trim());

const url = "https://hsdfdlk.com/sdfklkd%20sdflfkj"
console.log(url.replace('%20', "-"))
