// Lesson 1: plusses of typescript
// 1. better error feedback
var result = "hello";
function printMenuItem(item) {
    console.log(item.title, ":", item.cost);
}
// Lesson 3
var age = 30;
var firstName = "Mario";
var isFictional;
age = 31;
firstName = "luigi";
isFictional = true;
// typescript assume type
var planet = "Earth";
var moons = 1;
var isLarge = false;
planet = "Satern";
moons = 145;
isLarge = true;
// null and undefined
var something;
var another;
something = null;
another = undefined;
// Lesson 5
// Arrays 
var names = ["Mario", "luigi", "Peach"];
var ages = [35, 28, 24];
names.push("Bowser");
ages.push(35);
// type inferance
var fruits = ["apples", "mangos", "bananas", "pears"];
fruits.push("Peaches");
var f = fruits[3];
var things = [1, true, "hello"];
// object literals
var user = {
    firstName: "mario",
    age: 3,
    id: 1
};
user.firstName = "peach";
user.id = 2;
// type inference with object literals
var person = {
    name: "luigi",
    score: 35
};
person.name = "bowser";
person.score = 3;
var score = person.score;
