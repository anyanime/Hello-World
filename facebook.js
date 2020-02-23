
var database = [
        {
        	username: "Anyanime",
        	password: "Benson"
        },
         {
        	username: "Eddy",
        	password: "77"
        },
         {
        	username: "Ken",
        	password: "son"
        },
         {
        	username: "Ann",
        	password: "123"
        }
];

var newsFeed = [
        {
        	username: "Bassey",
        	timeline: "I am so interested in Javascript"
        },
        {
        	username: "Ime",
        	timeline: "I think you are correct"
        }
];

var userNamePrompt = prompt("Enter your username");
var passwordPrompt = prompt("Enter your password");

function signIn(user, pass) {
	if (user === database[0].username &&
	    pass === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("sorry you have entered a wrong input");
	}
}

signIn(userNamePrompt, passwordPrompt);