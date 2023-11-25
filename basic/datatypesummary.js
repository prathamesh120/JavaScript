//primitive call by value


//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt, 

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //typeof is object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol()

console.log(id === anotherId)

const bigNumber = 3334455666666666644n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "hitesh",
    age: 22,

}

const myFunction = function(){
    console.log("hello world");

}