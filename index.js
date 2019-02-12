// const Joi = require("joi");
// const logger = require("./logger");
// const express = require("express");
// const app = express();

// app.use(express.json()); //middleware
// app.use(express.urlencoded({ extended: true })); //url enconded payload (key=value&key=value)
// app.use(express.static("public"));

// app.use(logger);
// app.use(function(req, res, next) {
//   console.log("Authenticating....");
//   next();
// });

// const courses = [
//   { id: 1, name: "course1" },
//   { id: 2, name: "course2" },
//   { id: 3, name: "course3" }
// ];

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/api/courses", (req, res) => {
//   res.send(courses);
// });

// app.post("/api/courses", (req, res) => {
//   const { error } = validateCourse(req.body); //result.error
//   //400 Bad Request
//   if (error) {
//     return res.status(400).send(error.details[0].message); //first part of the message error, more detailes
//   }
//   const course = {
//     id: courses.length + 1,
//     name: req.body.name
//   };

//   courses.push(course);
//   res.send(course);
// });

// app.put("/api/courses/:id", (req, res) => {
//   const course = courses.find(c => c.id === parseInt(req.params.id));
//   if (!course) {
//     return res.status(404).send("The course with the given ID was not found");
//   }

//   const { error } = validateCourse(req.body);
//   //400 Bad Request
//   if (error) {
//     return res.status(400).send(error.details[0].message); //first part of the message error, more detailes
//   }

//   course.name = req.body.name;
//   res.send(course);
// });

// app.get("/api/courses/:id", (req, res) => {
//   const course = courses.find(c => c.id === parseInt(req.params.id));
//   if (!course)
//     return res.status(404).send("The course with the given ID was not found");
//   res.send(course);
// });

// app.delete("/api/courses/:id", (req, res) => {
//   const course = courses.find(c => c.id === parseInt(req.params.id));
//   if (!course)
//     return res.status(404).send("The course with the given ID was not found");

//   const index = courses.indexOf(course);
//   courses.splice(index, 1);
//   res.send(course);
// });

// function validateCourse(course) {
//   const schema = {
//     name: Joi.string()
//       .min(3)
//       .required()
//   };
//   return Joi.validate(course, schema);
// }

// const port = process.env.PORT || 3000;
// app.listen(3000, () => console.log(`Listening on port ${port}...`));

///////////////////////////////////////////
////////                           ////////
////////       Delete After        ////////
////////                           ////////
///////////////////////////////////////////

console.log("Before");

// getUser(1, user => {
//   getRepositories(user.gitHubUsername, repos => {
//     getCommits(repos[0], commits => {
//       console.log(commits);
//     });
//   });
// });

getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log("Commits", commits))
  .catch(err => console.log("Error", err.message));

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
}
