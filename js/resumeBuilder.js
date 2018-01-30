var bio = {
    name: "Chris Rhudy",
    role: "Web Developer",
    contacts: {
        mobile: "203-980-5045",
        email: "chrisrhudy@gmail.com",
        github: "chrisrhudy",
        twitter: "@crhudy",
        location: "Chicago"
    },
    welcomeMessage: "Willkommen bei meinem Resumee!",
    skills: [
        "HTML", "CSS", "JavaScript", "German", "Spanish", "Writing and Editing"
    ],
    biopic: "images/pantocrator.jpg",
    display: function() {
        var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedHeaderName, formattedHeaderRole);

        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedBiopic, formattedWelcomeMessage);

        var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedContactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedContactMobile, formattedContactEmail, formattedContactGithub, formattedContactTwitter, formattedContactLocation);

        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        });
    }
};

var education = {
    schools: [{
            name: "Yale University",
            location: "New Haven, CT",
            degree: "BA",
            majors: ["History"],
            dates: "1997-2001"
        },
        {
            name: "Harvard University",
            location: "Cambridge, MA",
            degree: "None (summer school)",
            majors: ["n/a"],
            dates: "2001-2001"
        }
    ],
    onlineCourses: [{
            title: "Intro to Programming Nanodegree",
            school: "Udacity",
            dates: "2016",
            url: "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
        },
        {
            title: "Introduction to Computer Science and Programming Using Python",
            school: "MITx",
            dates: "2017",
            url: "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-9"
        }
    ],
    display: function() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation);

            school.majors.forEach(function(major) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedSchoolMajor);
            });
        });

        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineSchool) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineSchool.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineSchool.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineSchool.dates);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineSchool.url);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineUrl);
        });
    }
};

var work = {
    jobs: [{
            employer: "Self-Employed",
            title: "German Translator",
            location: "Chicago, IL",
            dates: "2016-2018",
            description: "Primarily translate German legal documents into English"
        },
        {
            employer: "The Salem Group",
            title: "German-language Document Reviewer",
            location: "Chicago, IL",
            dates: "2012-2015",
            description: "Reviewed/Translated German-language legal documents"
        },
        {
            employer: "Rivers & Zogas",
            title: "Paralegal",
            location: "Chicago, IL",
            dates: "2007-2010",
            description: "Real-estate law firm"
        },
        {
            employer: "Hopkins School",
            title: "History Teacher",
            location: "New Haven, CT",
            dates: "2005-2008",
            description: "Taught mainly American history"
        }
    ],
    display: function() {
        $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function(job) {
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle, formattedDates, formattedWorkLocation, formattedDescription);
        });
    }
};

var projects = {
    projects: [{
        title: "Hot Tomatoes Website",
        dates: "2016",
        description: "Personal website listing favorite movies, shows, and books, created using Python classes",
        images: ["images/HotTomatoes.jpg"]
    }],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        projects.projects.forEach(function(project) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedProjectImage);
            });
        });
    }
};

education.display();
bio.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
