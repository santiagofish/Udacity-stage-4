
var bio = {
   "name": "Chris Rhudy",
   "role": "Web Developer",
   "contacts": {
     "mobile": "203-980-5045",
     "email": "chrisrhudy@gmail.com",
     "github": "chrisrhudy",
     "twitter": "@crhudy",
     "location": "Chicago"
   },
   "welcomeMessage": "Willkommen bei meinem Resumee!",
   "skills": [
     "HTML", "CSS", "JavaScript", "German", "Spanish", "Writing and Editing"
   ],
   "bioPic": "images/pantocrator.jpg",
   "display": ""
};

var education = {
  "schools": [
    {
    "name": "Yale University",
    "location": "New Haven, CT",
    "degree": "BA",
    "major": "History",
    "dates": "1997-2001"
    },
    {
    "name": "Harvard University",
    "location": "Cambridge, MA",
    "degree": "None (summer school)",
    "major": "n/a",
    "dates": "2001-2001"
    }
  ],
  "onlineCourses": [
    {
      "title": "Intro to Programming, Nanodegree",
      "school": "Udacity",
      "dates": "2016",
      "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    },
    {
      "title": "Introduction to Computer Science and Programming Using Python",
      "school": "MITx",
      "dates": "2017",
      "url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-9"
    },
  ],
  "display": ""
};

var work = {
  "jobs": [
    {
      "employer": "German Translator",
      "title": "self-employed",
      "dates": "2017",
      "description": "Chicago, IL"
    },
    {
      "employer": "Paralegal",
      "title": "Rivers & Zogas",
      "dates": "3",
      "description": "Chicago, IL"
    },
    {
      "employer": "Hopkins School",
      "title": "History Teacher",
      "dates": "3",
      "description": "New Haven, CT"
    },
  ],
  "display": ""
};

var projects = {
  "project": [
    {
    "title": "Hot Tomatoes Website",
    "dates": "2016",
    "description": "Personal website listing favorite movies, shows, and books",
    "image": "images/HotTomatoes.jpg"
    }
  ],
  "display": ""
};

/* Functions */

bio.display = (function displayBio() {

  var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedHeaderRole);

  var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedHeaderName);

  var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts, #footerContacts").append(formattedContactMobile);

  var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts, #footerContacts").append(formattedContactEmail);

  var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts, #footerContacts").append(formattedContactGithub);

  var formattedContactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts, #footerContacts").append(formattedContactTwitter);

  var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts, #footerContacts").append(formattedContactLocation);

  var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBiopic);

  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMessage);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(var skillEntry in bio.skills) {

      var formattedSkills = HTMLskills.replace("%data%", bio.skills[skillEntry]);
      $("#header").append(formattedSkills);
    }
  }
})();

education.display = (function displayEducation() {
  if(education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);

    for(var schoolEntry in education.schools) {

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schoolEntry].name);
      $(".education-entry").append(formattedSchoolName);

      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolEntry].degree);
      $(".education-entry").append(formattedSchoolDegree);

      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolEntry].dates);
      $(".education-entry").append(formattedSchoolDates);

      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolEntry].location);
      $(".education-entry").append(formattedSchoolLocation);

      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolEntry].major);
      $(".education-entry").append(formattedSchoolMajor);
    }
  }
  if(education.onlineCourses.length > 0) {
    $(".education-entry").append(HTMLonlineClasses);
    for(var onlineEntry in education.onlineCourses) {

      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineEntry].title);
      $(".education-entry").append(formattedOnlineTitle);

      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineEntry].school);
      $(".education-entry").append(formattedOnlineSchool);

      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineEntry].dates);
      $(".education-entry").append(formattedOnlineDates);

      var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineEntry].url);
      $(".education-entry").append(formattedOnlineUrl);
    }
  }
})();

work.display = (function displayWork() {
  if(work.jobs.length > 0) {
    for(var job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
})();

projects.display = (function displayProjects() {
  if(projects.project.length > 0) {
    for(var projectEntry in projects.project) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[projectEntry].title);
      $(".project-entry:last").append(formattedProjectTitle);

      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[projectEntry].dates);
      $(".project-entry:last").append(formattedProjectDates);

      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[projectEntry].description);
      $(".project-entry:last").append(formattedProjectDescription);

      var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[projectEntry].image);
      $(".project-entry:last").append(formattedProjectImage);
    }
  }
})();


$("#mapDiv").append(googleMap);
