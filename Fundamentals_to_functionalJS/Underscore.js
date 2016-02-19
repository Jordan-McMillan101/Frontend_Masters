
// rewrote some functions using underscore.js

//takes an animal object and add the property speak
function AnimalMaker(name) {
  return {
    speak: function() {
      console.log('my name is ', name);
    }
  };
}

var animalNames = ['smokey','cleo','Richard'];
var farm = []; //array of animal objects

// iterating through the array of animals names with a normal for loop to push the animal objects into the array
for(var i = 0; i < animalNames.length; i++){
  farm.push(AnimalMaker(animalNames[i]));
}

//rewrote same loop with underscore js
_.each(animalNames, function(name) {
  farm.push(AnimalMaker(name));
});

//rewrote same loop with underscore js
var farm = _.map(animalNames, function(name){
  return AnimalMaker(name);
});
//rewrote same loop with underscore js
var farm = _.map(animalNames, AnimalMaker);

//------------------------------------------------------------------------------------
var answers = ['yes', 'no', 'maybe'];
var exitedAnswer = function(str){
  return str + '!';
};
_.map(answers, exitedAnswer); // how exitedAnswer() is being called under the hood:
                              //exitedAnswer(answers[0], 0, answers)
                              //exitedAnswer(answers[1], 1, answers)
                              //exitedAnswer(answers[2], 2, answers)
