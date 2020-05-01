# Workout Tracker

Workout tracking application using Mongoose and MongoDB

![GitHub top language](https://img.shields.io/github/languages/top/ac0712148/workout-tracker)
![github-repo-size](https://img.shields.io/github/repo-size/ac0712148/workout-tracker)
![github-last-commit](https://img.shields.io/github/last-commit/ac0712148/workout-tracker)


## Links
App: https://polar-plains-45453.herokuapp.com/

Repo: https://github.com/ac0712148/workout-tracker


## Table of Contents
  * [Description](#description)
  * [Technology Specs](#technology-specs)
  * [Installation and Dependencies](#installation-and-dependencies)
  * [Purpose](#purpose)

## Description

For this project, we design and build a fitness workout tracker that lets the user log workout exercises and track their progress till completion. The app also renders stats and charts in a dashboard that allow the user to track their workouts visually. The type of workouts the user is able to track are resistance and cardio workouts. The workouts created are stored and saved in a database. More features will be available in the future.

## Technology Specs

This application runs on JavaScript/ES6 for front and back end logic. We use HTML and CSS to design the user interface built on the Semantic UI framework. To send request, we use the Window API async fetch calls. For the back end side, we use noSQL as our database along with monogoose to structure our data and present requirements for storage. The server runs on express js to help us receive calls from the client side.

## File Structure
```
.
├── models
│   ├── index.js
│   └── workout.js
│ 
├── package.json
│
├── public
│   ├── api.js
│   ├── exercise.html
│   ├── exercise.js
│   ├── index.html
│   ├── stats.html
│   ├── style.css
│   ├── workout-style.css
│   └── workout.js
│
├── seeders
│    └── seed.js    
│
├── server.js
│
└── routes
    └── api.js
```

## Installation and Dependencies

To install and run this project in your local host, make sure this projects' `package.json` is in you directory. Also you must have `mongoDB` installed in your machine. Simply run to install dependencies:
```
npm install
```
Once the dependencies are installed, to run the localhost server:
```
npm run start
```

## Purpose

The purpose of this project is to demonstrate the use of mongoDB database and mongoose for storing data in noSQL. This project is also used to demonstrate the use of models to structure data without the use of a Schema from typical SQL languages