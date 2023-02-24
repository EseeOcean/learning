let colorList = ["purple", "turquoise", "orange"];

console.log(colorList.includes("purple"))

let logOut = (item) => {
    console.log(item)
}

colorList.forEach(logOut)

//if (somethingtrueorfalse){}

let isPurple = (acolour) => {
    if (acolour === "purple") {
        console.log("is purple")
    }
}
let findPurple = (anyColorList) => {
    anyColorList.forEach(isPurple)
}

// isPurple("red")
// isPurple("purple")

findPurple(colorList)



// Make a list of people objects
// Make a function that console logs a person's name if they are over 18
// Make a function that takes a list of people and logs out anyone's name if over 18
let person1 = {
    name: "esee",
    age: 18,
    pets: ["pickle", "squid"],
    alive: true,
    dead: false,
    tail: null
}

let person2 = {
    name: "susan",
    age: 14,
    pets: ["pickle", "squid"],
    alive: true,
    dead: false,
    tail: null
}
let person3 = {
    name: "bob",
    age: 19,
    pets: ["pickle", "squid"],
    alive: true,
    dead: false,
    tail: null,
}
let person4 = {
    name: "larry",
    age: 20,
    alive: false,
    dead: true,
    tail: null
} 
let person5 = {
    name: "alex",
    age: 88,
    alive: false,
    dead: true,
    tail: null
}
let people = [person1, person2, person3, person4]

let isOver18 = (aperson) => {
    if (aperson.age > 18) {
        console.log(aperson.name)
    }
}

let logName = (anyListofPeople) => {
    anyListofPeople.forEach(isOver18)
}

// isOver18(person3)
//logName(people)

// make function to tell if someoneis alive or dead

let aliveOrDead = (persons) => {
    if (persons.alive === false) {
        console.log(persons.name, "is dead")
    }

    if (persons.alive === true) {
        console.log(persons.name, "is alive")
    }

}

let lifestatus = (anyPerson) => {
    anyPerson.forEach(aliveOrDead)
}

lifestatus(people)


let list = ["one", "two", "three"];

list.push("four");

console.log(list);

// Make two lists, one for alive and one for dead 
// Loop over a list of people
// Add people to the relevant list
// Once done show the two lists
//add name of lists
// add number in lists

let aliveList = ["esee", "bob"]
let deadlist = ["larry"]

aliveList.forEach
deadlist.forEach 

aliveList.push("susan");
deadlist.push("alex")

console.log(aliveList, deadlist);

