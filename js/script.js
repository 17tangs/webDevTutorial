var database = [{
	username: "andrei",
	password: "supersecret"
}]
var data = ["f", "e", "d", "c", "b","a"];
data.forEach(function(s, i){
	console.log(s,i);
})

var newsFeed = [
{
	username:"Bobby",
	timeline: "so tired"
},{
	username: "Sally",
	timeline: "Javascript is cool"
}
]

function isValid(user, pass){
	for (var i = 0; i<database.length; i++) {
		if(database[i].username === user && database[i].password === pass){
			return true;
		}
	}
}

function signIn(user, pass){
	if(isValid(user, pass)){
		alert("logged in");
	}
	else{
		alert("invalid crudentials");
	}
	
}
var userNamePrompt = prompt("What's your username?");
var passWordPrompt = prompt("what is your password");

signIn(userNamePrompt, passWordPrompt);
