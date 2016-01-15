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
	"welcomeMessage": "Welcome to my website!  Enjoy your stay.",
	"skills": ["HTML", "CSS", "Javascript", "Octave", "Matlab"],
	"biopic": "images/cute-cat.jpg",
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
		$("#header").append(formattedwelcomeMsg);
		$("#biopic").append(formattedBiopic);
		$("#topContacts").append(formattedContacts);
		$("#footerContacts").append(formattedContacts);
		//display skills
		$("#skills").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		};
	}
};

var education = {
	"schools": [
	{
		"name": "University of British Columbia",
		"location": "Vancouver",
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
	},
	{
		"title": "Make a Website, JavaScript, jQuery, Ruby",
		"school": "Code Academy",
		"date": "August 2015 - October 2015",
		"url": "https://www.codecademy.com/learn/"
	},
	{
		"title": "The Story Intensive",
		"school": "Story is a State of Mind (Sarah Selecky Writing Blog)",
		"date": "September 2015 - January 2016",
		"url": "http://www.sarahselecky.com/story-intensive/"
	}
	],
	"display": function() {
		$("#education").append(HTMLschoolStart);
		//display education
		for (school in education.schools) {
			var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			for (major in education.schools[school].majors) {
				var formattedschoolMajors = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
			};
			var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			//school URLs - can we combine this into one?
			var formattedschoolURL = HTMLonlineURL.replace("#",education.schools[school].url);
			formattedschoolURL = formattedschoolURL.replace("%data%",education.schools[school].url);
			var formattedschoolEntry = formattedschoolName + formattedschoolLocation + formattedschoolDegree + formattedschoolDates + formattedschoolMajors + formattedschoolURL;
			$(".education-entry:last").append(formattedschoolEntry);
		};
		//display online courses
		$(".education-entry:last").append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses) {
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].date);
			var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
			formattedonlineURL = formattedonlineURL.replace("#",education.onlineCourses[onlineCourse].url);
			var formattedonlineCourse = formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL;
			$(".education-entry:last").append(formattedonlineCourse);
		};
	}
};

var work = {
	"jobs": [
	{
		"employer": "Shell Canada Energy",
		"title": "Static Equipment Engineer",
		"location": "Fort McMurray",
		"dates": "July 2014 - September 2015",
		"description": "I monitored the integrity and performance of pressure vessels on the Shell Albian Sands froth unit for most days.  On other days, I would walk up the 800 steps of the tallest structure and contemplate life beyond fossil fuels while staring out into the tar sands abyss."
	},
	{
		"employer": "Shell Canada Energy",
		"title": "Operations Engineer",
		"location": "Waterton",
		"dates": "October 2011 - July 2014",
		"description": "Even though I studied to be a mechanical engineer, I was hired as a process engineer (as you do).  On the first day of work, I made it very clear to my superiors that I was an inferior candidate for the position.  My superiors told me that they simply needed a bum in the seat.  So that's what I was: a mechanical engineer faking his way as a process engineer.  It worked out well, but by the end of this position, I began to question how I could contribute to the world more effectively by leveraging my strengths (whatever they were)."
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
		"title": "Project P1/P2 - Online Resume (Udacity)",
		"dates": "November 2015/January 2016",
		"description": "Built a simple online resume using HTML, CSS and JS and powered by the Bootstrap framework.",
		"images": "No image yet!"
	},
	{
		"title": "Home Automation System",
		"dates": "January 2016 - Present",
		"description": "Inspired by Mark Zuckerberg's AI challenge for 2016, I hope to create a simple AI system at home that can respond to voice commands to control things like music, lights and temperature (goals subject to change).",
		"images": "images/proj-item2.png"
	}
	],
	"display": function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			var formattedprojectdates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			var formattedprojectdescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			var formattedprojectimages = HTMLprojectImage.replace("%data%",projects.projects[project].images);
			formattedprojectentry = formattedprojectTitle + formattedprojectdates + formattedprojectdescription + formattedprojectimages;
			$(".project-entry:last").append(formattedprojectentry);
		}
	}
};

var navbar = {
	"image": "images/favicon-inverted.ico",
	"brand": "Kelly Website",
	"linkActive": "Home",
	"link": ["About","Blog","Contact"],
	"display": function() {
		$("#navbarHTML").append(HTMLnavbarStart);
		//objects for the two things below
		var formattednavbarBrand = HTMLnavbarBrand.replace("%image%",navbar.image);
		formattednavbarBrand = formattednavbarBrand.replace("%data%",navbar.brand);
		$(".navbar-brand").append(formattednavbarBrand);
		var formattednavbarLinkActive = HTMLnavbarLinkActive.replace("%data%",navbar.linkActive);
		$("#navbarLink").append(formattednavbarLinkActive);
		for (link in navbar.link) {
			var formattednavbarLink = HTMLnavbarLink.replace("%data%",navbar.link[link]);
			$("#navbarLink").append(formattednavbarLink);
		};
	}
};

/*modal HTML code*/
var modal = {
	modals: [
	{
		"id": "#workExperienceBtn",
		"image": "images/profile-item1.png",
		"title": "Work Experience",
		"headerid": "#myModalHeader1",
		"contentid": "#mymodal-content1",
		"modalid": "#myModal1"
	},
	{
		"id": "#projectsBtn",
		"image": "images/profile-item2.png",
		"title": "Projects",
		"headerid": "#myModalHeader2",
		"contentid": "#mymodal-content2",
		"modalid": "#myModal2"
	},
	{
		"id": "#educationBtn",
		"image": "images/profile-item3.png",
		"title": "Education",
		"headerid": "#myModalHeader3",
		"contentid": "#mymodal-content3",
		"modalid": "#myModal3"
	}
	],
	"display": function() {
		//display HTML structure
		$("#modalcode").append(HTMLmodalworkExperienceStart);
		$("#modalcode").append(HTMLmodalprojectStart);
		$("#modalcode").append(HTMLmodaleducationStart);
		for (num in modal.modals) {
			var formattedmodalImage = HTMLmodalImage.replace("%data%",modal.modals[num].image);
			var formattedmodalTitle = HTMLmodalTitle.replace("%data%",modal.modals[num].title);
			$(modal.modals[num].id).append(formattedmodalImage);
			$(modal.modals[num].id).append(formattedmodalTitle);
		};
		//display HTML markup
		$("body").append(HTMLmodalMarkupStart1);
		$("body").append(HTMLmodalMarkupStart2);
		$("body").append(HTMLmodalMarkupStart3);
		for (num in modal.modals) {
			var formattedmodalMarkupTitle = HTMLmodalMarkupTitle.replace("%data%",modal.modals[num].title);
			formattedmodalMarkupTitle = formattedmodalMarkupTitle.replace("%id%",modal.modals[num].headerid.slice(1));
			$(modal.modals[num].headerid).append(formattedmodalMarkupTitle);
			var formattedmodalMarkupBody = HTMLmodalMarkupBody.replace("%data%",modal.modals[num].id.slice(1,-3));
			$(modal.modals[num].contentid).append(formattedmodalMarkupBody);
			$(modal.modals[num].contentid).append(HTMLmodalMarkupFooter);
			$(modal.modals[num].id).click(function(){
				$(modal.modals[num].modalid).modal('show');
			});
		};
	}
};

var internationalize = {
	display: function() {
		$(".hr").append(HTMLaddHr);
		$("#main").append(internationalizeButton);
		$("#mapDiv").append(googleMap);
	}
};

navbar.display();
bio.display();
modal.display();
education.display();
work.display();
projects.display();
internationalize.display();
