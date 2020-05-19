var database = [
{

	username: "Catia",
	password: "oie"
},
{

	username: "Sally",
	password: "123"
},
{

	username: "ingrid",
	password: "777"
}

];

var newsFeed =[
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIN(username,password) {
	if (username === database[0].username 
		&& password===[0].password) {
		console.log(newsFeed);
	}
	else{
		alert("Sorry, wrong username and password!");
	}

}

signIN(userNamePrompt, passwordPrompt);