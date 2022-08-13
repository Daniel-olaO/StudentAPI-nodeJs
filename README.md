# Student Web Server

Student Web Server is a RESTful API that manages students' and courses' information. The API performs CRUD operations on student and course data (stored in MongoDB), and returns the results in JSON format. The API can allow students to register for courses, and students can view their current courses.

## Table of Contents

- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#api-testing)
- [Tools](#tools)
- [Heroku](#heroku)
- [Demo](#demo)
- [Authors](#authors)

# Motivation

Student Web Server was inspired by my college schedule builder. I wanted to create a web application that would allow students to create their own schedules by adding courses to their schedule or removing courses from their schedule.

# Installation

Use the package manager npm to install Student Web Server.

```bash
npm install
```

# Usage

Use the following commands to start the application.

```bash
npm start
```

Users are required set the environment variables for the application to work.
eg.
DB_CONNECTION for the database connection
JWT_SECRET for the JWT token secret
JWT_REFRESH_ACCESS_TOKEN for the JWT refresh token secret

# Tools

Student Web Server uses the following tools:
Node.js, NPM, MongoDB, Mongoose, Express, Passport, JWT, Bcrypt, JOI

# Demo

- [Backend](https://danielstudent-api.herokuapp.com/api)
- [Frontend](...)

# API Testing

The API has test cases for all the endpoints.
The API is tested using the following tools:
JEST
command for running the tests:

```bash
npm run test
```

# Authors

Student Web Server was created and maintained by:

### Daniel Adedeji

- [Github](https://github.com/Daniel-olaO)
- [LinkedIn](https://www.linkedin.com/in/daniel-adedeji-1a996220a/)

with the memtorship of:

### Russell Pollari

- [Github](https://github.com/Russell-Pollari)
- CEO of [SharpestMinds](https://www.sharpestminds.com/)
- [LinkedIn](https://www.linkedin.com/in/russell-pollari/)
