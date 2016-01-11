/*
// $("#main").append("Kelly");

var awesomeThoughts =
	"I am Kelly and I am AWESOME!"

// $("#main").append(awesomeThoughts);

var email =
	"kellyng87@gmail.com";

var newEmail =
	email.replace("gmail","udacity");

console.log(email);
console.log(newEmail);

var funThoughts =
	awesomeThoughts.replace("AWESOME!","FUN");

$("#main").append(funThoughts); */

var name = "Kelly Ng";
var role = "Web Developer";

var formattedName =
	HTMLheaderName.replace("%data%", name);

var formattedRole =
	HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);



var skills =
	["HTML", "CSS", "Javascript", "Octave", "Matlab"];

var bio = {
	"name" : "Kelly Ng",
	"role" : "Web Developer",
	"contacts" : {
		mobile : "587-225-0076",
		email : "kellyng87@gmail.com",
		github : "ngkelly3",
		twitter : "@thisiskellywing",
		location : "Calgary, Alberta, Canada"
	},
	"welcomeMessage" : "Welcome to my website!",
	"skills" : skills
	"biopic" : "images/fry.jpg"
	/*"display" : function*/
};

$("#main").append(bio.name);