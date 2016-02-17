

var nonsense = function(s){
	var blab = function(){
		alert(s);
	}
	return blab;
}

//blabLater will now hold the definition of blab() 
var blabLater = nonsense();
//so it can be used as such:
blabLater('Hi there!') //alert: Hi there!



//--------------------------------------------------------------------
var firstNameFunc = function(firstName) {
	var lastNameFunc = function(lastName) {
		console.log(firstName + ' ' + lastName);
	}
	return lastNameFunc;
}

var firstName = firstNameFunc('Jordan'); //this logs nothing
firstName('McMillan'); //logs: Jordan Mcmillan
firstName('Lance') //logs: Jordan Lance


//--------------------------------------------------------------------
var storyWriter = function() {
	var story = '';
	return {
		addWords: function(word){ return story += word; },
		erase: function(){ story = ''; } 
	}
}

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('Hi, my name is Jordan.'); // logs: Hi, my name is Jordan.
storyOfMyLife.addWords('I like to take walks.'); // logs: Hi, my name is Jordan. I like to take walks.








