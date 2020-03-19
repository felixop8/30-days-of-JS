
const people = [
    { name: 'felix', year: 1988, id: 1},
    { name: 'Margaret', year: 1986, id: 2 },
    { name: 'Eric', year: 1985, id: 3 },
    { name: 'Sam', year: 1980, id: 3 },
]

// The some() method tests whether at least one element in the array passes 
//the test implemented by the provided function. It returns a Boolean value. 
const currentYear = new Date().getFullYear();
const isAdult = people.some((person) => currentYear - person.year >= 19 );
console.log({isAdult});

// The every() method tests whether all elements in the array pass the test implemented
// by the provided function. It returns a Boolean value.
const isEveryoneAdult = people.every((person) => currentYear - person.year >= 19 );
console.log({isEveryoneAdult})

// The find() method returns the value of the first element in the 
// provided array that satisfies the provided testing function.
const personWithThatID = people.find((person) => person.id === 2);
console.log({isEveryoneAdult})


const arrayIndex = people.findIndex((person) => person.id === 1);
console.log({arrayIndex});

