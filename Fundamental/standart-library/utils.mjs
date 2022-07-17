import util from 'util';

const firstName = 'Andrian';
const lastName = 'Raihannudin';

console.log(`Hello ${firstName} ${lastName} this is build with separato betlic`);
console.log(util.format("Hello %s %s this is build with util library", firstName, lastName));

const person = {
    firstName: "Andrian",
    lastName: "Raihannudin"
};


console.log(`Person : ${JSON.stringify(person)} this is build with separato betlic`);
console.log(util.format("Person : %j this is build with util library", person));
