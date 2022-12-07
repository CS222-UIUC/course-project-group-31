# Project Title: UIUC Course Recommeder

## Project Pitch/Introduction:

- Students all around UIUC often struggle to find classes that are suitable for them
- In order to find classes, students often resort to
    - digging through massive existing databases of courses
    - asking friends
    - sifting through Reddit to find out which classes they should take
- UIUC does provide a database for students to find classes based on criteria but:
    - The database is clunky, and does not have a clean UI for students to work with
    - It does not provide reliable feedback from students on these classes
Thus, Group 31 created a customized Course Recommender application - created by UIUC students, for UIUC students. 

## Technical Architecture:

![Technical Architecture](/images/technical_arch.png)

Programming Languages: React.js for the front end, mySQL database.

Major Libraries Used: React library, Express NodeJS library

Miscellaneous Software Usage: Visual Studio Code, GitHub

Components: The project offers a login and signup component. It also has an add course and post course review component. We are actively looking into methods for adding ways for users to find study groups based on whatever class they are in.

Interactions With Other Components: We will independently store the courses for each student to their ID produced upon login. Each course will also have an associated set of reviews provided by users. These reviews are not to be directly linked to the user. Most React.js front end's we have are directly connected to their corresponding mySQL database backend.


## Installation Instructions: 
An installation instruction summary:
  - git clone repo from https://github.com/CS222-UIUC/course-project-group-31.git onto your local machine
  - open in VSCode
  - install node_modules
  - open two terminal windows
      1) cd frontend, npm start
      2) cd server, npm start devStart
Detailed instructions for these steps included at: https://github.com/CS222-UIUC/course-project-group-31/blob/main/frontend/README.md
    
##Group Members & Roles:
- Dimple Patel: 
    - Coded frontend (React.js) and corresponding backend interactions (mySQL) for signing up for an account, logging into an account, adding courses, and submitting course reviews
    - Sucessfully collaborated with Eisha to get a minimum viable product working
    - Set up the mySQL database for other team members to clone into their system
    - Contributed to presentation slides for technical architecture
    - Provided a demonstration of the project for the slides
    - Helped in the creation of the updated project proposal
    - Aided with group task delegation
    - Updated corresponding README.md files
    
- Eisha Peyyeti
    - Worked in parallel with Dimple to help in the processes of coding frontend (React.js) and corresponding backend interactions (mySQL) for signing up for an account, logging into an account, and submitting course reviews through Discord calls
    - Researched into storing data within a SQL database versus utilizing API dumping
    - Created a React.js form for submitting reviews on courses
    - Created all slides for the final presentation
    - Created the technical architecture diagram
    - Aided with group task delegation
    - Updated corresponding README.md files
    
- Alex Yasumoto
    - Set up the mySQL database on local machine to work on application
    - Implemented test cases to verify the system
    - Researched how to utilize Python flask within the code environment
    - Contributed to the presentation slides for lessons learned
    
- Nihal Vannaggar
    - Coded an independent frontend for signing up for an account on the application
    - Researched how to best implement the backend for the code using the frontend created
    - Helped in the creation of the updated project proposal
    - Aided with task delegation
    
- Anshul Kaushik
    - Looked into how to clone the environment locally
