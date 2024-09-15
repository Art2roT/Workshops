// Lesson 1: plusses of typescript


// 1. better error feedback

const result = "hello"

// 2. better autocompletion

// 3. custom types

interface MenuItem {
    title: string
    cost: number
}

function printMenuItem(item: MenuItem){
    console.log(item.title, ":", item.cost)
}


// Lesson 3

let age: number = 30
let firstName: string = "Mario"
let isFictional: Boolean

age = 31
firstName = "luigi"
isFictional = true

// typescript assume type
let planet = "Earth"
let moons = 1
let isLarge = false

planet = "Satern"
moons = 145
isLarge = true

// null and undefined

let something: null
let another: undefined

something = null

another = undefined

// Lesson 5

// Arrays 

let names: string[] = ["Mario", "luigi", "Peach"]
let ages: number[] = [35, 28, 24]

names.push("Bowser")
ages.push(35)

// type inferance

let fruits = ["apples", "mangos", "bananas", "pears"]

fruits.push("Peaches")

const f = fruits[3]

let things = [1, true, "hello"]
// object literals

let user: {firstName: string, age: number, id: number} = {
    firstName: "mario",
    age: 3,
    id: 1
}

user.firstName = "peach"
user.id = 2

// type inference with object literals

let person = {
    name: "luigi",
    score: 35
}

person.name = "bowser"
person.score = 3

const score = person.score