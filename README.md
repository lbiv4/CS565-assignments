# CS565-assignments

## Table of Contents

- [Overview](#overview)
- [Assignment 1](#assignment-1)
- [Assignment 2](#assignment-2)
- [Assignment 3](#assignment-3)
- [Assignment 4](#assignment-4)
- [Assignment 5](#assignment-5)
- [Assignment 6](#assignment-6)

## Overview

This is Lane Barton's repo for class assignments for CS565. See subsequent section for an overview of files and work completed for each assignment.

There is also a [.gitignore](.gitignore) which omits any node modules used for assignments using Node

## Assignment 1

Assignment 1 was based around an introduction to HTML and required the following content:

1. [exercise1.html](./assignment1/exercise1.html) focused on creating a basic information submission form without any styling or JS actions
1. [exercise2.html](./assignment1/exercise2.html) was based around recreating the HTML for a website. My implementation aimed to mirror [placekitten.com](http://placekitten.com/)
1. [exercise3.html](./assignment1/exercise3.html) was a first attempt at creating HTML for a personal portfolio.

## Assignment 2

Assignment 2 was based around CSS which was included in a `<style>` tag in the header of each file. The following content was required:

1. [exercise1.html](./assignment2/exercise1.html) was intended to be an improvement on the previous [exercise1](./assignment1/exercise1.html) but with specific CSS styling to match a provided design.
1. [exercise2.html](./assignment2/exercise2.html) was an improvement on the previous [exercise2](./assignment1/exercise1.html) but with CSS also applied to match the site as much as possible. Once again, my implementation aimed to mirror [placekitten.com](http://placekitten.com/)
1. [exercise3.html](./assignment2/exercise3.html) was an improvement on the previous [exercise2](./assignment1/exercise1.html) but with CSS also applied

## Assignment 3

Assignment 3 focused on layouts and libraries using things like CSS, Flexbox, CSS Grid, and Bootstrap. The following content was required:

1. [exercise1.html](./assignment3/exercise1.html) is another contact form like the previous two exercise1 files, but using Bootstrap to match a specific layout
1. [exercise2.html](./assignment3/exercise2.html) was intended to match a specific grid layout using Bootstrap
1. excercise3.html through exercise7.html are all layout designs intending to use block vs. inline styling, positioning, floats, inline-block, Flexbox, CSS Grid, or Bootstrap Grid to match a provided design. I used block styling for [exercise3.html](./assignment3/exercise3.html), absolute positioning for [exercise4.html](./assignment3/exercise4.html), and CSS Grid for [exercise5.html](./assignment3/exercise5.html), [exercise6.html](./assignment3/exercise6.html), and [exercise7.html](./assignment3/exercise7.html)

## Assignment 4

Assignment 4 focused on Javascript, where JS code was included in a `<script>` tag in the header of each excercise's HTML file. The following content was required:

1. [exercise1.html](./assignment4/exercise1.html) provided a script that would loop through the numbers 1-100 and write specific content to the console. It writes "fizzbuzz" if the number was divisible by 3 and 5, "fizz" if it was just divisible by 3, "buzz" if it was just divisible by 5, and the number itself if it wasn't divisible by 3 or 5.
1. [exercise2.html](./assignment4/exercise2.html) provided a script that would reverse the order of digits in an integer. Going to the console demos this by showing 231756 being reversed to 657132, but you can test with other numbers by running `reverseNumber(<value>)` in the console
1. [exercise3.html](./assignment4/exercise3.html) reused the Bootstrap contact form from the previous [exercise2.html](./assignment3/exercise2.html), but added a Javascript listener that would clear the contents of the form when clicking the "Reset" button or log the provided inputs to the console when clicking the "Submit" button
1. [exercise4.html](./assignment4/exercise4.html) displays the width and height of the window and updates the values as the window size changes.
1. [exercise5.html](./assignment4/exercise5.html) provides a button and associated script that changes the background to a random color when the button is pressed

## Assignment 5

Assignment 5 was based around doing a small Express project using Node. The following requirements/detail should be noted:

1. [package.json](./assignment5/package.json) was created with `npm init` and contains the lone Express dependancy which was installed with `npm install express`. The [package-lock.json](./assignment5/package-lock.json) is an extended listing of dependancies which I included just in case. I did, however, omit the `node_modules` folder where dependancies are actually stored - you must run `npm install` from the `assignment5` folder to get these dependancies for the code to run
1. [index.html](./assignment5/index.html) is a clone of the previous Bootstrap contact form from the previous two assignments, but updated to submit the form with a `POST` to `/submit`.
1. [app.js](./assignment5/app.js) creates an Express router to handle two specific things. First, any `GET` request returns the `index.html` page so the page is rendered. Secondly, a `POST` request to `/submit` will output the data in the `index.html` form sent through the POST request. To run the server, do `node app.js` in the `assignment5` folder (after running `npm install` to install the Express dependancy)

## Assignment 6

Assignment 5 was based around choosing various tutorials on React, Typescript, Angular, Vue, Node in Google Cloud, or Express. The following tutorials and the contents in each are listed below:

1. The `react-tutorial` folder contains work from [this React tutorial](https://reactjs.org/tutorial/tutorial.html) that creates a tic-tac-toe game with some other nice features. The entire game can be run by navigating to the `react-tutorial` folder, running `npm install` to install the required Node modules, and then `npm start` to run the app. The files are as follows:
   1. [src/index.js](./assignment6/react-tutorial/src/index.js) contains all the React code changes that was implemented as part of the tutorial.
   1. Everything else was installed through `npx create-react-app react-tutorial` or otherwise provided as part of the tutorial. These are included so the app can run locally.
1. The `typescript-demo` folder contains work from [this Typescript introduction](https://angular-presentation.firebaseapp.com/angular/typescript/intro). While I saved files locally, the demo itself runs in the web browser and is self-verified through the UI. The best was to test is to take the code I wrote in [Codelab.ts](./assignment6/typescript-demo/Codelab.ts) and paste it into the [demo UI](https://angular-presentation.firebaseapp.com/angular/typescript/exercise-new) to see that the requirements are all green and passing.
1. The `angular-demo` folder contains work from [this Angular introduction](https://codelab.fun/angular/create-first-app/intro). While I saved files locally, the demo itself runs in the web browser and is self-verified through the UI. There were three parts in the demo that correspond to the following files
   1. [app.component.ts](./assignment6/angular-demo/app.component.ts) was for the first step to create an Angular component and can be verified by pasting code into [this UI](https://codelab.fun/angular/create-first-app/exercise-component) and seeing that all the steps in the upper right are green.
   1. [app.module.ts](./assignment6/angular-demo/app.module.ts) was for the second step to create an Angular module and can be verified by pasting code into [this UI](https://codelab.fun/angular/create-first-app/exercise-module) and seeing that all the steps in the upper right are green.
   1. [main.ts](./assignment6/angular-demo/main.ts) was for the last step to create a main file that bootstraps/starts all the components. This can be verified by pasting code into [this UI](https://codelab.fun/angular/create-first-app/exercise-bootstrap) and seeing that all the steps in the upper right are green.
