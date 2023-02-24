let add = (a,b) => {
    // return a+b
}

let result = add(5,2)

let person1 = {
    colour : "blue",
    name : "esee",
    age : 19,
    pets : ["pickle","squid"],
    alive: true,
    dead: false,
    tail: null
}

let person2 = {
    colour : "red",
    name : "esee",
    age : 19,
    pets : ["pickle","squid"],
    alive: true,
    dead: false,
    tail: null
}


// write a function which takes a person and returns their colours
let getColor = (person) => {
    return person.colour
}
let colour1 = getColor(person1)
let colour2 = getColor(person2)
console.log(colour2)
