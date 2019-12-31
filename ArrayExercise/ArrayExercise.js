const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
console.log('1. Filter the list of inventors for those who were born in the 1500\'s');
console.log(inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600));

// Array.prototype.map()
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
console.log('2. Give us an array of the inventors first and last names');
console.log(inventors.map(inventor => (`${inventor.first} ${inventor.last}`)));

// Array.prototype.sort()
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending
console.log('3. Sort the inventors by birthDate, oldest to youngest');
console.log(inventors.sort((a, b) => a.year - b.year));

// Array.prototype.reduce()
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reducer is a pure function that takes the previous state and an action, and returns the next state.
console.log('4. How many years did all the inventors live?');
console.log(inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0));


console.log('5. Sort the inventors by years lived');
console.log(inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year)));

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// console.log(
//   Array.from(document.querySelectorAll('.mw-category-group ul li a'))
//   .map(link => link.text)
//   .filter(name => name.includes('de'))
// );


// Sort the people alphabetically by last name
console.log('7. Sort the people alphabetically by last name');

 console.log(people.sort((a, b) => {
   const [aLast, aFirst] = a.split(', ');
   const [bLast, bFirst] = b.split(', ');

   return aLast > bLast ? 1 : -1;
 }));

// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
console.log('8. Sum up the instances of each of these');

console.log(data.reduce((allNames, name) => {
  if(name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 0
  }
  return allNames;
},{}));

