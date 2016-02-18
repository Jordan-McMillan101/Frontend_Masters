//Use this file to implement Part One of your project


animal = {};

animal.username = 'Sir Richard The Cow';
animal['tagline'] = 'Single cow looking for love'; //using bracket notation

var noises = [];
animal.noises = noises;

console.log(animal.username);
console.log(animal['tagline']);

// for loop to  look at each of the properties in the object animal
var count = 0;
for (var key in animal) {
  count++;
  if (key === 'username') {
    console.log('hi my name is ' + animal[key]);
  } else if (key === 'tagline') {
    console.log('I like to say ' + animal[key]);
  }
}

var noiseArray = ['meow'];   //initializing array with meow as the 0th index
noiseArray.push('moo'); // using .push() method to add to the array
noiseArray[noiseArray.length] = 'bark';  // using bracket notation to add another element

console.log(noiseArray); // items in the array

animals = [];
var quackers = animals;

// dog object
var dog = {
  username: 'Sir Dog',
  tagline: 'likes to play fetch',
  noises: ['bark', 'woof', 'grrr']
};
// duck object
var duck = {
  username: 'Miss Ducky',
  tagline: 'likes to swim for hours at a time',
  noises: ['quack', 'duck noise', 'other duck noises']
};

animals.push(dog, duck); //adding dog and duck to array of objects
console.log("\n Objects in array 'animals[]':");
console.log(animals); // prints objects in array
