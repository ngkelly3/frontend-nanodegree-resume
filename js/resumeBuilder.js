var skills =
	["HTML", "CSS", "Javascript", "Octave", "Matlab"];

var bio = {
	"name": "Kelly Ng",
	"role": "Web Developer",
	"contacts": {
		"mobile": "587-225-0076",
		"email": "kellyng87@gmail.com",
		"github": "ngkelly3",
		"twitter": "@thisiskellywing",
		"location": "Calgary"
	},
	"welcomeMessage": "Welcome to my website!",
	"skills": skills,
	"biopic": "images/fry.jpg",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
		var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

		//enter contact info
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;

		//display bio on page
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBiopic);
		$("#header").append(formattedwelcomeMsg);
		$("#topContacts").append(formattedContacts);

		for

		/*
		if (skills.length != 0) {
			$("#header").append(HTMLskillsStart);

			var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
			$("#header").append(formattedSkill);

			formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
			$("#header").append(formattedSkill);

			formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
			$("#header").append(formattedSkill);

			formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
			$("#header").append(formattedSkill);
		};*/
	}
};

var education = {
	"schools": [
	{
		"name": "University of British Columbia",
		"location": "Vancouver, British Columbia, Canada",
		"degree": "Bachelor of Applied Science, Minor in Commerce",
		"majors": ["Mechanical Engineering"],
		"dates": "September 2005 - May 2010",
		"url": "http://you.ubc.ca/ubc_programs/mechanical-engineering-vancouver/"
	}
	],
	"onlineCourses": [
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"date": "November 2015 - Present",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?gclid=CNzMjJDdoMoCFQokHwodz9wLQA"
	},
	{
		"title": "Machine-Learning",
		"school": "Coursera (course by Stanford University)",
		"date": "January 2016 - Present",
		"url": "https://www.coursera.org/learn/machine-learning/"
	}
	]
};

//Need better work descriptions, as well as links to every job you've done
var work = {
	"jobs": [
	{
		"employer": "Shell Canada Energy",
		"title": "Static Equipment Engineer",
		"location": "Fort McMurray",
		"dates": "July 2014 - September 2015",
		"description": "Pressure Equipment Specialist"
	},
	{
		"employer": "Shell Canada Energy",
		"title": "Operations Engineer",
		"location": "Waterton",
		"dates": "October 2011 - July 2014",
		"description": "Process Engineer for Deep Cut Unit"
	}
	],
	"display": function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

			var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
			$(".work-entry:last").append(formattedEmployerTitle);
		}
	}
};

//need images in your project
var projects = {
	"projects": [
	{
		"title": "Project P1 - Online Resume (Udacity)",
		"dates": "November 2015",
		"description": "Built online resume using HTML, CSS and JS.",
		"images": "no image yet"
	},
	{
		"title": "Home Automation System",
		"dates": "January 2016 - Present",
		"description": "Created a home automation system that does a bunch of shit that Mark Zuckerberg challenged himself to do as well.",
		"images": "no image yet"
	}
	],
	"display": function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			var formattedprojectdates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			var formattedprojectdescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			var formattedprojectimages = HTMLprojectTitle.replace("%data%",projects.projects[project].images);

			formattedprojectentry = formattedprojectTitle + formattedprojectdates + formattedprojectdescription + formattedprojectimages;
			$(".project-entry:last").append(formattedprojectentry);
		}
	}
};

bio.display();
work.display();
projects.display();



$("#main").append(internationalizeButton);

/*the code below is optional
function inName(name) {
	var name = name.trim();
	var nameArray = name.split(" ");

	return nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase() + " " + nameArray[1].toUpperCase();
};*/

$("#mapDiv").append(googleMap);
