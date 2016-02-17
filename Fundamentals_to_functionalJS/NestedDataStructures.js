var AnimalTestUser = function(username){
	if (arguments.length > 1){ //check to see if other arg exist
		var otherArgs = []; //array for extra args
		for (var i = 1; i < arguments.length; i++){
			otherArgs.push(arguments[i]);
		}
	}
	return {
		name: username,
		otherArgs: otherArgs
	};
}

var testSheep = AnimalTestUser('CottonBall', {'loves running': true}, [1,2,3] );
//console.log(testSheep);

var AnimalCreator = function(username, species, tagline, noises, interests) {
	return {
		'username': username,  //just showing the property "username" is assumed as a string in object literal notation
		species: species,    //don't have to explicitly show the property is a string
		tagline: tagline,
		noises: noises,
		interests: interests,
		friends: [],
		matches: []
	};
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baaahh', 'pew pew','fartfartfart'], ['wrestling', 'eating', 'taking walks']);
var cow = AnimalCreator('Sir Moo Moo', 'Cow', 'Got milk?', ['moooo', 'pew pew','fartfartfart'], ['eating', "talking"]);
var llama = AnimalCreator('Zeny Von llama', 'llama', 'Single and ready to mingle', ['baaahh', 'pew pew','fartfartfart'], ['talking', 'drinking wine']);
var pig = AnimalCreator('Miss Pig', 'pig', 'Single and ready to mingle', ['baaahh', 'pew pew','fartfartfart'], ['talking', 'drinking wine']);
//console.log(sheep);

var addFriend = function(animal, friendToAdd){
	animal.friends.push(friendToAdd.username); //add friend to list	
}

addFriend(sheep, cow);
addFriend(sheep, llama);
addFriend(cow, sheep);
addFriend(cow, llama);
addFriend(llama, cow);
addFriend(llama, sheep);
addFriend(pig, cow);

//console.log(sheep);
//console.log(cow);
//console.log(llama);

var myFarm = [];
myFarm.push(sheep, cow, llama, pig);
//console.log(myFarm);

var addMatchesArray = function(farm){
	for(var i = 0; i < farm.length; i++){
		farm[i].matches = []; //add the property matches and set it to an empty array
	}
}

//addMatchesArray(myFarm);
//console.log(myFarm);

// function will loop through all the animal object in the array of all animals and match the animals based on their interests
var getMatches = function(farm){
	for(var i = 0; i < farm.length; i++){ //take first animal
		for (var j = 0; j < farm.length; j++){ //check rest of animals with the first
			if (i !== j){ //skip when i === j so we dont came an animal with itself 
				for (var currInterest = 0; currInterest < farm[i].interests.length; currInterest++){ //look through the current animals interest and compare with other animals interest
					for (var other = 0; other < farm[j].interests.length; other++) {
						if (currInterest !== other) {
							if (farm[i].interests[currInterest] === farm[j].interests[other]) {
								farm[i].matches.push(farm[j].username);
							}
						}
					}
				}
			}
		}
	}
}
//console.log(myFarm[0].interests.length);
//getMatches(myFarm);
//console.log(myFarm);

var friends = [];
var relationships = {};
var matches = [];
friends.push(myFarm[0].username, myFarm[1].username);
relationships.friends = friends;
relationships.matches = matches;
relationships.matches.push(myFarm[3].username); 

console.log(relationships);
